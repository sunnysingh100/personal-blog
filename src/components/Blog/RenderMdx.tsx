"use client";
import Image from "next/image";
import type {MDXComponents} from "mdx/types";
import {useMDXComponent} from "next-contentlayer/hooks";
import {Blog} from "contentlayer/generated";
const mdxComponents: MDXComponents = {
  Image,
};
function RenderMdx({blog}: {blog: Blog}) {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div className="col-span-12 prose prose-lg xl:prose-xl lg:col-span-8 font-inter max-w-max prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-accent dark:prose-invert dark:prose-blockquote:border-accentDark dark:prose-blockquote:bg-accentDark/20 dark:prose-li:marker:text-accentDark first-letter:text-3xl sm:first-letter:text-5xl ">
      <MDXContent components={mdxComponents} />
    </div>
  );
}

export default RenderMdx;
