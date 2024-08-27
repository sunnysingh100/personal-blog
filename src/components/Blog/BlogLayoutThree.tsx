import {format} from "date-fns";
import Image from "next/image";
import Link from "next/link";
import {Blog} from "contentlayer/generated";

function BlogLayoutThree({blog}: {blog: Blog}) {
  return (
    <div className="flex flex-col items-center group text-dark dark:text-light">
      <Link href={blog.url} className="h-full overflow-hidden rounded-xl">
        <Image
          src={blog.image?.filePath.replace("../public", "") ?? ""}
          placeholder="blur"
          blurDataURL={blog.image?.blurhashDataUrl}
          alt={blog.title}
          width={blog.image?.width}
          height={blog.image?.height}
          className=" aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-col w-full mt-4">
        <span className="text-xs font-semibold uppercase text-accent dark:text-accentDark sm:text-sm">
          {blog.tags?.[0] ?? ""}
        </span>
        <Link href={blog.url} className="inline-block my-1">
          <h2 className="text-base font-semibold capitalize sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50  dark:from-accentDark/50
            dark:to-accentDark/50
            bg-[length:0px_6px]
            group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="text-sm font-semibold capitalize text-gray dark:text-light/50 sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
}
export default BlogLayoutThree;
