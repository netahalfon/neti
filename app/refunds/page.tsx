import Link from "next/link"
import { RotateCcw, Clock, CreditCard, AlertCircle } from "lucide-react"

export default function RefundsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6">Refund Policy</h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">Our commitment to your satisfaction</p>

          <div className="space-y-12">
            {/* Return Window */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Return Window</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We want you to be completely satisfied with your purchase. If you're not happy with your order, you
                  may return it within <strong>30 days</strong> of delivery for a full refund.
                </p>
                <p>
                  Items must be unused, in their original condition, and in the original packaging to be eligible for a
                  return.
                </p>
              </div>
            </section>

            {/* How to Return */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <RotateCcw className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">How to Return an Item</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li>Contact our customer service team at support@netisea.com to initiate a return</li>
                  <li>We'll provide you with a return shipping label and instructions</li>
                  <li>Pack the item securely in its original packaging</li>
                  <li>Ship the item back to us using the provided label</li>
                  <li>Once we receive and inspect the item, we'll process your refund</li>
                </ol>
              </div>
            </section>

            {/* Refund Processing */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Refund Processing</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Once your return is received and inspected, we will send you an email to notify you that we have
                  received your returned item.
                </p>
                <p>
                  If your return is approved, your refund will be processed and automatically applied to your original
                  method of payment within 5-10 business days.
                </p>
              </div>
            </section>

            {/* Non-Returnable Items */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Non-Returnable Items</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>The following items cannot be returned:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Custom or personalized pottery pieces</li>
                  <li>Items marked as final sale</li>
                  <li>Gift cards</li>
                  <li>Items damaged due to misuse or improper care</li>
                </ul>
              </div>
            </section>

            {/* Exchanges */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-6">Exchanges</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We only replace items if they are defective or damaged. If you need to exchange an item for the same
                  product, please contact us at support@netisea.com.
                </p>
              </div>
            </section>

            {/* Damaged Items */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-6">Damaged or Defective Items</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If your item arrives damaged or defective, please contact us immediately with photos of the damage.
                  We'll arrange for a replacement or full refund at no additional cost to you.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="font-serif text-2xl font-semibold mb-4">Need Help with a Return?</h2>
              <p className="text-muted-foreground mb-6">
                Our customer service team is here to help. Contact us with any questions about returns or refunds.
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
