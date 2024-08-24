import Image from "next/image"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react";

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    category: "AI/ML",
    image: "/ai.svg",
    description: "An intelligent dashboard providing real-time insights for a Fortune 500 company.",
  },
  {
    title: "E-commerce Platform Redesign",
    category: "Web Dev",
    image: "/about.svg",
    description: "A complete overhaul of a major e-commerce site, improving UX and conversion rates.",
  },
  {
    title: "Decentralized Finance App",
    category: "Blockchain",
    image: "/crypto.svg",
    description: "A secure and user-friendly DeFi application built on Ethereum.",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-16 bg-white" aria-labelledby="portfolio-heading">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 id="portfolio-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            Portfolio
          </h2>
          <p className="mx-auto max-w-[700px] text-base sm:text-lg text-muted-foreground mt-4">
            Explore our diverse range of projects showcasing our expertise and creativity.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold line-clamp-1">{project.title}</h3>
                  <Badge className="w-fit line-clamp-1">{project.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[200px] object-cover rounded-xl mb-4"
                  width={400}
                  height={200}
                />
                <p className="text-sm text-gray-500">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}