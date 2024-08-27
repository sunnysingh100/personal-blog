import {allBlogs} from "contentlayer/generated";
import FeaturedPost from "src/components/Home/FeaturedPost";
import HomeCoverSection from "src/components/Home/HomeCoverSection";
import RecentPost from "src/components/Home/RecentPost";
function page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPost blogs={allBlogs} />
      <RecentPost blogs={allBlogs} />
    </div>
  );
}

export default page;
