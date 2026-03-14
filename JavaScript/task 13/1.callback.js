
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();                 //here callback function        
};


function thank() {
    console.log('Bye')
}

greet('snow', thank)
