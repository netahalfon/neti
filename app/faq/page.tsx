import Link from "next/link"
import { HelpCircle, Package, CreditCard, Truck, RotateCcw, Shield } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6">Frequently Asked Questions</h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Find answers to common questions about our products and services
          </p>

          <div className="space-y-12">
            {/* Orders & Shipping */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Truck className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Orders & Shipping</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How long does shipping take?</AccordionTrigger>
                  <AccordionContent>
                    Standard shipping takes 5-7 business days, express shipping takes 2-3 business days, and overnight
                    shipping takes 1 business day. International shipping times vary by location.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Do you offer free shipping?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer free standard shipping on all orders over $75 within the United States.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I track my order?</AccordionTrigger>
                  <AccordionContent>
                    Once your order ships, you'll receive a confirmation email with a tracking number. You can also
                    track your order in your account dashboard.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we ship to select international destinations. Shipping rates and times vary by location and are
                    calculated at checkout. International customers are responsible for any customs duties or taxes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Returns & Refunds */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <RotateCcw className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Returns & Refunds</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-5">
                  <AccordionTrigger>What is your return policy?</AccordionTrigger>
                  <AccordionContent>
                    We offer a 30-day return policy on all items. Items must be unused, in original condition, and in
                    original packaging. Contact us at support@netisea.com to initiate a return.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>How long does it take to get a refund?</AccordionTrigger>
                  <AccordionContent>
                    Once we receive and inspect your return, refunds are processed within 5-10 business days to your
                    original payment method.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>Can I exchange an item?</AccordionTrigger>
                  <AccordionContent>
                    We only replace items if they are defective or damaged. For exchanges, please return the original
                    item and place a new order for the item you'd like.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Products */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Package className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Products</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-8">
                  <AccordionTrigger>Are your products handmade?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Each piece of pottery is carefully handcrafted by skilled artisans. This means slight
                    variations in color, size, and design may occur, making each piece unique.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>Are your products dishwasher and microwave safe?</AccordionTrigger>
                  <AccordionContent>
                    Most of our pottery is dishwasher and microwave safe. However, we recommend hand washing to preserve
                    the beauty and longevity of your pieces. Check individual product descriptions for specific care
                    instructions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger>Do you offer custom or personalized items?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We offer custom pottery pieces for special occasions. Please contact us at support@netisea.com
                    to discuss your custom order requirements.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Payment */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Payment</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-11">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and
                    PayPal.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                  <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We use industry-standard SSL encryption to protect your payment information. We never store
                    your full credit card details on our servers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Account */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-semibold">Account</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-13">
                  <AccordionTrigger>Do I need an account to place an order?</AccordionTrigger>
                  <AccordionContent>
                    No, you can checkout as a guest. However, creating an account allows you to track orders, save items
                    to your wishlist, and checkout faster on future purchases.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-14">
                  <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                  <AccordionContent>
                    Click on "Login" and then "Forgot Password?" Enter your email address and we'll send you
                    instructions to reset your password.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Contact */}
            <section className="bg-muted/30 p-8 rounded-lg text-center">
              <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-2xl font-semibold mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our customer service team is here to help.
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
