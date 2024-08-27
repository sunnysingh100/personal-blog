import {Blog} from "contentlayer/generated";
import Link from "next/link";
import {sortBlogs} from "src/utils";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
function RecentPost({blogs}: {blogs: Blog[]}) {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="flex flex-col items-center justify-center w-full px-5 mt-16 sm:mt-24 md:mt-32 sm:px-10 md:px-24 sxl:px-32">
      <div className="flex justify-between w-full">
        <h2 className="inline-block text-2xl font-bold capitalize w-fit md:text-4xl text-dark dark:text-light">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block text-base font-medium underline text-accent dark:text-accentDark underline-offset-2 md:text-lg"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-1 grid-rows-2 gap-16 mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {sortedBlogs.slice(5, 11).map((blog, index) => {
          return (
            <article key={index} className="relative col-span-1 row-span-1">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default RecentPost;
