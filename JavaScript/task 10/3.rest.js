


// function sum (...numbers) {  //total by rest
//     let total = 0;
    
//     for(let num of numbers){
//         total += num
//     }

//     return total;
// };
// console.log(sum(10,20,30,40));



// function hee(...word) {    //adding words by rest
//     return word.join(' ')
// }
// console.log(hee('we', 'go', 'again'))


function multi (...value) {    //multiply 2 values
    return value[0] * value[1];
}

console.log(multi(4,10))