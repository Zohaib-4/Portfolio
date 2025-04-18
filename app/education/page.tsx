"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, GraduationCap } from "lucide-react"
import { useRouter } from "next/navigation"

export default function EducationPage() {
  const router = useRouter()

  const education = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2015 - 2017",
      description: [
        "Specialized in Artificial Intelligence and Machine Learning",
        "Thesis: 'Deep Learning Approaches for Natural Language Processing'",
        "GPA: 3.9/4.0",
        "Teaching Assistant for Introduction to Machine Learning course",
      ],
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "Boston, MA",
      period: "2011 - 2015",
      description: [
        "Minor in Mathematics",
        "Dean's List for all semesters",
        "Senior Project: Developed a real-time collaborative code editor",
        "Member of the Computer Science Student Association",
      ],
    },
    {
      id: 3,
      degree: "Web Development Bootcamp",
      institution: "Coding Academy",
      location: "Online",
      period: "Summer 2014",
      description: [
        "Intensive 12-week program focused on full-stack web development",
        "Built multiple web applications using JavaScript, Node.js, and MongoDB",
        "Collaborated with peers on group projects using Git and Agile methodologies",
        "Received Outstanding Student Award",
      ],
    },
    {
      id: 4,
      degree: "High School Diploma",
      institution: "Science and Technology High School",
      location: "Chicago, IL",
      period: "2007 - 2011",
      description: [
        "Advanced Placement courses in Computer Science, Calculus, and Physics",
        "President of the Robotics Club",
        "First place in Regional Science Fair for Computer Science project",
        "National Honor Society member",
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
          <h1 className="text-3xl font-bold">Education</h1>
          <p className="text-muted-foreground">My academic background and continuous learning</p>
        </div>
      </div>

      <div className="relative border-l border-border pl-6 ml-6 space-y-10">
        {education.map((item) => (
          <div key={item.id} className="relative">
            <div className="absolute -left-10 mt-1.5 h-7 w-7 rounded-full bg-primary/10 border border-border flex items-center justify-center">
              <GraduationCap className="h-3.5 w-3.5 text-primary" />
            </div>
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle>{item.degree}</CardTitle>
                    <CardDescription className="text-base mt-1">
                      {item.institution} • {item.location}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-muted-foreground">
                      {desc}
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
