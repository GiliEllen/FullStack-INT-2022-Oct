function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

class Product {
    private static img = "./photos/cart.png";
    private static imgShirt = "./photos/shirt.png";
    private static imgPants = "./photos/pants.png";
    private static imgHat = "./photos/hat.png";
    public id: string;
    public img: string;
    constructor(public name: string, public type: string, public price: number, public size: string, img: string) {
        this.id = uid();
        if (!img) {
            if (this.type == "Hat") {

                this.img = Product.imgHat
            }
            else if (this.type == "Pants") {

                this.img = Product.imgPants
            }
            else if (this.type == "Shirt") {

                this.img = Product.imgShirt
            } else {
                this.img = Product.img
            }

        } else {
            this.img = img;
        }
    }

    getName() {
        return this.name
    }

    getPrice() {
        return this.price
    }

    getSize() {
        return this.size
    }

    getType() {
        return this.type
    }

    getId() {
        return this.id
    }

    setName(name: string) {
        this.name = name
    }

    setPrice(price: number) {
        this.price = price
    }

    setType(type: string) {
        this.type = type
    }

    setSize(size: string) {
        this.size = size
    }
}