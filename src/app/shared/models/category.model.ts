import { SubCategory } from "./subcategory.model";

export interface Category {
    id: number;
    name: string;
    subCategories: SubCategory[];
    imageUrl: string;
  }