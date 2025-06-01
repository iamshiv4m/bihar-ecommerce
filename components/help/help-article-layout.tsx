"use client";

import type React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/components/ui/breadcrumb";
import { ArrowLeft, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface HelpArticleLayoutProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  breadcrumbs: BreadcrumbItem[];
  children: React.ReactNode;
}

export function HelpArticleLayout({
  title,
  description,
  icon: Icon,
  breadcrumbs,
  children,
}: HelpArticleLayoutProps) {
  return (
    <div className="page-transition min-h-screen">
      {/* Header */}
      <section className="hero-gradient py-12 lg:py-16">
        <div className="container">
          <div className="space-y-6">
            <BreadcrumbNav items={breadcrumbs} />

            <div className="flex items-center gap-2 mb-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/help">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Help Center
                </Link>
              </Button>
            </div>

            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3">
                <Icon className="h-12 w-12 text-orange-600" />
                <h1 className="text-3xl lg:text-4xl font-bold text-orange-900">
                  {title}
                </h1>
              </div>
              <p className="text-orange-700 max-w-2xl mx-auto">{description}</p>
            </motion.div>

            {/* Search */}
            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-orange-600" />
                <Input
                  placeholder="Search in this category..."
                  className="pl-10 bg-white/90 backdrop-blur-sm border-orange-200"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 section-gradient">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {children}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
