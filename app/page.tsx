import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, Heart, Truck, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance">
                Handcrafted Pottery for Your Home
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Discover unique, artisanal ceramics inspired by coastal beauty. Each piece is lovingly crafted to bring
                warmth and elegance to your space.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/shop">
                  <Button size="lg" className="text-base">
                    Shop Collection
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="text-base bg-transparent">
                    Learn Our Story
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src="/artisanal-pottery-vase-on-white-background.jpg"
                alt="Featured pottery piece"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Collection</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our most beloved pieces, each one unique and made with care
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Coastal Wave Bowl", price: "$68", image: "ceramic bowl with wave pattern" },
              { name: "Minimalist Vase", price: "$52", image: "white minimalist ceramic vase" },
              { name: "Artisan Mug Set", price: "$45", image: "set of handmade ceramic mugs" },
              { name: "Ocean Platter", price: "$85", image: "large ceramic serving platter" },
            ].map((product, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={`/.jpg?height=400&width=400&query=${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-foreground mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{product.price}</span>
                    <Button size="sm" variant="ghost">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Free Shipping",
                description: "On orders over $100",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure Payment",
                description: "100% secure transactions",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Handcrafted",
                description: "Made with love and care",
              },
              {
                icon: <ShoppingBag className="w-8 h-8" />,
                title: "Easy Returns",
                description: "30-day return policy",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/pottery-studio-workspace-with-clay-and-tools.jpg"
                alt="Our pottery studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Crafted by Hand, Inspired by Nature
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every piece in our collection is thoughtfully designed and carefully crafted in our coastal studio. We
                draw inspiration from the ocean, the sand, and the natural beauty that surrounds us.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to quality and sustainability means each item is made to last, bringing joy to your home
                for years to come.
              </p>
              <Button size="lg">Discover Our Process</Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
