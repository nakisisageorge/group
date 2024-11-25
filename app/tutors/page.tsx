import { TutorList } from "@/components/tutor-list";
import { TutorFilters } from "@/components/tutor-filters";

export default function TutorsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Find Tutors</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <TutorFilters />
        </aside>
        <main className="lg:col-span-3">
          <TutorList />
        </main>
      </div>
    </div>
  );
}