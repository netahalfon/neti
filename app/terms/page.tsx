import Link from "next/link"
import { FileText, Shield, CreditCard, AlertTriangle } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6">Terms & Conditions</h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-12">
            {/* Agreement */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Agreement to Terms</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  By accessing and using the NETISEA website, you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to these terms, please do not use our website.
                </p>
              </div>
            </section>

            {/* Use License */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-6">Use License</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Permission is granted to temporarily download one copy of the materials on NETISEA's website for
                  personal, non-commercial transitory viewing only.
                </p>
                <p>Under this license you may not:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or public display</li>
                  <li>Attempt to reverse engineer any software contained on NETISEA's website</li>
                  <li>Remove any copyright or proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </div>
            </section>

            {/* Product Information */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Product Information</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We strive to provide accurate product descriptions and images. However, as each piece is handcrafted,
                  slight variations in color, size, and design may occur.
                </p>
                <p>
                  We do not warrant that product descriptions, pricing, or other content on this site is accurate,
                  complete, reliable, current, or error-free.
                </p>
              </div>
            </section>

            {/* Pricing & Payment */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Pricing & Payment</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  All prices are listed in USD and are subject to change without notice. We reserve the right to modify
                  or discontinue products at any time.
                </p>
                <p>
                  Payment must be received before your order is processed. We accept major credit cards, debit cards,
                  and other payment methods as indicated on our site.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In no event shall NETISEA or its suppliers be liable for any damages (including, without limitation,
                  damages for loss of data or profit, or due to business interruption) arising out of the use or
                  inability to use the materials on NETISEA's website.
                </p>
              </div>
            </section>

            {/* Privacy */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-6">Privacy</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Your use of NETISEA's website is also governed by our Privacy Policy. Please review our Privacy Policy
                  to understand our practices.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-6">Governing Law</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the United
                  States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="font-serif text-2xl font-semibold mb-6">Changes to Terms</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  NETISEA reserves the right to revise these terms of service at any time without notice. By using this
                  website, you are agreeing to be bound by the current version of these terms and conditions.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-muted/30 p-8 rounded-lg">
              <h2 className="font-serif text-2xl font-semibold mb-4">Questions About Our Terms?</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms & Conditions, please contact us.
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
