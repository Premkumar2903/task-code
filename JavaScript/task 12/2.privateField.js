
class bank {
    #balance = 1000;            //private field cannot be accessed outside class

    deposit(value) {
        this.#balance += value
    }

    withdraw(amount) {
        if(amount <= this.#balance){
           this.#balance -= amount
        } else{
            console.log('Insufficient balance bro')
        }
    }

    getBalance () {
        return (`Avaliable balance ${this.#balance}`);
    }
}

let account = new bank();

account.deposit(500);                   //500 credited
account.withdraw(1400)
console.log(account.getBalance())      
