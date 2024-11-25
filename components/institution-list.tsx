"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

// Mock data - Replace with API call in production
const INSTITUTIONS = [
  {
    id: "1",
    name: "Cambridge Academy",
    type: "University",
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    location: "Cambridge, UK",
    tags: ["Top Rated", "Engineering", "Research"]
  },
  {
    id: "2",
    name: "Digital Arts Institute",
    type: "Creative School",
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    location: "New York, USA",
    tags: ["Arts", "Design", "Technology"]
  },
  {
    id: "3",
    name: "Global Business School",
    type: "Business School",
    rating: 4.7,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    location: "Singapore",
    tags: ["Business", "MBA", "Finance"]
  }
];

export function InstitutionList() {
  return (
    <div className="space-y-6">
      {INSTITUTIONS.map((institution) => (
        <Link href={`/institutions/${institution.id}`} key={institution.id}>
          <Card className="hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-48 md:h-full">
                <Image
                  src={institution.image}
                  alt={institution.name}
                  fill
                  className="object-cover rounded-l-lg"
                />
              </div>
              <div className="md:col-span-2 p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl">{institution.name}</CardTitle>
                  <div className="flex items-center gap-4 text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{institution.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{institution.rating} ({institution.reviews} reviews)</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-2 mt-4">
                    {institution.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}