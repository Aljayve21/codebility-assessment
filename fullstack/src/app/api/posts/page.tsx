import Link from "next/link";
import { posts } from "../../../../data/posts";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
};

interface PostPageProps {
  params: {
    id: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const { id } = params;
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return <p className="p-6 text-center">Post not found</p>;
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{post.date}</p>
      <p className="mb-6">{post.content}</p>
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </main>
  );
}
