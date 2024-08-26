import {allBlogs} from "contentlayer/generated";
import HomeCoverSection from "src/components/Home/HomeCoverSection";
function page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <HomeCoverSection blogs={allBlogs} />
    </div>
  );
}

export default page;
