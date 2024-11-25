"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Users } from "lucide-react";

// Mock data - Replace with API call in production
const COURSES = [
  {
    id: "1",
    title: "Computer Science Fundamentals",
    duration: "4 months",
    startDate: "2024-04-01",
    price: 1200,
    seats: 30,
    tags: ["Programming", "Computer Science", "Beginner"]
  },
  {
    id: "2",
    title: "Advanced Data Structures",
    duration: "3 months",
    startDate: "2024-04-15",
    price: 1500,
    seats: 25,
    tags: ["Programming", "Algorithms", "Advanced"]
  },
  {
    id: "3",
    title: "Web Development Bootcamp",
    duration: "6 months",
    startDate: "2024-05-01",
    price: 2000,
    seats: 20,
    tags: ["Web Development", "JavaScript", "Full Stack"]
  }
];

interface CourseListProps {
  institutionId: string;
}

export function CourseList({ institutionId }: CourseListProps) {
  return (
    <div className="space-y-6">
      {COURSES.map((course) => (
        <Card key={course.id}>
          <CardHeader>
            <CardTitle>{course.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Starts {new Date(course.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{course.seats} seats available</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">${course.price}</p>
                <Button>Enroll Now</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}