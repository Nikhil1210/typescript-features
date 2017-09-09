import {Category} from "../enum/Category";

export interface IBook {
    id : number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    GetId?: (name: string, id: number) => string;
}