import Link from "next/link"
import { Package, Clock, MapPin, Shield } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6">Shipping Policy</h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Everything you need to know about shipping and delivery
          </p>

          <div className="space-y-12">
            {/* Shipping Methods */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Package className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Shipping Methods</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We offer several shipping options to ensure your handcrafted pottery arrives safely and on time:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Standard Shipping (5-7 business days)</strong> - Free on orders over $75
                  </li>
                  <li>
                    <strong>Express Shipping (2-3 business days)</strong> - $15.00
                  </li>
                  <li>
                    <strong>Overnight Shipping (1 business day)</strong> - $30.00
                  </li>
                  <li>
                    <strong>International Shipping</strong> - Rates calculated at checkout
                  </li>
                </ul>
              </div>
            </section>

            {/* Processing Time */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Processing Time</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or
                  holidays.
                </p>
                <p>
                  If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow
                  additional days in transit for delivery.
                </p>
              </div>
            </section>

            {/* Shipping Locations */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Shipping Locations</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We currently ship to addresses within the United States and select international destinations.</p>
                <p>
                  International customers are responsible for any customs duties, taxes, or fees that may apply to their
                  order.
                </p>
              </div>
            </section>

            {/* Packaging */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Packaging & Protection</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Each piece of pottery is carefully wrapped and packaged with protective materials to ensure it arrives
                  in perfect condition.
                </p>
                <p>
                  We use eco-friendly packaging materials whenever possible and encourage you to recycle or reuse the
                  packaging.
                </p>
              </div>
            </section>

            {/* Tracking */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-6">Order Tracking</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Once your order has shipped, you will receive a confirmation email with a tracking number. You can
                  track your package through the carrier's website or in your account dashboard.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="font-serif text-2xl font-semibold mb-4">Questions About Shipping?</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about our shipping policy or need assistance with your order, please don't
                hesitate to contact us.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
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
