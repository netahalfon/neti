import Link from "next/link"
import { RotateCcw, Clock, Package, CheckCircle } from "lucide-react"

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6">Returns & Exchanges</h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">Easy returns for your peace of mind</p>

          <div className="space-y-12">
            {/* Return Policy */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <RotateCcw className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Our Return Policy</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At NETISEA, we stand behind the quality of our handcrafted pottery. If you're not completely satisfied
                  with your purchase, we offer hassle-free returns within 30 days of delivery.
                </p>
                <p>
                  All returned items must be in their original condition, unused, and in the original packaging to
                  qualify for a full refund.
                </p>
              </div>
            </section>

            {/* Return Process */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Package className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Return Process</h2>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Contact Us</h3>
                    <p className="text-muted-foreground">
                      Email us at support@netisea.com with your order number and reason for return
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Receive Return Label</h3>
                    <p className="text-muted-foreground">
                      We'll send you a prepaid return shipping label within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Pack & Ship</h3>
                    <p className="text-muted-foreground">
                      Carefully pack the item in its original packaging and ship it back to us
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Get Your Refund</h3>
                    <p className="text-muted-foreground">
                      Once we receive and inspect your return, we'll process your refund within 5-10 business days
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Timeframe */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Return Timeframe</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  You have <strong>30 days</strong> from the date of delivery to initiate a return. Returns requested
                  after this period may not be accepted.
                </p>
                <p>
                  Please note that it may take 2-3 weeks for your return to be processed once shipped, depending on your
                  location.
                </p>
              </div>
            </section>

            {/* Exchanges */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Exchanges</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you'd like to exchange an item for a different size, color, or style, please return the original
                  item and place a new order for the item you'd like.
                </p>
                <p>
                  For defective or damaged items, we'll send a replacement at no additional cost. Please contact us with
                  photos of the damage.
                </p>
              </div>
            </section>

            {/* Important Notes */}
            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="font-serif text-2xl font-semibold mb-4">Important Notes</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Custom or personalized items cannot be returned unless defective</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Return shipping is free for defective items; otherwise, a small fee may apply</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Refunds are issued to the original payment method</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Gift cards and final sale items are non-returnable</span>
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section className="text-center">
              <h2 className="font-serif text-2xl font-semibold mb-4">Questions About Returns?</h2>
              <p className="text-muted-foreground mb-6">
                Our customer service team is ready to assist you with any return or exchange inquiries.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
