import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="min-h-[calc(100vh-theme(spacing.16)-theme(spacing.20))]">{children}</main>
      <Footer />
    </div>
  )
}
