import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I'm <span className="text-primary">John Doe</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">Full Stack Developer</h2>
        <p className="text-lg text-muted-foreground max-w-xl">
          I build exceptional and accessible digital experiences for the web. Focused on creating intuitive and
          responsive applications.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#" download>
              Download CV <Download className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 flex items-center justify-center">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Profile"
            className="rounded-full w-60 h-60 md:w-72 md:h-72 object-cover"
          />
        </div>
      </div>
    </div>
  )
}
