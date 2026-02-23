


// function getName() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("John Snow"), 1000);
//     });
// }

// async function showName() {
//     let name = await getName();
//     console.log("Name is:", name);
// }



function Payment() {
    return new Promise (resolve => {
        setTimeout(()=> { resolve('Payment completed')} ,1500)
    });
};

async function PaymentResult(){
    console.log('Payment is processing...')

    let  result = await Payment();
    console.log(result);
}

PaymentResult();