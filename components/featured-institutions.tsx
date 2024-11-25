import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const FEATURED_INSTITUTIONS = [
  {
    id: 1,
    name: "Cambridge Academy",
    type: "University",
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    location: "Cambridge, UK",
    tags: ["Top Rated", "Engineering", "Research"]
  },
  {
    id: 2,
    name: "Digital Arts Institute",
    type: "Creative School",
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    location: "New York, USA",
    tags: ["Arts", "Design", "Technology"]
  },
  {
    id: 3,
    name: "Global Business School",
    type: "Business School",
    rating: 4.7,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    location: "Singapore",
    tags: ["Business", "MBA", "Finance"]
  }
];

export function FeaturedInstitutions() {
  return (
    <section className="container">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight">Featured Institutions</h2>
          <p className="text-muted-foreground">
            Discover top-rated educational institutions from around the world
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_INSTITUTIONS.map((institution) => (
            <Card key={institution.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={institution.image}
                  alt={institution.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{institution.name}</CardTitle>
                <CardDescription>{institution.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{institution.rating}</span>
                  <span className="text-muted-foreground">
                    ({institution.reviews} reviews)
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {institution.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}