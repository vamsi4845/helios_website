"use client";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Globe, Database, Bitcoin } from "lucide-react";
import { useState } from "react";

export const services = [
  {
    title: "AI/ML",
    description: "Intelligent systems that learn and adapt, providing predictive insights and automating complex tasks.",
    image: "/ai.svg",
    icon: Brain,
  },
  {
    title: "Web Development",
    description: "Responsive and user-friendly websites and applications that deliver seamless user experiences across all devices.",
    image: "/about.svg",
    icon: Globe,
  },
  {
    title: "Blockchain",
    description: "Secure and transparent blockchain solutions that enhance trust and efficiency in your operations.",
    image: "/crypto.svg",
    icon: Bitcoin,
  },
];

export default function Services() {
  const [open, setOpen] = useState(false);

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white" aria-labelledby="services-heading">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
            Our Services
          </h2>
          <p className="mx-auto max-w-[700px] text-base sm:text-lg text-muted-foreground mt-4">
            We offer a wide range of services to bring your vision to life.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-cyan-500 font-bold">{service.title}</CardTitle>
                  <service.icon className="h-8 w-8 text-cyan-500" />
                </div>
              </CardHeader>
              <CardContent>
                <Image
                  src={service.image}
                  width={400}
                  height={300}
                  alt={`${service.title} Service`}
                  className="w-full h-48 object-cover object-center rounded-xl mb-4"
                />
                <CardDescription className="text-lg font-medium leading-relaxed line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}