"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingBag, X } from "lucide-react"
import { useWishlist } from "@/lib/wishlist-context"
import { useCart } from "@/lib/cart-context"

export default function WishlistPage() {
  const { items, removeItem } = useWishlist()
  const { addItem, totalItems } = useCart()

  const handleAddToCart = (item: (typeof items)[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
      quantity: 1,
    })
  }

  return (
    <div className="min-h-screen">
     
      {/* Wishlist Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-8">My Wishlist</h1>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6">Save your favorite items for later!</p>
              <Link href="/shop">
                <Button size="lg">Browse Products</Button>
              </Link>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((item) => (
                <Card key={item.id} className="group overflow-hidden border-border relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 z-10 bg-background/80 hover:bg-background"
                    onClick={() => removeItem(item.id)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                  <Link href={`/shop/${item.id}`}>
                    <div className="aspect-square overflow-hidden bg-secondary">
                      <img
                        src={`/product-${item.id}.jpg?height=400&width=400&query=${item.image}`}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <div className="text-xs text-muted-foreground mb-1">{item.category}</div>
                    <Link href={`/shop/${item.id}`}>
                      <h3 className="font-medium text-foreground mb-2 hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-semibold text-primary">${item.price}</span>
                      {!item.inStock && <span className="text-xs text-destructive">Out of Stock</span>}
                    </div>
                    <Button size="sm" className="w-full" onClick={() => handleAddToCart(item)} disabled={!item.inStock}>
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  )
}
