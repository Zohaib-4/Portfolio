import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "January 2023",
      description: "Validates expertise in designing distributed systems on AWS.",
      credentialUrl: "#",
    },
    {
      id: 2,
      title: "Meta Frontend Developer Professional Certificate",
      issuer: "Meta (Facebook)",
      date: "June 2022",
      description: "Comprehensive program covering React, JavaScript, and web development best practices.",
      credentialUrl: "#",
    },
    {
      id: 3,
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      date: "November 2021",
      description: "In-depth training on user experience design principles and methodologies.",
      credentialUrl: "#",
    },
    {
      id: 4,
      title: "MongoDB Developer Certification",
      issuer: "MongoDB University",
      date: "March 2021",
      description: "Demonstrates proficiency in building applications with MongoDB.",
      credentialUrl: "#",
    },
  ]

  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Certifications</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional certifications and courses I've completed
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <Card key={cert.id}>
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <CardTitle>{cert.title}</CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar className="mr-2 h-4 w-4" />
                {cert.date}
              </div>
              <p className="text-muted-foreground">{cert.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="ml-auto" asChild>
                <Link href={cert.credentialUrl}>
                  <ExternalLink className="mr-2 h-4 w-4" /> View Credential
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
