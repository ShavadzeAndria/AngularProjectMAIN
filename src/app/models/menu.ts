// export class Menu{
//     quantity?: number;
//     price?: number;
//     product?: {
//         id: number;
//         name: string;
//         price: number;
//         nuts: boolean;
//         image: string;
//         vegeterian: boolean;
//         spiciness: number;
//         categoryId: number;
//     };
// }
export class Product{
    id!: number;
    name?: string;
    price?: number;
    nuts?: boolean;
    image?: string;
    vegeterian?: boolean;
    spiciness?: number;
    categoryId?: number;
}
export class Cart{
    quantity?: number;
    price?: number;
    product?: Product = new Product();
 
}

