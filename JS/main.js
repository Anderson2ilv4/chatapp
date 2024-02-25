class User {
    constructor(userName, email, age, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.age = age;
    }
}

function userAdd() {
    let userName = document.getElementById('userName').value
    let email = document.getElementById('email').value
    let age = document.getElementById('age').value
    let password = document.getElementById('password').value
    
    let user = new User(userName, email, age, password)

    console.log(user)
    debugger;
}

