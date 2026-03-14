const obj = {
    name: 'Prem',
    age: '22',
    hello: function  () {
        console.log(`My name is ${this.name} and age is ${this.age}`)
    }
}

console.log(obj.name)

obj.hello()
