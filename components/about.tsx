import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Heart } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get to know more about me, my background, and what I do
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Who am I?</h3>
          <p className="text-muted-foreground">
            I'm a passionate Full Stack Developer based in New York with over 5 years of experience in building web
            applications. I specialize in JavaScript, React, Node.js, and modern web technologies.
          </p>
          <p className="text-muted-foreground">
            I enjoy solving complex problems and learning new technologies. When I'm not coding, you can find me hiking,
            reading, or experimenting with new recipes in the kitchen.
          </p>
        </div>

        <div className="space-y-6">
          <Link href="/experience">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Experience</h4>
                  <p className="text-muted-foreground">
                    5+ years of professional experience in web development, working with startups and established
                    companies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/education">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-muted-foreground">
                    Bachelor's degree in Computer Science from University of Technology. Continuous learner through
                    online courses and workshops.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Interests</h4>
                <p className="text-muted-foreground">
                  Open source contribution, UI/UX design, hiking, photography, and cooking.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
