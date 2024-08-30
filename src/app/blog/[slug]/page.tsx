import {allBlogs} from "contentlayer/generated";
import {slug} from "github-slugger";
import Image from "next/image";
import {notFound} from "next/navigation";
import BlogDetails from "src/components/Blog/BlogDetails";
import RenderMdx from "src/components/Blog/RenderMdx";
import Tag from "src/components/Elements/Tag";
import siteMetadata from "src/utils/siteMetaData";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog._raw.flattenedPath,
  }));
}

export async function generateMetadata({params}: {params: Params}) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return;
  }
  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();
  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList = [blog.image.filePath.replace("../public", "")];
  }
  const ogImages = Array.isArray(imageList)
    ? imageList.map((image) => ({
        url: image.includes("http") ? image : siteMetadata.siteUrl + image,
      }))
    : [];
  const authors = blog?.author ? [blog.author] : [siteMetadata.author];
  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: "en-US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}

export default function BlogPage({params}: {params: Params}) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    notFound();
  }

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList = [
      siteMetadata.siteUrl + blog.image.filePath.replace("../public", ""),
    ];
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog.title,
    description: blog.description,
    image: imageList,
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: [
      {
        "@type": "Person",
        name: blog?.author ? [blog.author] : siteMetadata.author,
        url: siteMetadata.twitter,
      },
    ],
  };

  return (
    <>
      <article>
        {/* header */}
        <div className="relative mb-8 text-center w-full h-[70vh] bg-dark">
          <div className="absolute z-10 flex flex-col items-center w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <Tag
              link={`/categories/${slug(blog.tags?.[0] ?? "")}`}
              name={blog.tags?.[0] ?? ""}
              className="px-6 py-2 text-sm"
            />
            <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
              {blog.title}
            </h1>
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 h-full bg-dark/60 dark:bg-dark/40" />
          <Image
            src={blog.image?.filePath.replace("../public", "") ?? ""}
            placeholder="blur"
            blurDataURL={blog.image?.blurhashDataUrl}
            alt={blog.title}
            width={blog.image?.width}
            height={blog.image?.height}
            className="object-cover object-center w-full h-full aspect-square"
            priority
            sizes="100vw"
          />
        </div>
        {/* blog details */}
        <BlogDetails blog={blog} />

        {/*actual content */}
        <div className="grid grid-cols-12 px-5 mt-8 gap-y-8 lg:gap-8 sxl:gap-16 md:px-10">
          {/* TOC */}
          <div className="col-span-12 lg:col-span-4">
            <details
              className="border-[1px] border-solid text-dark border-dark rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto dark:text-light dark:border-light"
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                Table Of Content
              </summary>
              <ul className="mt-4 text-large font-inter">
                {blog.toc.map(
                  (heading: {slug: string; text: string; level: string}) => {
                    return (
                      <li key={heading.slug} className="px-1 py-1 text-lg">
                        <a
                          href={`#${heading.slug}`}
                          data-level={heading.level}
                          className="data-[level=two]:pl-0 data-[level=two]]:pt-2 data-[level=two]:border-t border-solid border-dark/40
                        data-[level=three]:pl-6 flex items-center justify-start dark:border-light/40
                      "
                        >
                          {heading.level === "three" && (
                            <span className="inline-block w-1 h-1 mr-2 rounded-full bg-dark dark:bg-light"></span>
                          )}
                          <span className="hover:underline">
                            {heading.text}
                          </span>
                        </a>
                      </li>
                    );
                  }
                )}
              </ul>
            </details>
          </div>

          {/* blog content */}
          <div className="col-span-12 lg:col-span-8">
            <RenderMdx blog={blog} />
          </div>
        </div>
      </article>
    </>
  );
}
