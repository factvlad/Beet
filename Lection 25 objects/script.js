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
        return "MaxMin must be max or min"
    }
}

function getTime(hours, minutes = "00", seconds = "00") {
    if (isNaN(hours) == 1 || isNaN(minutes) == 1 || isNaN(seconds) == 1) {
        return console.error("hours or minutes or seconds is not a digit")
    }
    if (minutes == undefined || minutes == null || minutes == "") {
        minutes = "00"
    }
    if (seconds == undefined || seconds == null || seconds == "") {
        seconds = "00"
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    result = `${hours}:${minutes}:${seconds}`
    return result

}

function calcBiggestDivider(num1, num2) {
    let max = +isMaxMin(+num1, +num2, "Max"),
        min = +isMaxMin(+num1, +num2, "Min")
    let result = 0;
    for (let count = 1; count <= max; count++) {
        if (min % count == 0 && max % count == 0) {
            result = count
        };
    } return result;
}
function task1() {

    let car = {
        manufacturer: document.getElementById("manufacturer").value,
        model: document.getElementById("model").value,
        manufacturerYear: document.getElementById("manufacturerYear").value,
        avgSpeed: document.getElementById("avgSpeed").value,
        toString: function () {
            return "manufacturer: " + this.manufacturer + "\n model: " + this.model + "\n manufacturerYear: " + this.manufacturerYear + "\n avgSpeed: " + this.avgSpeed
        }
    }

    // let car = {

    // };
    // car.manufacturer = document.getElementById('manufacturer').value;
    // car.model = document.getElementById('model').value;
    // car.manufacturerYear = document.getElementById('manufacturerYear').value;
    // car.avgSpeed = document.getElementById('avgSpeed').value;

    function getCarInfo() {
        document.getElementById('car').value = car;
        // console.log(car)
    }

    getCarInfo()

    function calcTime(distance) {
        if (isNaN(distance) == 1) {
            return `${distance} is not a number`
        }
        let time = 0;
        time = (distance / car.avgSpeed);
        time = Math.trunc(time / 4) + time
        return +time.toFixed(2) + " hours";
    }

    let distance = document.getElementById('distance').value;
    document.getElementById('resultTask1').value = calcTime(distance);
    //console.log(calcTime(distance))
}

function task2() {

    // let numerator = +prompt("Enter numerator");
    // let denominator = +prompt("Enter denominator");
    // if (isNaN(numerator == 1) || isNaN(denominator) == 1) {
    //     return console.log(`numerator or denominator is not a number`);
    // }
    let fraction = {
        numerator: +document.getElementById("numerator").value,
        denominator: +document.getElementById("denominator").value,
    }
    if (isNaN(fraction.numerator) == 1 || (isNaN(fraction.denominator) == 1)) {
        return document.getElementById('resultTask2').value = `numerator or denominator is not a number`;
    }
    function calcSum() {
        return fraction.numerator + fraction.denominator
    }
    function calcDiff() {
        return fraction.numerator - fraction.denominator
    }
    function calcMultiply() {
        return fraction.numerator * fraction.denominator
    }
    function calcDivide() {
        return (fraction.numerator / fraction.denominator)
    }
    function calcFractionCrush() {
        let crush = calcBiggestDivider(fraction.numerator, fraction.denominator);
        let crushNumerator = fraction.numerator / crush;
        let crushDenumerator = fraction.denominator / crush;
        return `${crushNumerator} / ${crushDenumerator}`
    }



    let result = `Sum is ${calcSum()} \n Difference is ${calcDiff()} \n Multiply is ${calcMultiply()} \n Divide is ${calcDivide()}  \n Crushed fraction is:  ${calcFractionCrush()}`

    document.getElementById('resultTask2').value = result;


    // console.log(fraction)
    // console.log(`Sum is ${calcSum()}`)
    // console.log(`Difference is ${calcDiff()}`)
    // console.log(`Product is ${calcMultiply()}`)
    // console.log(`Divide is ${calcDivide()}`)
    // console.log(`Crushed fraction is:  ${calcFractionCrush()}`)

}

function task3() {
    // let hours = +prompt("Enter hours"),
    //     minutes = +prompt("Enter minutes"),
    //     seconds = +prompt("Enter seconds"),
    //     hoursToAdd = +prompt("Enter hours ToAdd"),
    //     minutesToAdd = +prompt("Enter minutes ToAdd"),
    //     secondsToAdd = +prompt("Enter seconds ToAdd");

    let time = {
        hours: +document.getElementById('hours').value,
        minutes: +document.getElementById('minutes').value,
        seconds: +document.getElementById('seconds').value,
    }
    let hoursToAdd = +document.getElementById('addHours').value,
        minutesToAdd = +document.getElementById('addMinutes').value,
        secondsToAdd = +document.getElementById('addSeconds').value

    if (isNaN(time.hours == 1) || isNaN(time.minutes) == 1 || isNaN(time.seconds) == 1 || isNaN(hoursToAdd == 1) || isNaN(minutesToAdd) == 1 || isNaN(secondsToAdd) == 1) {
        return document.getElementById('resultTask3').value = `Some of entered data is wrong`;
    }

    function caclTime() {
        let calcSeconds = secondsToAdd + time.seconds,
            calcMinutes = minutesToAdd + time.minutes,
            calcHours = hoursToAdd + time.hours;

        if (calcSeconds > 59) {
            calcMinutes = calcMinutes + 1;
            calcSeconds = calcSeconds - 60;
        }
        if (calcMinutes > 59) {
            calcHours = calcHours + 1;
            calcMinutes = calcMinutes - 60
        }
        return getTime(calcHours, calcMinutes, calcSeconds)
    }

    let result = `${getTime(time.hours, time.minutes, time.seconds)} + ${getTime(hoursToAdd, minutesToAdd, secondsToAdd)} = ${caclTime()}`

    document.getElementById('resultTask3').value = result;

}
