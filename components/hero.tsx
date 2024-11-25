import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function Hero() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Find Your Perfect Educational Path
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Connect with top educational institutions and expert tutors. 
            Discover opportunities that align with your learning goals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search institutions, courses, or tutors..."
                className="pl-10"
              />
            </div>
            <Button size="lg">
              Search
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-x-8 text-sm font-semibold">
            <Button variant="link">Browse Institutions</Button>
            <Button variant="link">Find Tutors</Button>
            <Button variant="link">View Courses</Button>
          </div>
        </div>
      </div>
    </div>
  );
}