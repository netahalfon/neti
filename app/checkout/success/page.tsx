import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Mail } from "lucide-react"

export default function CheckoutSuccessPage() {
  const orderNumber = `CK${Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0")}`

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full" />
            <span className="font-serif text-2xl font-bold text-foreground">The Clay Kingdom</span>
          </Link>
        </div>
      </header>

      {/* Success Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardContent className="p-8 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>

              <div>
                <h1 className="font-serif text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
                <p className="text-muted-foreground">Thank you for your purchase</p>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Order Number</div>
                <div className="text-2xl font-bold text-foreground">{orderNumber}</div>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Confirmation Email Sent</h3>
                    <p className="text-sm text-muted-foreground">
                      We've sent a confirmation email with your order details and tracking information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Preparing Your Order</h3>
                    <p className="text-sm text-muted-foreground">
                      Your handcrafted pottery will be carefully packaged and shipped within 2-3 business days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/shop" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full bg-transparent">
                    Continue Shopping
                  </Button>
                </Link>
                <Link href="/" className="flex-1">
                  <Button size="lg" className="w-full">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
