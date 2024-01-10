alert("Hello and welcome!")
let username = prompt("Enter your username")

let usernameLength = username.length
if (username.length >= 10){
    prompt("Username too long. Enter username less than 10")
}


let usernameAgain = prompt("Enter your username again")
if (username != usernameAgain){
    prompt("Username does not match. Please enter correct username")
}

let password = prompt("Enter your password")
let passwordLength = password.length
if (passwordLength <= 6){
    prompt("Username too short. Password must be greater than 6")
}

let passwordAgain = prompt("Enter your password again")
if (password != passwordAgain){
    prompt("password does not match, enter correct password")
}


alert(`Glad to have your here ${username}!`)