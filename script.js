let userName = prompt("Введите свое имя,")
let myTitle = document.getElementById("title")
let count = 0
if (userName) {
    myTitle.innerHTML = "Ваш список дел, " + userName + ":"
} else {
    myTitle.innerHTML = "Ваш список дел, анонимный пользователь:"
}

function buttonAdd () {
    count ++
    if (count > 5)  {
        let myError = document.getElementById("error")
        myError.innerHTML = "Можно ввести максимум 5 дел!"
    } else {
    let myList = document.getElementById("list")
    let myInput = document.getElementById("text")
    let value = myInput.value
    
    myList.innerHTML = myList.innerHTML + "<li>" + value + "</li>"
    }
    
}
