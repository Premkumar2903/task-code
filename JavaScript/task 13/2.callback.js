
function profile(username, callback) {
    console.log('Login with your credencials')  //1.validation

    setTimeout(() => {
        console.log('Login successfull ' + username);   //2.login
        callback();                                     //3.callback after login to show feed
    }, 2000);               
}

function loadProfile() {
    console.log('Loading your feed');
}

profile('Prem', loadProfile)