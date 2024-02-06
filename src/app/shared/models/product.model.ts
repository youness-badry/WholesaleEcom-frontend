import { ProductCharacteristic } from "./product-characteristic.model";
import { SubSubCategory } from "./subsubcategory.model";

export interface Product {
    id: number;
    name: string;
    reference: string;
    description: string;
    price: number;
    stockStatus: string;
    pictureUrl: string;
    brandName: string;
    subSubCategory: SubSubCategory;
    productCharacteristics: ProductCharacteristic[];

}