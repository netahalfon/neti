"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingBag, Minus, Plus, X } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

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
            <Link href="/wishlist">
              <Button variant="ghost" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Cart Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Shopping Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Add some beautiful pottery to your cart!</p>
              <Link href="/shop">
                <Button size="lg">Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="w-24 h-24 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                          <img
                            src={`/product-${item.id}.jpg?height=200&width=200&query=${item.image}`}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div>
                              <Link href={`/shop/${item.id}`}>
                                <h3 className="font-medium text-foreground hover:text-primary transition-colors">
                                  {item.name}
                                </h3>
                              </Link>
                              <p className="text-sm text-muted-foreground">{item.category}</p>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center border border-border rounded-lg">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-12 text-center text-sm font-medium">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                            <div className="text-lg font-semibold text-primary">${item.price * item.quantity}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6 space-y-4">
                    <h2 className="font-serif text-2xl font-bold text-foreground">Order Summary</h2>
                    <div className="space-y-2 py-4 border-y border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium text-foreground">${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="font-medium text-foreground">{totalPrice >= 100 ? "Free" : "$10.00"}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tax</span>
                        <span className="font-medium text-foreground">${(totalPrice * 0.08).toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-foreground">Total</span>
                      <span className="text-primary">
                        ${(totalPrice + (totalPrice >= 100 ? 0 : 10) + totalPrice * 0.08).toFixed(2)}
                      </span>
                    </div>
                    <Link href="/checkout">
                      <Button size="lg" className="w-full">
                        Proceed to Checkout
                      </Button>
                    </Link>
                    <Link href="/shop">
                      <Button size="lg" variant="outline" className="w-full bg-transparent">
                        Continue Shopping
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 mt-20">
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
