"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Heart, User, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="NETISEA" width={50} height={50} className="h-12 w-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/gallery" className="text-sm font-medium hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/40">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/gallery" className="text-sm font-medium hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
