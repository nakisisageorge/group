import { Hero } from "@/components/hero";
import { FeaturedInstitutions } from "@/components/featured-institutions";
import { RecentPosts } from "@/components/recent-posts";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <FeaturedInstitutions />
      <RecentPosts />
    </div>
  );
}