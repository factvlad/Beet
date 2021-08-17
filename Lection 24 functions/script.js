function clearConsole() {
    console.clear();
}

//1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function checkMaxMin(num1, num2) {
    if (isNaN(num1) == 1 || isNaN(num2) == 1) {
        return console.error("Number1 or number2 is not a digit")
    }
    if (num1 > num2) {
        return 1
    } else if (num1 < num2) {
        return -1
    } else if (num1 = num2) {
        return 0
    }
}

function task1() {
    let num1 = +prompt("Enter 1 number"),
        num2 = +prompt("Enter 2 number")
    console.log(checkMaxMin(num1, num2))
}

function getFactorial(num) {

    if (isNaN(num) == 1) {
        return console.error("Number is not a digit")
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i
    }
    return result;
}
function task2() {
    num = +prompt("Enter the number");
    console.log(`${num}! = ${getFactorial(num)}`)

}

//3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

function getConcatNumber(a, b, c) {
    result = a + b + c;
    return result;
}

function task3() {
    let a = prompt("Enter 1 number"),
        b = prompt("Enter 2 number"),
        c = prompt("Enter 3 number");
    console.log(`The Concat value is ${getConcatNumber(a, b, c)}`);
}

//4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function getSqr(a, b) {
    if (b == 0) {
        b = a;
    }
    if (a == 0) {
        a = b;
    }
    let result = a * b;
    if (isNaN(result) == 1) {
        return console.error(`Numbers is not a digit`)
    }
    return result;
}

function task4() {
    let a = +prompt("Enter length"),
        b = +prompt("Enter width")
    console.log(`The square is ${getSqr(a, b)}`)

}


//5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

function getPerfectNumber(num) {
    let result = 0;
    if (isNaN(num) == 1) {
        return console.error(`Number is not a digit`)
    }
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            result = result + i;
        }
    }
    if (result == num) {
        return 1;
    } else {
        return 0;
    }
}

function task5() {
    let num = +prompt("Enter digit")
    if (getPerfectNumber(num) == 1) {
        console.log(`The digit ${num} is perfect`)
    } else {
        console.log(`The digit ${num} is not perfect`)
    }
}

// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
// и выводит только те числа из диапазона, которые являются совершенными. 
// Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

function getPerfectNumbersRange(num1, num2) {
    if (isNaN(num1) == 1 || isNaN(num2) == 1) {
        return console.error("Number1 or number2 is not a digit")
    }
    let min = 0, max = 0;
    if (checkMaxMin(num1, num2) == 1) {
        max = num1;
        min = num2;
    } else {
        max = num2;
        min = num1;
    }
    let ar = [];
    for (let i = min; i <= max; i++) {
        if (getPerfectNumber(i) == 1) {
            ar.push(i);
        }
    }
    let result = `The perfect numbers from ${min} to ${max} are: ${ar.join(", ")}`
    return result;
}

function task6() {
    let num1 = +prompt("Enter 1 number"),
        num2 = +prompt("Enter 2 number")
    console.log(getPerfectNumbersRange(num1, num2))
}

// 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function getTime(hours, minutes = "00", seconds = "00") {
    if (isNaN(hours) == 1 || isNaN(minutes) == 1 || isNaN(seconds) == 1) {
        return console.error("hours or minutes or seconds is not a digit")
    }
    // if (hours < 0 || hours >= 24) {
    //     return console.error("Hours must be between 0 and 23")
    // }
    // if (minutes < 0 || minutes >= 59) {
    //     return console.error("minutes must be between 0 and 59")
    // }
    // if (seconds < 0 || seconds >= 59) {
    //     return console.error("seconds must be between 0 and 59")
    // }
    if (minutes == undefined || minutes == null || minutes == "") {
        minutes = "00"
    }
    if (seconds == undefined || seconds == null || seconds == "") {
        seconds = "00"
    }
    if (hours.toString().length == 1) {
        hours = "0" + hours;
    }
    if (minutes.toString().length == 1) {
        minutes = "0" + minutes;
    }
    if (seconds.toString().length == 1) {
        seconds = "0" + seconds;
    }
    result = `${hours}:${minutes}:${seconds}`
    return result

}
function task7() {
    let hours = prompt("Enter hours"),
        minutes = prompt("Enter minutes"),
        seconds = prompt("Enter seconds");
    console.log(getTime(hours, minutes, seconds))
}

// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function getSeconds(hours, minutes, seconds) {
    if (isNaN(hours) == 1 || isNaN(minutes) == 1 || isNaN(seconds) == 1) {
        return console.error("hours or minutes or seconds is not a digit")
    }
    let result = 0;
    result = seconds + (minutes * 60) + (hours * 3600);
    //console.log(time);
    return result;
}

function task8() {
    let hours = +prompt("Enter hours"),
        minutes = +prompt("Enter minutes"),
        seconds = +prompt("Enter seconds");
    console.log(`${getTime(hours, minutes, seconds)} = ${getSeconds(hours, minutes, seconds)} seconds`)

}

// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс»
function getTimeFromSeconds(seconds) {
    if (isNaN(seconds) == 1) {
        return console.error("Seconds is not a digit")
    }
    let hours = Math.trunc(seconds / 3600)
    let minutes = Math.trunc((seconds - (hours * 3600)) / 60)
    let secondsFinal = seconds - (hours * 3600 + minutes * 60)
    let result = getTime(hours, minutes, secondsFinal);
    return result;
}

function task9() {
    let seconds = +prompt("Enter seconds");
    console.log(`The result is ${getTimeFromSeconds(seconds)}`)
}

// 10. Написать функцию, которая считает разницу между датами.Функция принимает 6 параметров, 
// которые описывают 2 даты, и возвращает результат в виде строки «чч: мм: сс».
// При выполнении задания используйте функции из предыдущих 2 - х заданий: сначала обе даты переведите в секунды, 
// узнайте разницу в секундах, а потом разницу переведите обратно в «чч: мм: сс»

function getDateDiff(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    if (isNaN(hours1) == 1 || isNaN(minutes1) == 1 || isNaN(seconds1) == 1 || isNaN(hours2) == 1 || isNaN(minutes2) == 1 || isNaN(seconds2) == 1) {
        return console.error("hours or minutes or seconds is not a digit")
    }
    let allSeconds1 = getSeconds(hours1, minutes1, seconds1),
        allSeconds2 = getSeconds(hours2, minutes2, seconds2);
    let secondsDiff = Math.abs(allSeconds1 - allSeconds2);
    let result = getTimeFromSeconds(secondsDiff);
    return result;
}

function task10() {
    let hours1 = +prompt("Enter hours of first date"),
        minutes1 = +prompt("Enter minutes of first date"),
        seconds1 = +prompt("Enter seconds of first date"),
        hours2 = +prompt("Enter hours of second date"),
        minutes2 = +prompt("Enter minutes of second date"),
        seconds2 = +prompt("Enter seconds of second date"),
        time1 = getTime(hours1, minutes1, seconds1),
        time2 = getTime(hours2, minutes2, seconds2);
    if (getSeconds(hours1, minutes1, seconds1) >= getSeconds(hours2, minutes2, seconds2)) {
        console.log(`The date diff between ${time1} and ${time2} is ${getDateDiff(hours1, minutes1, seconds1, hours2, minutes2, seconds2)}`)
    } else {
        console.log(`The date diff between ${time2} and ${time1} is ${getDateDiff(hours1, minutes1, seconds1, hours2, minutes2, seconds2)}`)
    }
}

