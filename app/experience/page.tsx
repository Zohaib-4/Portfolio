"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Briefcase } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ExperiencePage() {
  const router = useRouter()

  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      location: "New York, NY",
      period: "Jan 2022 - Present",
      description: [
        "Lead a team of 5 developers in building and maintaining multiple web applications",
        "Implemented modern frontend architecture using Next.js, resulting in 40% faster page loads",
        "Collaborated with design team to create and implement a company-wide design system",
        "Mentored junior developers and conducted code reviews to ensure code quality",
      ],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Solutions LLC",
      location: "Boston, MA",
      period: "Mar 2020 - Dec 2021",
      description: [
        "Developed responsive web applications using React and TypeScript",
        "Implemented state management solutions using Redux and Context API",
        "Collaborated with backend developers to integrate RESTful APIs",
        "Participated in agile development processes, including daily standups and sprint planning",
      ],
    },
    {
      id: 3,
      title: "Web Developer",
      company: "Creative Agency",
      location: "San Francisco, CA",
      period: "Jun 2018 - Feb 2020",
      description: [
        "Built and maintained client websites using HTML, CSS, JavaScript, and WordPress",
        "Collaborated with designers to implement pixel-perfect designs",
        "Optimized website performance and SEO",
        "Provided technical support and training to clients",
      ],
    },
    {
      id: 4,
      title: "Junior Developer",
      company: "Startup Ventures",
      location: "Remote",
      period: "Jan 2017 - May 2018",
      description: [
        "Assisted in developing web applications using JavaScript and PHP",
        "Implemented responsive designs using CSS and Bootstrap",
        "Participated in code reviews and bug fixes",
        "Collaborated with team members to meet project deadlines",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex items-center mb-8">
        <Button variant="outline" size="sm" onClick={() => router.back()} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Professional Experience</h1>
          <p className="text-muted-foreground">My career journey and professional growth</p>
        </div>
      </div>

      <div className="relative border-l border-border pl-6 ml-6 space-y-10">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative">
            <div className="absolute -left-10 mt-1.5 h-7 w-7 rounded-full bg-primary/10 border border-border flex items-center justify-center">
              <Briefcase className="h-3.5 w-3.5 text-primary" />
            </div>
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle>{experience.title}</CardTitle>
                    <CardDescription className="text-base mt-1">
                      {experience.company} • {experience.location}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{experience.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {experience.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
