import { IProduct } from "./product.model";

export interface IPagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: IProduct[];

}