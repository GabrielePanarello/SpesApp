import { Product } from "./product";

export class List{
    id: number;
    name: string;
    img: string;
    product: Product[];
    userId: number;

    constructor(id: number, name: string, img: string, product: Product[],userId: number){
        this.id = id;
        this.name = name;
        this.img = img;
        this.product = product;
        this.userId = userId;
    }
}