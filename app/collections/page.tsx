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

    </div>
  )
}
