import { Product } from "./product";

export class Recipe{
    id: number;
    name: string;
    img: string;
    product: Product[];
    userId: number;
    description:String;

    constructor(id: number, name: string, img: string, product: Product[],userId: number, description:String){
        this.id = id;
        this.name = name;
        this.img = img;
        this.product = product;
        this.userId = userId;
        this.description=description;
    }
}