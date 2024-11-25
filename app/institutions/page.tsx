import { InstitutionList } from "@/components/institution-list";
import { InstitutionFilters } from "@/components/institution-filters";

export default function InstitutionsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Educational Institutions</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <InstitutionFilters />
        </aside>
        <main className="lg:col-span-3">
          <InstitutionList />
        </main>
      </div>
    </div>
  );
}