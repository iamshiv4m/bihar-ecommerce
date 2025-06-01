"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileInfo } from "./profile-info";
import { RecentOrders } from "./recent-orders";
import { User, Package, Settings } from "lucide-react";

export function ProfileTabs() {
  return (
    <Tabs defaultValue="profile" className="space-y-6">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="orders" className="flex items-center gap-2">
          <Package className="h-4 w-4" />
          Orders
        </TabsTrigger>
        <TabsTrigger value="settings" className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          Settings
        </TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <ProfileInfo />
      </TabsContent>

      <TabsContent value="orders">
        <RecentOrders />
      </TabsContent>

      <TabsContent value="settings">
        <div className="text-center py-12">
          <p className="text-muted-foreground">Settings panel coming soon...</p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
