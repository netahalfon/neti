import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="NETISEA" width={60} height={60} className="h-16 w-16" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Handcrafted pottery and ceramics inspired by coastal beauty and artisanal tradition.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=bowls"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Bowls
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=plates"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Plates
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=vases"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Vases
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/refunds" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Refunds
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/account" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/account/orders"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Order History
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NETISEA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
