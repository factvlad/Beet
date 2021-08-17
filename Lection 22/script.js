function fits(x) {
    if (Number.isInteger(x)) {
        return 1;
    }
    return 0;
}

// ДЗ Намбер уан

function Task1() {
    let age = prompt("Скільки тобі років?", "0")
    if (age >= 0 && age <= 2) {
        alert("Ти ж ще карапуз, хто за комп пустив?")
    }
    else if (age >= 3 && age <= 9) {
        alert("Дитино, вали робити уроки")
    }
    else if (age >= 10 && age <= 18) {
        alert("Ха-ха, ти прищава малолєтка))")
    }
    else if (age >= 19 && age <= 60) {
        alert("Дорослий дядько, а такою херньою страдаєш, ну йоп твою мать")
    }
    else if (age >= 60) {
        alert("Старий пердун, а в інтернет лізе, ну ви подивіться тільки")
    }
    else {
        alert("Якусь херню ти ввів, спробуй ще раз")
    }
}

// ДЗ Намбер ту
function Task2() {
    let symbols = [")", "!", "@", "#", "$", "%", "^", "&", "*", "(",]

    let number = prompt("Введи ціле число від 0 до 10", "0")

    if (number > 10 || number < 0) {
        alert("Ти читати вмієш? ВІД 0 ДО 10!!!!")
    }
    else if (/^[0-9]+$/.test(number)) {
        alert(`Ти вибрав такий символ ${symbols[number]}`)
    }
    // else if (fits(Number(number)) == 0) {
    //     alert("Має бути ціле число")
    // }
    else {
        alert("Ціле число введи, бляха, ти хоч знаєш що це таке????")
    }
}


// ДЗ Намбер три
function Task3() {
    let value = prompt("Введи що-небудь")
    let array = value.split("")
    var result = [];

    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] == array[j])
                result.push(array[i])
        }
    }

    if (result != "") {
        alert(`Повторюються такі символи: ${result}`)
    }
    else {
        alert(`Ніфіга тут не повторюється`)
    }
}

// ДЗ Намбер фор
function Task4() {
    let year = prompt("Введи якийсь рік")
    if (year != null) {
        if (fits(Number(year)) == 0) {
            alert("Має бути ціле число")
        }
        else if ((year % 400 == 0 || year % 4 == 0) && year % 100 != 0) {
            alert("Рік високосний")
        }
        else {
            alert("Рік не високосний")
        }
    }
    else {
        alert("Та число введи, тобі шо, тяжко????")
    }
}

// ДЗ Намбер файв
function Task5() {
    function IsFiveNumber(x) {
        if (isNaN(x) == 0 && x.toString().length == 5) {
            return 1;
        }
        return 0;
    }
    function reverse(str) {
        return str.split("").reverse().join("")
    }
    function Five() {
        let value = prompt("Введи число з 5 цифр")
        let strvalue = value.toString()
        if (IsFiveNumber(value) == 1 && value != null) {
            if (
                (strvalue) == reverse(strvalue)) {
                alert("Число Поліндром. Круто, да?")
            }
            else {
                alert("Число не поліндром, сорян")
            }
        }
        else {
            Five()
        }
    }
    Five()
}

// ДЗ Намбер сікс
function Task6() {
    let sum = prompt("Яку суму хочеш поміняти?")

    let CurrencyList = ["EUR", "UAH", "AZN"]
    function IsCurrency(value) {

        if (CurrencyList.includes(value)) {
            return 1
        }
        else {
            return 0
        }
    }
    let result = 0

    if (isNaN(sum) == 1 || sum == null || sum == "") {
        alert("Та число введи, блін!!!")
    }
    else {
        let Currency = prompt("Введи валюту (EUR,UAH,AZN)")
        if (IsCurrency(Currency) == 0 && Currency != null) {
            alert("Правильно валюту вводь, лошара!!")
        }
        else if (Currency != null || Currency != "") {
            if (Currency == "EUR") {
                result = sum * 0.81
            }

            else if (Currency == "UAH") {
                result = sum * 28.46
            }
            else if (Currency == "AZN") {
                result = sum * 16, 62
            }
            alert(`А результат такий: ${(Math.round((result) * 100) / 100)} ${Currency}`)
        }
        alert(`Та хоч що-небудь бив ввів`)
    }
}



// ДЗ Намбер севен
function Task7() {
    let price = Number(prompt("Введи суму"))

    let result = 0
    if (isNaN(price) == 1 || price == null || price == "") {
        alert("Та число введи, блін!!! І не 0 щоб було!!")
    }
    else if (price >= 200) {
        if (price >= 200 && price <= 300) {
            result = price + ((price / 100) * 3)
        }
        else if (price >= 300 && price <= 500) {
            result = price + ((price / 100) * 5)
        }
        else if (price >= 500) {
            result = price + ((price / 100) * 7)
        }
        alert(`Ціна зі скидкою: ${result}`)
    }
    else if (price >= 0 && price <= 200) {
        alert("А до 200 скидосіків немає, сорян")
    }
    else {
        alert('Серйозно? Ти нам хочеш бабла дати?')
    }
}

// ДЗ Намбер ейгхт
function Task8() {
    function IsNumber(x) {
        if (isNaN(x) == 1 || x == null || x == "" || x == undefined) {
            alert("Та число введи, блін!!! І не 0 щоб було!!")
            // return false;
        }
        /* else {
             return false;
         }*/
    }

    let p = prompt("Введи периметр квадрата")
    IsNumber(p)

    let c = prompt("Введи довжину круга, вписаного в квадрат")
    IsNumber(c)

    let CalcC = (p / 4) * Math.PI
    let result = (c <= CalcC) ? alert(`Круг з довжиною ${c} поміститься у квадрат з периметром ${p}`) : alert(`Круг з довжиною ${c} не поміститься у квадрат з периметром ${p}`)
}

// ДЗ Намбер найн

function radio(name) {
    var rad = document.getElementsByName(name);
    for (var i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            return Number(i)

        }
    }

}
function task9(name1, name2, name3) {
    let result = 0
    if ((radio(name1)) == 2) {
        result = (result + 2)
    }
    if (radio(name2) == 1) {
        result = (result + 2)
    }
    if (radio(name3) == 1) {
        result = (result + 2)
    }
    alert(`Результат: ${result}`)
}

// ДЗ намбер тен

function Task10() {
    let days = prompt("Введи число")
    let month = prompt("Введи місяць")
    let year = prompt("Введи рік")

    function addDays(date, days) {
        const copy = new Date(Number(date))
        copy.setDate(date.getDate() + days)
        return copy
    }
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
    }
    let date = new Date(month + '/' + days + '/' + year)
    const newDate = addDays(date, 1);

    alert(`Резульат: ${newDate.toLocaleString("ru", options)}`)
}