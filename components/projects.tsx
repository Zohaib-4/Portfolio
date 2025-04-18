"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Laptop, Smartphone, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather data and forecasts for locations worldwide.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React", "OpenWeather API", "Chart.js", "Styled Components"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ])

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image: "/placeholder.svg?height=200&width=400",
    tags: "",
    demoUrl: "",
    githubUrl: "",
  })

  const [open, setOpen] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewProject((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const projectToAdd = {
      id: projects.length > 0 ? Math.max(...projects.map((p) => p.id)) + 1 : 1,
      ...newProject,
      tags: newProject.tags.split(",").map((tag) => tag.trim()),
    }

    setProjects([...projects, projectToAdd])

    // Reset form
    setNewProject({
      title: "",
      description: "",
      image: "/placeholder.svg?height=200&width=400",
      tags: "",
      demoUrl: "",
      githubUrl: "",
    })

    setOpen(false)
  }

  const categories = [
    {
      id: "web-dev",
      name: "Web Development",
      icon: <Globe className="h-6 w-6 mr-2" />,
      description: "Responsive websites and web applications built with modern frameworks",
    },
    {
      id: "app-dev",
      name: "App Development",
      icon: <Smartphone className="h-6 w-6 mr-2" />,
      description: "Mobile applications for iOS and Android platforms",
    },
    {
      id: "desktop-dev",
      name: "Desktop Development",
      icon: <Laptop className="h-6 w-6 mr-2" />,
      description: "Desktop applications and software solutions",
    },
  ]

  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Check out some of my recent work and personal projects
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-card border rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
          >
            <div className="bg-primary/10 p-4 rounded-full mb-4">{category.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            <p className="text-muted-foreground mb-6">{category.description}</p>
            <Button asChild className="mt-auto">
              <Link href={`/projects/${category.id}`}>
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
