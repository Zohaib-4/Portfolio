import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Palette, Server } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <Layout className="h-6 w-6 text-primary" />,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Vue.js",
        "Tailwind CSS",
        "Styled Components",
      ],
    },
    {
      id: 2,
      title: "Backend Development",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: ["Node.js", "Express", "Python", "Django", "Ruby on Rails", "GraphQL", "REST API"],
    },
    {
      id: 3,
      title: "Database",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Supabase"],
    },
    {
      id: 4,
      title: "UI/UX Design",
      icon: <Palette className="h-6 w-6 text-primary" />,
      skills: ["Figma", "Adobe XD", "Sketch", "Wireframing", "Prototyping", "User Research"],
    },
    {
      id: 5,
      title: "DevOps & Tools",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel", "Netlify"],
    },
    {
      id: 6,
      title: "Other Skills",
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: ["SEO", "Responsive Design", "Performance Optimization", "Accessibility", "Testing", "Agile Methodology"],
    },
  ]

  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of the technologies and tools I work with
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.id}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
