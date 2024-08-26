import {allBlogs} from "contentlayer/generated";
import FeaturedPost from "src/components/Home/FeaturedPost";
import HomeCoverSection from "src/components/Home/HomeCoverSection";
function page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPost blogs={allBlogs} />
    </div>
  );
}

export default page;
