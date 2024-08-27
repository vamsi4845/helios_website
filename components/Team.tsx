import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useState } from "react";

export default function Team() {
  const teamMembers = [
    {
      name: "ANURAG KHANNA",
      role: "Founder\nFull Stack Developer",
      image: "/anurag.jpg",
      bio: "Anurag is a seasoned full stack developer with a passion for building scalable web applications.",
      socialMedia: { facebook: "#", instagram: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "PRASHANT SINGH",
      role: "Co-Founder\nAi/ML Developer",
      image: "/prashanth.jpg",
      bio: "Prashant is a co-founder and AI/ML developer, specializing in machine learning algorithms.",
      socialMedia: { facebook: "#", instagram: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "MADHAV THAKUR",
      role: "Founding Member\nFull Stack Developer",
      image: "/madhav.png",
      bio: "Madhav is a founding member and full stack developer with expertise in both frontend and backend technologies.",
      socialMedia: { facebook: "#", instagram: "#", twitter: "#", linkedin: "#" },
    },
    {
      name: "DIVYANSH GUPTA",
      role: " Team Member\nFull Stack Developer",
      image: "/divyansh.jpg",
      bio: "Divyansh is a full stack developer who excels in creating dynamic and responsive web applications.",
      socialMedia: { facebook: "#", instagram: "#", twitter: "#", linkedin: "#" },
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                {member.role && (
                  <p className="text-sm text-gray-600 mb-4 whitespace-pre-line">{member.role}</p>
                )}
                <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.socialMedia.facebook} className="text-primary hover:text-primary-hover">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href={member.socialMedia.instagram} className="text-primary hover:text-primary-hover">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={member.socialMedia.twitter} className="text-primary hover:text-primary-hover">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.socialMedia.linkedin} className="text-primary hover:text--primary-hover">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}