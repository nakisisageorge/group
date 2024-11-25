import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const RECENT_POSTS = [
  {
    id: 1,
    title: "The Future of Online Education",
    excerpt: "Exploring how technology is reshaping the educational landscape...",
    date: "2024-03-15",
    author: "Dr. Sarah Johnson",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Choosing the Right University",
    excerpt: "A comprehensive guide to making informed decisions about higher education...",
    date: "2024-03-14",
    author: "Prof. Michael Chen",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Study Abroad: What You Need to Know",
    excerpt: "Essential tips and insights for international students...",
    date: "2024-03-13",
    author: "Emma Williams",
    readTime: "6 min read"
  }
];

export function RecentPosts() {
  return (
    <section className="container">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight">Recent Blog Posts</h2>
          <p className="text-muted-foreground">
            Stay updated with the latest insights and trends in education
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RECENT_POSTS.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{post.author}</span>
                  <span className="text-muted-foreground">{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}