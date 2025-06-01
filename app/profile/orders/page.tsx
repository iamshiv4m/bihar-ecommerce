import type { Metadata } from "next";
import { OrdersList } from "@/components/profile/orders-list";

export const metadata: Metadata = {
  title: "My Orders - Bihar Crafts",
  description: "View and track all your orders.",
};

export default function OrdersPage() {
  return (
    <div className="page-transition min-h-screen bg-background">
      <div className="bg-muted/30 py-12">
        <div className="container">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold">My Orders</h1>
            <p className="text-muted-foreground">
              Track and manage all your orders
            </p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <OrdersList />
      </div>
    </div>
  );
}
