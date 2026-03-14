

function brush(){
    return new Promise(resolve=> {
       setTimeout(() => resolve('Time to brush'), 1000); 
    })
}

function coffee(){
    return new Promise(resolve=> {
        setTimeout(() => resolve('Have a cup of coffee'), 1500);
    })
}


async function wakeup(){
    try{
        let Brush = await brush();
        console.log(Brush);

        let Coffee = await coffee();
        console.log(Coffee);
    }

    catch(error) {
        console.log('reschedule your day!', error)
    }
}

wakeup()

