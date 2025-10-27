"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, ShoppingBag, Minus, Plus, Truck, RotateCcw, Shield } from "lucide-react"
import { useParams } from "next/navigation"

const productData: Record<
  string,
  {
    id: number
    name: string
    price: number
    category: string
    description: string
    details: string[]
    care: string[]
    images: string[]
    inStock: boolean
    dimensions: string
  }
> = {
  "1": {
    id: 1,
    name: "Coastal Wave Bowl",
    price: 68,
    category: "Bowls",
    description:
      "Inspired by the gentle waves of the coast, this handcrafted bowl features a unique wave pattern that brings the beauty of the ocean into your home. Perfect for serving salads, pasta, or as a stunning centerpiece.",
    details: [
      "Handcrafted from high-quality stoneware",
      "Food-safe glazes",
      "Microwave and dishwasher safe",
      "Each piece is unique with slight variations",
    ],
    care: [
      "Dishwasher safe, but hand washing recommended",
      "Avoid sudden temperature changes",
      "Not suitable for stovetop or oven use",
    ],
    images: [
      "ceramic bowl with wave pattern front view",
      "ceramic bowl with wave pattern side view",
      "ceramic bowl with wave pattern top view",
    ],
    inStock: true,
    dimensions: '10" diameter x 4" height',
  },
  "2": {
    id: 2,
    name: "Minimalist Vase",
    price: 52,
    category: "Vases",
    description:
      "A timeless piece that embodies simplicity and elegance. This minimalist vase is perfect for showcasing fresh flowers or standing alone as a sculptural element in your space.",
    details: [
      "Hand-thrown on the pottery wheel",
      "Smooth matte finish",
      "Watertight for fresh flowers",
      "Signed by the artist",
    ],
    care: ["Wipe clean with damp cloth", "Handle with care", "Not dishwasher safe"],
    images: [
      "white minimalist ceramic vase front view",
      "white minimalist ceramic vase side angle",
      "white minimalist ceramic vase with flowers",
    ],
    inStock: true,
    dimensions: '6" diameter x 12" height',
  },
}

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const product = productData[productId] || productData["1"]

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const relatedProducts = [
    { id: 3, name: "Artisan Mug Set", price: 45, image: "set of handmade ceramic mugs" },
    { id: 4, name: "Ocean Platter", price: 85, image: "large ceramic serving platter" },
    { id: 5, name: "Textured Dinner Plate", price: 38, image: "textured ceramic dinner plate" },
    { id: 7, name: "Tall Cylinder Vase", price: 62, image: "tall cylinder ceramic vase" },
  ]

  const handleAddToCart = () => {
    console.log("[v0] Added to cart:", product.name, "Quantity:", quantity)
  }

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    console.log("[v0] Wishlist toggled:", product.name, "Added:", !isWishlisted)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full" />
            <span className="font-serif text-2xl font-bold text-foreground">The Clay Kingdom</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/shop" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Shop
            </Link>
            <Link
              href="/collections"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Collections
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-foreground transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
                <img
                  src={`/product-${product.id}-${selectedImage}.jpg?height=600&width=600&query=${product.images[selectedImage]}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden bg-secondary border-2 transition-colors ${
                      selectedImage === index ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={`/product-${product.id}-${index}.jpg?height=200&width=200&query=${image}`}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                <h1 className="font-serif text-4xl font-bold text-foreground mb-4">{product.name}</h1>
                <div className="text-3xl font-bold text-primary">${product.price}</div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-foreground mb-2">Dimensions</div>
                  <div className="text-sm text-muted-foreground">{product.dimensions}</div>
                </div>

                {/* Quantity Selector */}
                <div>
                  <div className="text-sm font-medium text-foreground mb-2">Quantity</div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    {product.inStock ? (
                      <span className="text-sm text-green-600">In Stock</span>
                    ) : (
                      <span className="text-sm text-destructive">Out of Stock</span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button size="lg" className="flex-1" onClick={handleAddToCart} disabled={!product.inStock}>
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleToggleWishlist}
                    className={isWishlisted ? "bg-primary/10" : "bg-transparent"}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? "fill-primary" : ""}`} />
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="border-t border-border pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground text-sm">Free Shipping</div>
                    <div className="text-sm text-muted-foreground">On orders over $100</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RotateCcw className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground text-sm">Easy Returns</div>
                    <div className="text-sm text-muted-foreground">30-day return policy</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground text-sm">Secure Payment</div>
                    <div className="text-sm text-muted-foreground">100% secure transactions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="details"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="care"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  Care Instructions
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-6">
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="care" className="mt-6">
                <ul className="space-y-2">
                  {product.care.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-muted-foreground">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8">You May Also Like</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/shop/${relatedProduct.id}`}>
                <Card className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden bg-background">
                    <img
                      src={`/product-${relatedProduct.id}.jpg?height=400&width=400&query=${relatedProduct.image}`}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-foreground mb-2">{relatedProduct.name}</h3>
                    <span className="text-lg font-semibold text-primary">${relatedProduct.price}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">The Clay Kingdom</h3>
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
            <p>&copy; 2025 The Clay Kingdom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
