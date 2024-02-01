import { SubSubCategory } from "./subsubcategory.model";

export interface SubCategory {
    id: number;
    name: string;
    subSubCategories: SubSubCategory[];
  }