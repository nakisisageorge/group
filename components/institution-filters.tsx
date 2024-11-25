"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

export function InstitutionFilters() {
  return (
    <Card>
      <CardContent className="p-6 space-y-8">
        <div className="space-y-4">
          <h3 className="font-semibold">Location</h3>
          <Input placeholder="Enter city or country" />
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Type</h3>
          <div className="space-y-2">
            {["University", "College", "Technical Institute", "Language School"].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={type} />
                <Label htmlFor={type}>{type}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Rating</h3>
          <div className="pt-2">
            <Slider
              defaultValue={[4]}
              max={5}
              step={0.1}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>0</span>
              <span>5</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Courses</h3>
          <div className="space-y-2">
            {["Business", "Engineering", "Arts", "Medicine", "Technology"].map((course) => (
              <div key={course} className="flex items-center space-x-2">
                <Checkbox id={course} />
                <Label htmlFor={course}>{course}</Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}