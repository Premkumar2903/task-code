
let single = [1,2,3,4,5]

let double = single.map(a => a* 2)
console.log(double)

let filter = single.filter(a=>( a%2 == 0))
console.log(filter)

let reduce = single.reduce((c,p) => c+p, 0)
console.log(reduce)


let num = [10,12,7,5,18,3]

let firstGreater = num.find(num => num >10) //num greater than 10
console.log(firstGreater)

let spec = num.includes((7))
console.log(spec)

