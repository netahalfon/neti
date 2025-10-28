"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ShoppingBag, ArrowLeft } from "lucide-react"
import { useWishlist } from "@/lib/wishlist-context"
import { products, collections } from "@/lib/products"
import { notFound } from "next/navigation"

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const [sortBy, setSortBy] = useState("featured")
  const { toggleItem, isInWishlist } = useWishlist()

  const collection = collections.find((c) => c.id === params.slug)

  if (!collection) {
    notFound()
  }

  const collectionProducts = products
    .filter((product) => product.collection === params.slug)
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

  return (
    <div className="min-h-screen">

      {/* Collection Header */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-secondary">
          <img
            src={`/collection-${collection.id}.jpg?height=600&width=1600&query=${collection.image}`}
            alt={collection.name}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Collections
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">{collection.name}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{collection.longDescription}</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-muted-foreground">
              {collectionProducts.length} {collectionProducts.length === 1 ? "product" : "products"}
            </p>

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
          {collectionProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collectionProducts.map((product) => (
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
                          <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? "fill-primary text-primary" : ""}`} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products in this collection yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Other Collections */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Explore Other Collections
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections
              .filter((c) => c.id !== params.slug)
              .map((otherCollection) => (
                <Link key={otherCollection.id} href={`/collections/${otherCollection.id}`}>
                  <Card className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-shadow h-full">
                    <div className="aspect-[16/10] overflow-hidden bg-background relative">
                      <img
                        src={`/collection-${otherCollection.id}.jpg?height=400&width=600&query=${otherCollection.image}`}
                        alt={otherCollection.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-serif text-xl font-bold text-foreground mb-2">{otherCollection.name}</h3>
                      <p className="text-sm text-muted-foreground">{otherCollection.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
