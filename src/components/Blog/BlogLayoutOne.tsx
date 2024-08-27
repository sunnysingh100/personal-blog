import Image from "next/image";
import Link from "next/link";
import Tag from "../Elements/Tag";
import {Blog} from "contentlayer/generated";
import {slug} from "github-slugger";

function BlogLayoutOne({blog}: {blog: Blog}) {
  return (
    <div className="inline-block overflow-hidden group rounded-xl">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full
          bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10
          "
      />
      <Image
        src={blog.image?.filePath.replace("../public", "") ?? ""}
        placeholder="blur"
        blurDataURL={blog.image?.blurhashDataUrl}
        alt={blog.title}
        width={blog.image?.width}
        height={blog.image?.height}
        className="object-cover object-center w-full h-full transition-all duration-300 rounded-xl group-hover:scale-105 ease"
        sizes="(max-width: 1180px) 100vw, 50vw"
      />

      <div className="absolute bottom-0 z-20 w-full p-4 xs:p-6 sm:p-10">
        <Tag
          link={`/categories/${slug(blog.tags?.[0] ?? "")}`}
          name={blog.tags?.[0] ?? ""}
          className="px-6 text-xs  sm:text-sm py-1 sm:py-2 !border "
        />
        <Link href={blog.url} className="mt-6">
          <h2 className="mt-2 text-sm font-bold capitalize xs:text-base sm:text-xl md:text-2xl text-light sm:mt-4">
            <span
              className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] dark:from-accentDark/50 dark:to-accentDark/50
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default BlogLayoutOne;
