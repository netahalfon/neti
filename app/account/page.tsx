"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, ShoppingBag, User, LogOut, Package } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { useCart } from "@/lib/cart-context"

export default function AccountPage() {
  const router = useRouter()
  const { user, logout, isLoading } = useAuth()
  const { totalItems } = useCart()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  if (isLoading || !user) {
    return null
  }

  return (
    <div className="min-h-screen">
      

      {/* Account Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-2">My Account</h1>
            <p className="text-muted-foreground">Welcome back, {user.name}!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Account Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Name</div>
                  <div className="font-medium text-foreground">{user.name}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <div className="font-medium text-foreground">{user.email}</div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Order History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">You haven't placed any orders yet.</p>
                <Link href="/shop">
                  <Button className="w-full">Start Shopping</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Wishlist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Save your favorite items for later.</p>
                <Link href="/wishlist">
                  <Button variant="outline" className="w-full bg-transparent">
                    View Wishlist
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Shopping Cart
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {totalItems > 0 ? `You have ${totalItems} item(s) in your cart.` : "Your cart is empty."}
                </p>
                <Link href="/cart">
                  <Button variant="outline" className="w-full bg-transparent">
                    View Cart
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardContent className="p-6">
              <Button variant="destructive" onClick={handleLogout} className="w-full">
                <LogOut className="w-5 h-5 mr-2" />
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}
