"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Eye, Download, RotateCcw } from "lucide-react";

const orders = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "Delivered",
    total: 7498,
    items: 2,
    trackingId: "TRK123456789",
    deliveryDate: "2024-01-20",
  },
  {
    id: "ORD-002",
    date: "2024-01-10",
    status: "Shipped",
    total: 1899,
    items: 1,
    trackingId: "TRK987654321",
    estimatedDelivery: "2024-01-18",
  },
  {
    id: "ORD-003",
    date: "2024-01-05",
    status: "Processing",
    total: 899,
    items: 1,
    trackingId: null,
    estimatedDelivery: "2024-01-15",
  },
  {
    id: "ORD-004",
    date: "2023-12-20",
    status: "Delivered",
    total: 3499,
    items: 1,
    trackingId: "TRK456789123",
    deliveryDate: "2023-12-25",
  },
];

export function OrdersList() {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Shipped":
        return "bg-blue-100 text-blue-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filterOrders = (status?: string) => {
    let filtered = orders;
    if (status && status !== "all") {
      filtered = orders.filter(
        (order) => order.status.toLowerCase() === status.toLowerCase()
      );
    }
    if (searchTerm) {
      filtered = filtered.filter((order) =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Order Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="shipped">Shipped</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <OrdersGrid orders={filterOrders()} getStatusColor={getStatusColor} />
        </TabsContent>

        <TabsContent value="processing">
          <OrdersGrid
            orders={filterOrders("processing")}
            getStatusColor={getStatusColor}
          />
        </TabsContent>

        <TabsContent value="shipped">
          <OrdersGrid
            orders={filterOrders("shipped")}
            getStatusColor={getStatusColor}
          />
        </TabsContent>

        <TabsContent value="delivered">
          <OrdersGrid
            orders={filterOrders("delivered")}
            getStatusColor={getStatusColor}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function OrdersGrid({
  orders,
  getStatusColor,
}: {
  orders: any[];
  getStatusColor: (status: string) => string;
}) {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Card key={order.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="text-lg">Order {order.id}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Placed on {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right space-y-2">
                <Badge className={getStatusColor(order.status)}>
                  {order.status}
                </Badge>
                <p className="text-lg font-semibold">
                  ₹{order.total.toLocaleString()}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Items:</span>
                <span className="ml-2">{order.items} item(s)</span>
              </div>
              {order.trackingId && (
                <div>
                  <span className="text-muted-foreground">Tracking ID:</span>
                  <span className="ml-2 font-mono">{order.trackingId}</span>
                </div>
              )}
              {order.deliveryDate && (
                <div>
                  <span className="text-muted-foreground">Delivered on:</span>
                  <span className="ml-2">
                    {new Date(order.deliveryDate).toLocaleDateString()}
                  </span>
                </div>
              )}
              {order.estimatedDelivery && !order.deliveryDate && (
                <div>
                  <span className="text-muted-foreground">
                    Estimated delivery:
                  </span>
                  <span className="ml-2">
                    {new Date(order.estimatedDelivery).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Button>
              {order.status === "Delivered" && (
                <>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Invoice
                  </Button>
                  <Button variant="outline" size="sm">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reorder
                  </Button>
                </>
              )}
              {order.trackingId && order.status !== "Delivered" && (
                <Button variant="outline" size="sm">
                  Track Order
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}

      {orders.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground">No orders found.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
