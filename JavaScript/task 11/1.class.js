
class cart {                        //class
    constructor (shirt,belt,perfume) {
        this.shirt = shirt
        this.belt = belt
        this.perfume = perfume
    }

    getTotal() {                    //method
        return this.total = this.shirt+this.belt+this.perfume;
    }
    
}

let add = new cart(700,200,300);
console.log(add.getTotal());
