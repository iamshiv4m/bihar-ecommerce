import type { Metadata } from "next";
import { ProfileTabs } from "@/components/profile/profile-tabs";

export const metadata: Metadata = {
  title: "My Profile - Bihar Crafts",
  description: "Manage your account, orders, and preferences.",
};

export default function ProfilePage() {
  return (
    <div className="page-transition min-h-screen bg-background">
      <div className="bg-muted/30 py-12">
        <div className="container">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold">My Profile</h1>
            <p className="text-muted-foreground">
              Manage your account and preferences
            </p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <ProfileTabs />
      </div>
    </div>
  );
}
