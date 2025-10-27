import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingBag } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full" />
            <span className="font-serif text-2xl font-bold text-foreground">NETISEA</span>
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
            <Link href="/about" className="text-sm font-medium text-primary">
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
              <Button variant="ghost" size="icon">
                <ShoppingBag className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Story</h1>
          <p className="text-muted-foreground text-lg">Discover the passion and craftsmanship behind NETISEA</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/pottery-studio-workspace-with-clay-and-tools.jpg"
                alt="Our pottery studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Handcrafted with Love</h2>
              <p className="text-muted-foreground leading-relaxed">
                NETISEA was born from a deep love for pottery and the natural beauty of the coast. What started as a
                small studio by the sea has grown into a collection of unique, handcrafted pieces that bring warmth and
                elegance to homes around the world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every piece we create is inspired by the ocean waves, sandy shores, and the timeless beauty of coastal
                living. We believe that pottery should be both functional and beautiful, adding character to your
                everyday moments.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Our Commitment to Quality</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use only the finest materials and time-honored techniques to create pottery that lasts. Each piece is
                carefully shaped, glazed, and fired to perfection, ensuring durability and beauty that stands the test
                of time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sustainability is at the heart of everything we do. We source our clay responsibly, minimize waste in
                our studio, and package our products with eco-friendly materials.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-1 md:order-2">
              <img
                src="/artisanal-pottery-vase-on-white-background.jpg"
                alt="Quality craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide our craft and our business
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Craftsmanship",
                description: "Every piece is made by hand with attention to detail and care",
              },
              {
                title: "Sustainability",
                description: "We prioritize eco-friendly practices and responsible sourcing",
              },
              {
                title: "Authenticity",
                description: "Our designs are original and inspired by natural coastal beauty",
              },
              {
                title: "Quality",
                description: "We use premium materials and proven techniques for lasting beauty",
              },
              {
                title: "Community",
                description: "We support local artisans and give back to our coastal community",
              },
              {
                title: "Innovation",
                description: "We blend traditional methods with modern design sensibilities",
              },
            ].map((value, index) => (
              <div key={index} className="bg-background p-6 rounded-lg">
                <h3 className="font-semibold text-foreground text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Bring Our Pottery Home?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Explore our collection and find the perfect piece to add warmth and character to your space
          </p>
          <Link href="/shop">
            <Button size="lg">Shop Our Collection</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
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
            <p>&copy; 2025 NETISEA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
