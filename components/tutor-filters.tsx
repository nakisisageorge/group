"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

export function TutorFilters() {
  return (
    <Card>
      <CardContent className="p-6 space-y-8">
        <div className="space-y-4">
          <h3 className="font-semibold">Location</h3>
          <Input placeholder="Enter city or country" />
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Subjects</h3>
          <div className="space-y-2">
            {["Mathematics", "Physics", "Chemistry", "English", "Computer Science"].map((subject) => (
              <div key={subject} className="flex items-center space-x-2">
                <Checkbox id={subject} />
                <Label htmlFor={subject}>{subject}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Price Range ($/hour)</h3>
          <div className="pt-2">
            <Slider
              defaultValue={[50]}
              max={200}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>$0</span>
              <span>$200</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Experience</h3>
          <div className="space-y-2">
            {["1-3 years", "3-5 years", "5-10 years", "10+ years"].map((exp) => (
              <div key={exp} className="flex items-center space-x-2">
                <Checkbox id={exp} />
                <Label htmlFor={exp}>{exp}</Label>
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
      </CardContent>
    </Card>
  );
}