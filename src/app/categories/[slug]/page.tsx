import {allBlogs} from "contentlayer/generated";
import BlogLayoutThree from "src/components/Blog/BlogLayoutThree";
import Categories from "src/components/Blog/Categories";
import GithubSlugger, {slug} from "github-slugger";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const slugger = new GithubSlugger();
  const categories: string[] = [];
  const paths = [{slug: "all"}];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags?.map((tag) => {
        let slugifiedTag = slugger.slug(tag);
        if (!categories.includes(slugifiedTag)) {
          categories.push(slugifiedTag);
          paths.push({slug: slugifiedTag});
        }
      });
    }
  });
  return paths;
}

export async function generateMetadata({params}: {params: Params}) {
  return {
    title: `${params.slug.replace("-", " ")} Blogs`,
    description: `Learn more about ${params.slug} through our blogs!`,
  };
}

export default function CategoryPage({params}: {params: Params}) {
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags?.some((tag) => {
      const slugifiedTag = slug(tag);
      if (!allCategories.includes(slugifiedTag)) {
        allCategories.push(slugifiedTag);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugifiedTag === params.slug;
    });
  });

  return (
    <article className="flex flex-col mt-12 mb-24 text-dark dark:text-light">
      <div className="flex flex-col px-5 sm:px-10 md:px-24 sxl:px-32">
        <h1 className="mt-6 text-2xl font-semibold md:text-4xl lg:text-5xl">
          #{params.slug}
        </h1>
        <span className="inline-block mt-2">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="grid grid-cols-1 gap-16 px-5 mt-5 sm:grid-cols-2 lg:grid-cols-3 sm:mt-10 md:mt-24 sxl:mt-32 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="relative col-span-1 row-span-1">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
}
