
class fish {
    constructor () {
        this._weight = 10
        this.color = 'white'
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }
}

let details = new fish();
details.weight = 5
console.log(details.weight);