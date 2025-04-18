"use client";
import { useSelectedLayoutSegments } from "next/navigation";

export type Post = {
  id: string;
  date: string;
  title: string;
  slug: string;
};
export function Header({ posts }: { posts: Post[] }) {
  const segments = useSelectedLayoutSegments();
  // segments can be:
  // date/post
  // lang/date/post
  const post = posts.find(
    (post) => post.slug === segments[segments.length - 1]
  );
  if (!post) {
    return <></>;
  }
  return (
    <div className="mt-3 mb-4 w-full px-2">
      <h3 className="text-2xl font-bold mb-1 dark:text-gray-100">
        {post.title}
      </h3>

      <p className="font-mono flex text-xs text-gray-500 dark:text-gray-500 m-0">
        <span className="flex-grow">
          <span className="md:inline">
            <span>
              <a
                href="https://x.com/mahe_tw"
                className="hover:text-gray-800 dark:hover:text-gray-400"
                target="_blank"
              >
                @maheshyadav
              </a>
              <span className="mx-2">|</span>
            </span>
            <span>Apr 19 2025</span>
          </span>
        </span>
      </p>
    </div>
  );
}
