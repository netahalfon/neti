import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingBag, ArrowRight } from "lucide-react"

const collections = [
  {
    id: "coastal-waves",
    name: "Coastal Waves",
    description: "Inspired by the rhythmic motion of ocean waves",
    image: "ceramic bowls with wave patterns",
    itemCount: 12,
  },
  {
    id: "minimalist-modern",
    name: "Minimalist Modern",
    description: "Clean lines and simple elegance for contemporary spaces",
    image: "minimalist white ceramic vases",
    itemCount: 18,
  },
  {
    id: "rustic-charm",
    name: "Rustic Charm",
    description: "Earthy textures and warm tones for a cozy feel",
    image: "rustic ceramic mugs and plates",
    itemCount: 15,
  },
  {
    id: "ocean-blues",
    name: "Ocean Blues",
    description: "Deep blue glazes reminiscent of the sea",
    image: "blue ceramic pottery collection",
    itemCount: 10,
  },
]

export default function CollectionsPage() {
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
            <Link href="/collections" className="text-sm font-medium text-primary">
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
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Collections</h1>
          <p className="text-muted-foreground text-lg">
            Curated selections of pottery organized by style and inspiration
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link key={collection.id} href={`/collections/${collection.id}`}>
                <Card className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-shadow h-full">
                  <div className="aspect-[16/10] overflow-hidden bg-secondary relative">
                    <img
                      src={`/collection-${collection.id}.jpg?height=500&width=800&query=${collection.image}`}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{collection.name}</h3>
                        <p className="text-muted-foreground">{collection.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-muted-foreground">{collection.itemCount} items</span>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        View Collection
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Browse our complete catalog to discover all of our handcrafted pottery pieces
          </p>
          <Link href="/shop">
            <Button size="lg">Shop All Products</Button>
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
