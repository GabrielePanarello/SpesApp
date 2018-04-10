export class Product{
    id: number;
    img: string;
    name: string;
    dose: string;
    quantity: string;
    took: boolean;

    constructor(id: number, img: string,name: string, dose: string, quantity:string, took: boolean){
        this.id = id;
        this.img=img;
        this.name = name;
        this.dose=dose;
        this.quantity=quantity;
        this.took = took;
    }
}