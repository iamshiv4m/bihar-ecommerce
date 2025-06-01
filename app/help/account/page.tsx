import type { Metadata } from "next";
import { HelpArticleLayout } from "@/components/help/help-article-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Lock, Mail, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Account & Profile Help - Bihar Crafts",
  description: "Manage your account, profile settings, and login issues.",
};

const articles = [
  {
    id: "create-account",
    title: "Creating your Bihar Crafts account",
    excerpt: "Step-by-step guide to setting up your new account",
    content: `
      <h3>Why Create an Account?</h3>
      <ul>
        <li>Faster checkout process</li>
        <li>Order history and tracking</li>
        <li>Wishlist and favorites</li>
        <li>Exclusive member offers</li>
        <li>Address book management</li>
      </ul>
      
      <h3>How to Create Account</h3>
      <ol>
        <li>Click "Login" in the top navigation</li>
        <li>Select "Create Account" tab</li>
        <li>Enter your full name</li>
        <li>Provide a valid email address</li>
        <li>Create a strong password</li>
        <li>Agree to terms and conditions</li>
        <li>Click "Create Account"</li>
        <li>Verify your email address</li>
      </ol>
      
      <h3>Password Requirements</h3>
      <ul>
        <li>Minimum 8 characters</li>
        <li>At least one uppercase letter</li>
        <li>At least one lowercase letter</li>
        <li>At least one number</li>
        <li>Special characters recommended</li>
      </ul>
      
      <h3>Email Verification</h3>
      <p>After creating your account:</p>
      <ul>
        <li>Check your email for verification link</li>
        <li>Click the link to activate your account</li>
        <li>If you don't receive email, check spam folder</li>
        <li>Request new verification email if needed</li>
      </ul>
    `,
    views: 980,
    helpful: 42,
  },
  {
    id: "login-issues",
    title: "Login problems and solutions",
    excerpt: "Troubleshooting common login issues and password problems",
    content: `
      <h3>Common Login Issues</h3>
      
      <h4>Forgot Password</h4>
      <ol>
        <li>Click "Forgot Password" on login page</li>
        <li>Enter your registered email address</li>
        <li>Check email for reset link</li>
        <li>Click link and create new password</li>
        <li>Login with new password</li>
      </ol>
      
      <h4>Account Locked</h4>
      <ul>
        <li>Too many failed login attempts</li>
        <li>Account automatically unlocks after 30 minutes</li>
        <li>Use password reset to unlock immediately</li>
        <li>Contact support if issue persists</li>
      </ul>
      
      <h4>Email Not Recognized</h4>
      <ul>
        <li>Check for typos in email address</li>
        <li>Try different email if you have multiple</li>
        <li>Account might not be created yet</li>
        <li>Contact support to verify account status</li>
      </ul>
      
      <h3>Browser Issues</h3>
      <ul>
        <li>Clear browser cache and cookies</li>
        <li>Disable browser extensions</li>
        <li>Try incognito/private browsing mode</li>
        <li>Update your browser to latest version</li>
        <li>Try different browser</li>
      </ul>
      
      <h3>Security Tips</h3>
      <ul>
        <li>Use unique password for your account</li>
        <li>Enable two-factor authentication</li>
        <li>Don't share login credentials</li>
        <li>Log out from shared computers</li>
        <li>Update password regularly</li>
      </ul>
    `,
    views: 1250,
    helpful: 48,
  },
  {
    id: "profile-settings",
    title: "Managing your profile and settings",
    excerpt: "How to update your personal information and account preferences",
    content: `
      <h3>Accessing Profile Settings</h3>
      <ol>
        <li>Log in to your account</li>
        <li>Click on your name/profile icon</li>
        <li>Select "My Profile" or "Account Settings"</li>
        <li>Choose the section you want to update</li>
      </ol>
      
      <h3>Personal Information</h3>
      <h4>What You Can Update:</h4>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Date of birth</li>
        <li>Gender</li>
      </ul>
      
      <h4>Important Notes:</h4>
      <ul>
        <li>Email changes require verification</li>
        <li>Some changes may affect order processing</li>
        <li>Keep information accurate for deliveries</li>
      </ul>
      
      <h3>Address Management</h3>
      <ul>
        <li>Add multiple addresses</li>
        <li>Set default shipping address</li>
        <li>Edit existing addresses</li>
        <li>Delete unused addresses</li>
        <li>Add address nicknames (Home, Office, etc.)</li>
      </ul>
      
      <h3>Communication Preferences</h3>
      <ul>
        <li>Email notifications</li>
        <li>SMS alerts</li>
        <li>Marketing communications</li>
        <li>Order updates</li>
        <li>Newsletter subscription</li>
      </ul>
      
      <h3>Privacy Settings</h3>
      <ul>
        <li>Profile visibility</li>
        <li>Data sharing preferences</li>
        <li>Cookie settings</li>
        <li>Third-party integrations</li>
      </ul>
    `,
    views: 756,
    helpful: 35,
  },
  {
    id: "delete-account",
    title: "Deleting your account",
    excerpt: "How to permanently delete your Bihar Crafts account",
    content: `
      <h3>Before You Delete</h3>
      <p>Please consider these points before deleting your account:</p>
      <ul>
        <li>Account deletion is permanent and cannot be undone</li>
        <li>You'll lose order history and tracking information</li>
        <li>Saved addresses and preferences will be lost</li>
        <li>Wishlist items will be permanently removed</li>
        <li>You won't receive updates on pending orders</li>
      </ul>
      
      <h3>What Happens to Your Data</h3>
      <ul>
        <li>Personal information is permanently deleted</li>
        <li>Order history is anonymized for business records</li>
        <li>Reviews and ratings may remain anonymous</li>
        <li>Legal and financial records retained as required</li>
      </ul>
      
      <h3>Alternative Options</h3>
      <h4>Instead of deleting, you can:</h4>
      <ul>
        <li>Deactivate account temporarily</li>
        <li>Unsubscribe from marketing emails</li>
        <li>Update privacy settings</li>
        <li>Remove payment methods</li>
        <li>Clear address book</li>
      </ul>
      
      <h3>How to Delete Account</h3>
      <ol>
        <li>Log in to your account</li>
        <li>Go to Account Settings</li>
        <li>Scroll to "Delete Account" section</li>
        <li>Read the warning carefully</li>
        <li>Enter your password to confirm</li>
        <li>Click "Delete Account Permanently"</li>
        <li>Confirm via email verification</li>
      </ol>
      
      <h3>After Deletion</h3>
      <ul>
        <li>You'll receive confirmation email</li>
        <li>Account access is immediately revoked</li>
        <li>Data deletion process begins</li>
        <li>Complete removal within 30 days</li>
      </ul>
      
      <h3>Need Help?</h3>
      <p>If you're having issues with your account, contact our support team before deleting. We may be able to resolve your concerns without account deletion.</p>
    `,
    views: 423,
    helpful: 18,
  },
];

export default function AccountHelpPage() {
  return (
    <HelpArticleLayout
      title="Account & Profile"
      description="Manage your account settings and profile information"
      icon={User}
      breadcrumbs={[
        { label: "Help Center", href: "/help" },
        { label: "Account & Profile", href: "/help/account" },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Stats */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <User className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">Free</div>
                <div className="text-sm text-orange-700">Account Creation</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <Lock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">Secure</div>
                <div className="text-sm text-orange-700">Data Protection</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <Mail className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">Email</div>
                <div className="text-sm text-orange-700">Verification</div>
              </CardContent>
            </Card>
            <Card className="card-gradient border-orange-200">
              <CardContent className="p-4 text-center">
                <Settings className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-900">Full</div>
                <div className="text-sm text-orange-700">Control</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Articles */}
        <div className="lg:col-span-3 space-y-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="card-gradient border-orange-200 hover:glow-orange transition-all"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-orange-900 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-orange-700 mb-4">{article.excerpt}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Badge
                      variant="secondary"
                      className="bg-orange-100 text-orange-800"
                    >
                      {article.views} views
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-orange-300 text-orange-700"
                    >
                      {article.helpful} helpful
                    </Badge>
                  </div>
                </div>
                <div
                  className="prose prose-orange max-w-none text-orange-800"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </HelpArticleLayout>
  );
}
