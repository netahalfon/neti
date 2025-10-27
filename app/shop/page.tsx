"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Heart, ShoppingBag, SlidersHorizontal, ChevronDown, ChevronUp, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useWishlist } from "@/lib/wishlist-context"
import { products } from "@/lib/products"

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("featured")
  const [showInStockOnly, setShowInStockOnly] = useState(false)
  const [categoriesExpanded, setCategoriesExpanded] = useState(true)
  const [stockExpanded, setStockExpanded] = useState(true)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const { toggleItem, isInWishlist } = useWishlist()

  const categories = ["Bowls", "Vases", "Mugs", "Plates"]

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false
      }
      if (showInStockOnly && !product.inStock) {
        return false
      }
      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  const FilterSection = () => (
    <div className="space-y-6">
      <div>
        <button
          onClick={() => setCategoriesExpanded(!categoriesExpanded)}
          className="flex items-center justify-between w-full font-semibold text-foreground mb-4 hover:text-primary transition-colors"
        >
          <span>Categories</span>
          {categoriesExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {categoriesExpanded && (
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => toggleCategory(category)}
                />
                <Label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-border pt-6">
        <button
          onClick={() => setStockExpanded(!stockExpanded)}
          className="flex items-center justify-between w-full font-semibold text-foreground mb-4 hover:text-primary transition-colors"
        >
          <span>Availability</span>
          {stockExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {stockExpanded && (
          <div className="flex items-center gap-2">
            <Checkbox
              id="in-stock"
              checked={showInStockOnly}
              onCheckedChange={(checked) => setShowInStockOnly(checked as boolean)}
            />
            <Label htmlFor="in-stock" className="text-sm cursor-pointer">
              In Stock Only
            </Label>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Shop All Products</h1>
          <p className="text-muted-foreground text-lg">
            Discover our complete collection of handcrafted pottery and ceramics
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Filters */}
            {filtersOpen && (
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-semibold text-foreground">Filters</h2>
                    <Button variant="ghost" size="icon" onClick={() => setFiltersOpen(false)} className="h-8 w-8">
                      <ChevronUp className="w-4 h-4" />
                    </Button>
                  </div>
                  <FilterSection />
                </div>
              </aside>
            )}

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-4">
                  {!filtersOpen && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="hidden lg:flex bg-transparent"
                      onClick={() => setFiltersOpen(true)}
                    >
                      <Menu className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  )}

                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
                        <SlidersHorizontal className="w-4 h-4 mr-2" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6">
                        <FilterSection />
                      </div>
                    </SheetContent>
                  </Sheet>

                  <p className="text-sm text-muted-foreground">
                    {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
                  </p>
                </div>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="name">Name: A to Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Link key={product.id} href={`/shop/${product.id}`}>
                      <Card className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-shadow h-full">
                        <div className="aspect-square overflow-hidden bg-secondary relative">
                          <img
                            src={`/product-${product.id}.jpg?height=400&width=400&query=${product.image}`}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {!product.inStock && (
                            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                              <span className="text-sm font-semibold text-foreground">Out of Stock</span>
                            </div>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <div className="text-xs text-muted-foreground mb-1">{product.category}</div>
                          <h3 className="font-medium text-foreground mb-2">{product.name}</h3>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold text-primary">${product.price}</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                toggleItem({
                                  id: product.id,
                                  name: product.name,
                                  price: product.price,
                                  image: product.image,
                                  category: product.category,
                                  inStock: product.inStock,
                                })
                              }}
                            >
                              <Heart
                                className={`w-4 h-4 ${isInWishlist(product.id) ? "fill-primary text-primary" : ""}`}
                              />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No products found matching your filters.</p>
                  <Button
                    variant="outline"
                    className="mt-4 bg-transparent"
                    onClick={() => {
                      setSelectedCategories([])
                      setShowInStockOnly(false)
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">NETISEA</h3>
              <p className="text-sm text-background/80">Handcrafted pottery and ceramics inspired by coastal beauty.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <Link href="/shop" className="hover:text-background transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="hover:text-background transition-colors">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="/new" className="hover:text-background transition-colors">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="/sale" className="hover:text-background transition-colors">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <Link href="/about" className="hover:text-background transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/process" className="hover:text-background transition-colors">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability" className="hover:text-background transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-background transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <Link href="/shipping" className="hover:text-background transition-colors">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-background transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-background transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/care" className="hover:text-background transition-colors">
                    Care Guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
            <p>&copy; 2025 NETISEA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
