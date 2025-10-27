import Link from "next/link"
import { Droplets, Flame, Wind, AlertCircle, Sparkles, Heart } from "lucide-react"

export default function CarePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6">Pottery Care Guide</h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Keep your handcrafted pottery beautiful for years to come
          </p>

          <div className="space-y-12">
            {/* Daily Care */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Daily Care</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With proper care, your handcrafted pottery will remain beautiful and functional for many years. Here
                  are our recommendations for daily use:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Handle with care - pottery is durable but can chip or crack if dropped</li>
                  <li>Avoid extreme temperature changes to prevent thermal shock</li>
                  <li>Use soft sponges or cloths for cleaning</li>
                  <li>Store pieces with adequate space to prevent chipping</li>
                </ul>
              </div>
            </section>

            {/* Washing */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Droplets className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Washing & Cleaning</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <h3 className="font-semibold text-foreground">Hand Washing (Recommended)</h3>
                <p>
                  For best results, we recommend hand washing your pottery with warm water and mild dish soap. Use a
                  soft sponge or cloth and avoid abrasive scrubbers that could scratch the glaze.
                </p>
                <h3 className="font-semibold text-foreground mt-6">Dishwasher Use</h3>
                <p>
                  Most of our pottery is dishwasher safe, but hand washing will help preserve the beauty and longevity
                  of your pieces. If using a dishwasher:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Place items securely to prevent movement during the wash cycle</li>
                  <li>Avoid overcrowding to prevent chipping</li>
                  <li>Use a gentle cycle when possible</li>
                  <li>Allow pieces to cool before removing from the dishwasher</li>
                </ul>
              </div>
            </section>

            {/* Microwave & Oven */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Flame className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Microwave & Oven Use</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <h3 className="font-semibold text-foreground">Microwave</h3>
                <p>
                  Most of our pottery is microwave safe. However, avoid heating empty vessels and be cautious when
                  removing hot items from the microwave.
                </p>
                <h3 className="font-semibold text-foreground mt-6">Oven</h3>
                <p>
                  Many of our pieces are oven safe up to 350°F (175°C). Always check the product description for
                  specific temperature limits. Important tips:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Never place cold pottery directly into a hot oven</li>
                  <li>Allow pieces to warm gradually with the oven</li>
                  <li>Avoid direct contact with heating elements</li>
                  <li>Use oven mitts when handling hot pottery</li>
                </ul>
              </div>
            </section>

            {/* Storage */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Wind className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Storage</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Proper storage helps prevent chips and cracks:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Store pieces with adequate space between them</li>
                  <li>Use felt pads or cloth between stacked items</li>
                  <li>Keep pottery in a dry, stable environment</li>
                  <li>Avoid storing in areas with extreme temperature fluctuations</li>
                </ul>
              </div>
            </section>

            {/* Stains & Marks */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Removing Stains & Marks</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Over time, pottery may develop stains or marks from use. Here's how to address them:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Coffee/Tea stains:</strong> Soak in a solution of baking soda and water
                  </li>
                  <li>
                    <strong>Cutlery marks:</strong> Use a non-abrasive cleaner like Bar Keeper's Friend
                  </li>
                  <li>
                    <strong>Food residue:</strong> Soak in warm soapy water before washing
                  </li>
                  <li>
                    <strong>Stubborn stains:</strong> Make a paste of baking soda and water, apply gently
                  </li>
                </ul>
              </div>
            </section>

            {/* What to Avoid */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-6">What to Avoid</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Thermal shock - avoid sudden temperature changes</li>
                  <li>Abrasive cleaners or scrubbers that can scratch the glaze</li>
                  <li>Harsh chemicals or bleach</li>
                  <li>Freezing pottery (can cause cracking)</li>
                  <li>Direct flame or stovetop use</li>
                </ul>
              </div>
            </section>

            {/* Love Your Pottery */}
            <section className="bg-muted/30 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Love Your Pottery</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Each piece of NETISEA pottery is handcrafted with care and attention to detail. With proper care, your
                pottery will bring beauty and functionality to your home for years to come.
              </p>
              <p className="text-muted-foreground">
                If you have specific questions about caring for your pottery, please don't hesitate to reach out to our
                team.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
