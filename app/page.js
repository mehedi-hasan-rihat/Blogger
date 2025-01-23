import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs = await response.json();
  // console.log(blogs);
  return (
    <div className="min-h-screen w-full md:max-w-3xl lg:max-w-[1400px] xl:max-w-[1600px] mx-auto mt-5">
      <section>
        <h4 className="text-3xl text-center my-4 lg:mb-12 border-b border-white w-max mx-auto pb-1">All blogs here</h4>
      </section>
      <div>
        <ol className="space-y-1">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link className="hover:text-blue-500" href={`/blog/${blog.id}`}>
              <span>{blog.id}. </span> {blog.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
