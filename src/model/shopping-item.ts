export class ShoppingBagModel {

    name: string;
    price: string;


    constructor(name: string, price: string) {
        this.name = name;
        this.price = price;
    }

    getItemName(): string {
        return this.name;
    }

    setItemName(name: string) {
        this.name = name;
    }

    getItemPrice(): string {
        return this.price;
    }
}
