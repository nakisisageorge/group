"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Globe, Star, Calendar, Users, BookOpen } from "lucide-react";
import { ReviewList } from "@/components/review-list";
import { CourseList } from "@/components/course-list";

export default function InstitutionDetailsPage() {
  const { id } = useParams();

  // Mock data - In production, fetch from API
  const institution = {
    id: id,
    name: "Cambridge Academy",
    type: "University",
    description: "A prestigious institution known for excellence in education and research...",
    location: "Cambridge, UK",
    phone: "+44 123 456 7890",
    email: "info@cambridge-academy.edu",
    website: "https://cambridge-academy.edu",
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",
    features: ["Research Excellence", "Modern Facilities", "Expert Faculty"],
    stats: {
      students: "15,000+",
      courses: "200+",
      established: "1989"
    }
  };

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
            <Image
              src={institution.image}
              alt={institution.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{institution.name}</h1>
              <div className="flex items-center gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{institution.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{institution.rating} ({institution.reviews} reviews)</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {institution.features.map((feature) => (
                  <Badge key={feature} variant="secondary">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">About</h2>
                  <p className="text-muted-foreground">{institution.description}</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <Users className="h-8 w-8 mb-2" />
                      <p className="text-lg font-semibold">{institution.stats.students}</p>
                      <p className="text-sm text-muted-foreground">Students</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <BookOpen className="h-8 w-8 mb-2" />
                      <p className="text-lg font-semibold">{institution.stats.courses}</p>
                      <p className="text-sm text-muted-foreground">Courses</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <Calendar className="h-8 w-8 mb-2" />
                      <p className="text-lg font-semibold">{institution.stats.established}</p>
                      <p className="text-sm text-muted-foreground">Established</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="courses">
                <CourseList institutionId={institution.id} />
              </TabsContent>
              <TabsContent value="reviews">
                <ReviewList institutionId={institution.id} />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold">Contact Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{institution.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{institution.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>{institution.website}</span>
                  </div>
                </div>
              </div>
              <Button className="w-full">Contact Institution</Button>
              <Button variant="outline" className="w-full">Download Brochure</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}