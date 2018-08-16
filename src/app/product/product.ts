export class Product {
    private name: string;
    private imageUrl: string;
    private description: string;
    private price: number;

    constructor(name: string, description: string, url: string) {
        this.name = name;
        this.imageUrl = url;
        this.description = description;
        this.price = Math.random() * 100;
    }

    getName(): string {
        return this.name;
    }

    getImageUrl(): string {
        return this.imageUrl;
    }

    getDescription(): string {
        return this.description;
    }


}