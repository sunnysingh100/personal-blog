import {Blog} from "contentlayer/generated";
import {format} from "date-fns";
import {slug} from "github-slugger";
import Link from "next/link";
import React from "react";

function BlogDetails({blog}: {blog: Blog}) {
  return (
    <div className="flex flex-wrap items-center justify-around px-2 py-2 mx-5 text-lg font-medium rounded-lg md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark sm:text-xl md:mx-10">
      <time className="m-3">
        {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
      </time>
      <span className="m-3">10 views</span>
      <div className="m-3">{blog.readingTime.text}</div>
      <Link
        href={`/categories/${slug(blog.tags?.[0] ?? "")}`}
        className="m-3 leading-loose capitalize"
      >
        #{blog.tags?.[0]}
      </Link>
    </div>
  );
}

export default BlogDetails;
