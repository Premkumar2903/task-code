


// 1.calll back function 
function profile(username, callback) {
    console.log('Login with your credencials')  

    setTimeout(() => {
        console.log('Login successfull ' + username);  
        callback();                                     //callback after login to show feed
    }, 2000);               
}



// 2.This is the callback function passed as parameter
function loadProfile() {
    console.log('Loading your feed');
}


// 3.calling function with parameter (value , callback)
profile('Prem', loadProfile)  