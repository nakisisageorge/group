"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, GraduationCap } from "lucide-react";

// Mock data - Replace with API call in production
const TUTORS = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    expertise: ["Mathematics", "Physics", "Computer Science"],
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    location: "London, UK",
    experience: "10+ years",
    hourlyRate: 50
  },
  {
    id: "2",
    name: "Prof. Michael Chen",
    expertise: ["Chemistry", "Biology", "Science"],
    rating: 4.8,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    location: "Singapore",
    experience: "15+ years",
    hourlyRate: 65
  },
  {
    id: "3",
    name: "Emma Williams",
    expertise: ["English Literature", "Creative Writing", "ESL"],
    rating: 4.7,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    location: "New York, USA",
    experience: "8+ years",
    hourlyRate: 45
  }
];

export function TutorList() {
  return (
    <div className="space-y-6">
      {TUTORS.map((tutor) => (
        <Link href={`/tutors/${tutor.id}`} key={tutor.id}>
          <Card className="hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-4 gap-6 p-6">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-32 h-32">
                  <Image
                    src={tutor.image}
                    alt={tutor.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{tutor.rating}</span>
                  <span className="text-muted-foreground">({tutor.reviews} reviews)</span>
                </div>
              </div>
              <div className="md:col-span-3">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl">{tutor.name}</CardTitle>
                  <div className="flex items-center gap-4 text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{tutor.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4" />
                      <span>{tutor.experience} experience</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutor.expertise.map((subject) => (
                      <Badge key={subject} variant="secondary">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-lg font-semibold">
                    ${tutor.hourlyRate}/hour
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}