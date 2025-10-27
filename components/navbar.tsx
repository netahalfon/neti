// components/navbar.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="NETISEA" className="w-8 h-8" />
          <span className="font-serif text-2xl font-bold text-foreground">
            NETISEA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/shop"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/collections"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Collections
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/wishlist" className="inline-flex">
            <Button variant="ghost" size="icon" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/cart" className="inline-flex">
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
