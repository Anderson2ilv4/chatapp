var userNameEmail = document.getElementById('userNameEmail')
var password = document.getElementById('password')

function alerta() {
    alert(`Userna/ Email: ${userNameEmail.value}`)
    alert(`Password: ${password.value}`)
}


function userAdd() {
    let userName = document.getElementById('userName')
    let email = document.getElementById('email')
    let age = document.getElementById('age')
    let password = document.getElementById('password')
    
    let user = new User(userName, email, age, password)
    user.print();

    class User {
        constructor(userName, email, age, password) {
            this.userName = userName;
            this.email = email;
            this.password = password;
            this.age = age;
        }
    }

       

    function print() {
        console.log(`Name: ${this.userName}`)
        console.log(`Email: ${this.email}`)
        console.log(`Passsword: ${this.password}`)
        console.log(`Age: ${this.age}`)
    }
}