import { Product } from "./product.model";

export interface Pagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: Product[];

}