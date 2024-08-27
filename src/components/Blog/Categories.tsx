import {slug} from "github-slugger";
import Category from "./Category";

interface CategoriesProps {
  categories: string[];
  currentSlug: string;
}

function Categories({categories, currentSlug}: CategoriesProps) {
  return (
    <div className="flex flex-wrap items-start px-0 py-4 mx-5 mt-10 font-medium border-t-2 border-b-2 border-solid  md:px-10 sxl:px-20 text-dark dark:text-light border-dark dark:border-light md:mx-10">
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
}

export default Categories;
