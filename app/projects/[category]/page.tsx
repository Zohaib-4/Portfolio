"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Sample project data with categories
const initialProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    category: "web-dev",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
    category: "web-dev",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that provides real-time weather data and forecasts for locations worldwide.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "OpenWeather API", "Chart.js", "Styled Components"],
    demoUrl: "#",
    githubUrl: "#",
    category: "web-dev",
  },
  {
    id: 4,
    title: "Fitness Tracker App",
    description: "A mobile app for tracking workouts, nutrition, and health metrics with personalized recommendations.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React Native", "Firebase", "Redux", "Health Kit"],
    demoUrl: "#",
    githubUrl: "#",
    category: "app-dev",
  },
  {
    id: 5,
    title: "Social Media App",
    description: "A social networking app with real-time messaging, post sharing, and user profiles.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Flutter", "Firebase", "GetX", "Cloud Functions"],
    demoUrl: "#",
    githubUrl: "#",
    category: "app-dev",
  },
  {
    id: 6,
    title: "Code Editor",
    description: "A lightweight code editor with syntax highlighting, file management, and extension support.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Electron", "React", "Monaco Editor", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
    category: "desktop-dev",
  },
]

// Category metadata
const categoryInfo = {
  "web-dev": {
    name: "Web Development",
    description: "Responsive websites and web applications built with modern frameworks",
  },
  "app-dev": {
    name: "App Development",
    description: "Mobile applications for iOS and Android platforms",
  },
  "desktop-dev": {
    name: "Desktop Development",
    description: "Desktop applications and software solutions",
  },
}

export default function CategoryProjects() {
  const params = useParams()
  const router = useRouter()
  const category = params.category as string

  const [filteredProjects, setFilteredProjects] = useState([])

  useEffect(() => {
    if (!category || !categoryInfo[category]) {
      router.push("/")
      return
    }

    setFilteredProjects(initialProjects.filter((project) => project.category === category))
  }, [category, router])

  if (!category || !categoryInfo[category]) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex items-center mb-8">
        <Button variant="outline" size="sm" onClick={() => router.back()} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold">{categoryInfo[category].name} Projects</h1>
          <p className="text-muted-foreground">{categoryInfo[category].description}</p>
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No projects in this category yet</h3>
          <p className="text-muted-foreground mb-6">Check back later for updates.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="flex gap-2 mt-auto">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubUrl}>
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.demoUrl}>
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
