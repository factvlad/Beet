
function isMaxMin(num1, num2, MaxMin) {
    if (MaxMin == "Max" || MaxMin == "max") {
        if (num1 > num2) {
            return num1;
        } else {
            return num2
        }
    } else if (MaxMin == "Min" || MaxMin == "min") {
        if (num1 < num2) {
            return num1;
        } else {
            return num2
        }
    } else {
        return "MaxMin must max or min"
    }
}

function clearConsole() {
    console.clear();
}

// 1.Подсчитать сумму всех чисел в заданном пользователем диапазоне.
function task1() {
    let num1 = +prompt("Enter 1 number"),
        num2 = +prompt("Enter 2 number");

    if (isNaN(num1) == 0 || isNaN(num2) == 0) {
        let max = isMaxMin(num1, num2, "Max"),
            min = isMaxMin(num1, num2, "Min")

        let result = 0;

        for (let i = min; i <= max; i++) {
            result = result + i
        }

        console.log(`Result is ${result}`)
    } else {
        console.log(`Number1 or number2 is not a digit`)
    }
}
//2. Запросить 2 числа и найти только наибольший общий делитель.
function task2() {
    let num1 = +prompt("Enter 1 number"),
        num2 = +prompt("Enter 2 number");

    if (isNaN(num1) == 0 || isNaN(num2) == 0) {
        let max = isMaxMin(num1, num2, "Max"),
            min = isMaxMin(num1, num2, "Min")
        let result = 0;
        for (let count = 1; count <= max; count++) {
            if (min % count == 0 && max % count == 0) {
                result = count
            };
        } console.log(`The biggest divider is ${result}`)
    }
    else {
        console.log("Number1 or number2 is not a digit")
    }
}

//3. Запросить у пользователя число и вывести все делители этого числа.
function task3() {
    console.clear();
    let num1 = +prompt("Enter number")

    if (isNaN(num1) == 0) {
        for (let count = 1; count <= num1; count++) {
            if (num1 % count == 0) {
                console.log(count)
            };
        }
    }
    else {
        console.log(`Number1 or number2 is not a digit`)
    }
}
//4. Определить количество цифр в введенном числе.
function task4() {
    let num = +prompt("Enter the number")
    let result = 0;

    if (isNaN(num) == 0) {
        while (num > 0) {
            num = Math.trunc(num / 10);
            result++;
        }
        console.log(result)
    }
    else {
        console.log(`Number is not a digit`)
    }
}
// 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, 
// сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем

// // // // // let number = prompt("Enter numbers wit spaces (Example - 0 1 2 3 -4 5 6 7 -8 9)")
// // // // // let ar = number.split(" ")
// // // // // let resultMinus = 0;

// // // // // for (let i = 0; i <= number.length; i++) {
// // // // //     if (number[i] > 0) {
// // // // //         resultMinus = resultMinus + 1
// // // // //     }
// // // // // }
// // // // // console.log(resultMinus)
// // // // // console.log(ar)

function task5() {
    let resultPlus = 0,
        resultMinus = 0,
        resultZero = 0,
        resultEven = 0,
        resultNonEven = 0;
    let i = 1

    do {
        let number = prompt(`Enter ${i} number`);
        if (number > 0) {
            resultPlus = resultPlus + 1;
        } else if (number < 0) {
            resultMinus = resultMinus + 1;
        } else {
            resultZero = resultZero + 1;
        }
        if (number % 2 == 0) {
            resultEven = resultEven + 1
        } else {
            resultNonEven = resultNonEven + 1
        }
        i++;
    } while (i <= 10)
    console.log(`Number of positive numbers is ${resultPlus};`);
    console.log(`Number of negative numbers is ${resultMinus};`);
    console.log(`Number of zeroes is ${resultZero}`);
    console.log(`Number of even numbers is ${resultEven};`);
    console.log(`Number of non even is ${resultNonEven}`);
}

// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, 
// вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется


// // function calc() {
// //     let num1 = +prompt("Enter 1 number"),
// //         num2 = +prompt("Enter 2 number"),
// //         sign = prompt("Enter sign");

// //     let str = num1 + sign + num2;
// //     let result = eval(str);

// //     let conf = confirm(`The result is: ${result}, want to try again?`)
// //     if (conf) {
// //         calc();
// //     }
// // } calc();

function task6() {
    let conf = "";
    do {
        let num1 = +prompt("Enter 1 number"),
            num2 = +prompt("Enter 2 number"),
            sign = prompt("Enter sign");

        let str = num1 + sign + num2;
        let result = eval(str);
        if (isNaN(result) == 0) {
            conf = confirm(`The result is: ${result}, want to try again?`)
        } else {
            alert("Your data is wrong")
        }
    } while (conf)
}

// 7. Запросить у пользователя число и на сколько цифр его сдвинуть. 
// Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

function task7() {
    let num = prompt("Enter number");
    let dig = +prompt("Enter how much do you want to shift the number");

    let ar = num.split("");

    for (let i = 0; i < dig; i++) {
        ar.push(ar[i]);
        delete ar[i];
    }
    let result = ar.filter(function (el) {
        return el != null;
    });

    console.log(`The shifted result is: ${result.join("")}`)

}

// 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

function task8() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let today = new Date()

    let currentDay = today.getDay()
    // console.log(currentDay)
    let result = days[currentDay]

    let conf = ""
    let i = currentDay;

    do {
        result = days[i];
        conf = confirm(`${result}. Want to see the next day?`);
        i++;
        if (i > 6) {
            i = 0
        }
    } while (conf)
}

//9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

function task9() {

    let numbers1 = [2, 3, 4, 5, 6, 7, 8, 9];
    let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let resultArray = [];
    for (let i = 0; i < numbers1.length; i++) {
        for (let j = 0; j < numbers2.length; j++) {
            let result = numbers1[i] * numbers2[j];
            resultArray.push(result);
        }
        console.log(resultArray.join(" "));
        resultArray = [];
    }
}

// 10.Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: 
// каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, 
// < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, 
// поделили пополам и получили 50. Если пользователь указал, что его число > 50, 
// то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

function task10() {
    let from = 0,
        to = 100;

    let result = to / 2,
        sign = "";
    do {
        if (sign == ">") {
            from = result;
            result = Math.round(from + ((to - from) / 2));
        } else if (sign == "<") {
            to = result;
            result = Math.round(from - ((from - to) / 2));
        }
        sign = prompt(`Your number >${result},<${result},=${result}?`)
    } while (sign != "=")
}

