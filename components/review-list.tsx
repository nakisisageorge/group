"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// Mock data - Replace with API call in production
const REVIEWS = [
  {
    id: "1",
    user: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
    rating: 5,
    date: "2024-03-10",
    comment: "Excellent institution with world-class facilities and faculty. The learning environment is exceptional."
  },
  {
    id: "2",
    user: {
      name: "Alice Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    rating: 4,
    date: "2024-03-08",
    comment: "Great experience overall. The courses are well-structured and the support staff is very helpful."
  },
  {
    id: "3",
    user: {
      name: "David Wilson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    },
    rating: 5,
    date: "2024-03-05",
    comment: "The quality of education is outstanding. I particularly enjoyed the practical aspects of the courses."
  }
];

interface ReviewListProps {
  institutionId?: string;
  tutorId?: string;
}

export function ReviewList({ institutionId, tutorId }: ReviewListProps) {
  return (
    <div className="space-y-6">
      {REVIEWS.map((review) => (
        <Card key={review.id}>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={review.user.avatar} alt={review.user.name} />
                <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold">{review.user.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}