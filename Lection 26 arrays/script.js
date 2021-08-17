let shoppingList = [
    {
        name: "Tekila",
        quantity: 2,
        IsBought: true,
    },
    {
        name: "lime",
        quantity: 4,
        IsBought: false,
    },
    {
        name: "whiskey",
        quantity: 1,
        IsBought: false,
    },
    {
        name: "meat",
        quantity: 5,
        IsBought: true,
    },
    {
        name: "beer",
        quantity: 15,
        IsBought: false,
    },

]

// console.log(JSON.stringify(shoppingList));

function objectToString(ar) {
    let result = ""
    for (let key in ar) {
        result = result + key + ": " + ar[key] + ", "
    }
    return result
}

function arrayToString(ar, id) {
    let result = ""
    for (let i = 0; i <= ar.length; i++) {
        result = result + objectToString(ar[i]) + "\n"
    }
    document.getElementById(id).value = result
}

function sortArray(ar) {
    ar.sort((a, b) => {
        return a.IsBought - b.IsBought
    })
}
function sortedShoppingList() {
    let result = "";
    sortArray(shoppingList);
    for (let i = 0; i < shoppingList.length; i++) {
        result = result + `${shoppingList[i].name} (${shoppingList[i].quantity})\n`
    };
    document.getElementById("sortShoppingList").value = result;
    //return ar;
}

function ProductAdd(ar) {
    let product = {
        name: document.getElementById("addProduct").value,
        quantity: +document.getElementById("addProductQuantity").value,
        IsBought: false,
    }
    let index = ar.findIndex(x => x.name === product.name)
    if (index != -1) {
        ar[index].quantity = ar[index].quantity + product.quantity
    } else {
        ar.push(product)
    }
    return ar
}


function changeIsBoughtValue(ar) {

    let index = ar.findIndex(x => x.name === document.getElementById("boughtProduct").value)
    if (index != -1 && ar[index].IsBought == false) {
        ar[index].IsBought = true
    }
    return ar
}

// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.

let check = [
    {
        name: "Tekila",
        quantity: 2,
        price: 450,
    },
    {
        name: "lime",
        quantity: 4,
        price: 15,
    },
    {
        name: "whiskey",
        quantity: 1,
        price: 400,
    },
    {
        name: "meat",
        quantity: 5,
        price: 120,
    },
    {
        name: "beer",
        quantity: 15,
        price: 35,
    },

]

function calcCheckSum() {
    let sum = 0;
    for (let i = 0; i < check.length; i++) {
        sum = sum + (check[i].price * check[i].quantity)
    }
    document.getElementById("printSum").value = sum
}

function getMaxProduct() {
    let max = 0;
    for (let i = 0; i < check.length; i++) {
        if (max < check[i].price) {
            max = check[i].price
        }
    }
    document.getElementById("printMax").value = max
}

function calcAveragePrice() {
    let avg = 0;
    for (let i = 0; i < check.length; i++) {
        avg = avg + check[i].price
    }
    avg = avg / check.length
    document.getElementById("printAvg").value = avg
}

// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() 
// в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

function task3() {
    let arrList = [
        {
            styleName: "color",
            styleValue: "red"
        },
        {
            styleName: "font - size",
            styleValue: "15px"
        },
        {
            styleName: "background",
            styleValue: "#f5f5f5"
        },
    ]
        ;

    function buildNode(styles, text = "default") {
        let stylesList = "";
        for (let i = 0; i < styles.length; i++) {
            stylesList = stylesList + styles[i].styleName + ":" + styles[i].styleValue + ";"
        }
        document.getElementById("formatResult").innerHTML = (`<p style = "${stylesList}"> ${text} </p>`);
        // document.write(`<p style = "${stylesList}"> ${text} </p>`)
    }

    buildNode(arrList, document.getElementById("textToFormat").value)
}

let auditoriums = [
    {
        name: "Computer class 1",
        size: 15,
        faculty: "IT",
        // id: 1,
    },
    {
        name: "Computer class 2",
        size: 19,
        faculty: "IT",
        // id: 2,
    },
    {
        name: "Phys laboratory 1",
        size: 16,
        faculty: "Physics",
        // id: 3,
    },
    {
        name: "Phys laboratory 2",
        size: 13,
        faculty: "Physics",
        // id: 4,
    },
    {
        name: "English class",
        size: 12,
        faculty: "Foreign Languages",
        // id: 5,
    },
    {
        name: "Klingon class",
        size: 18,
        faculty: "Foreign Languages",
        // id: 5,
    },
]

function getAllAuditoriums() {
    let result = "";
    for (let i = 0; i < auditoriums.length; i++) {
        result = result + `${auditoriums[i].name} (Numbers of students ${auditoriums[i].size}, ${auditoriums[i].faculty})\n`
    };
    document.getElementById("allAuditoriums").value = result;
}

function getDistinct(sumArr) {
    let resultArr = [];
    for (let i = 0; i < sumArr.length; i++) {
        let index = resultArr.indexOf(sumArr[i].faculty)
        if (index == -1) {
            resultArr.push(sumArr[i].faculty);
        }
    }
    return resultArr
};

let faculties = getDistinct(auditoriums);

// let select = document.createElement('select');
// document.getElementById("select").innerHTML = faculties.map(function (v) {
//     return '<option value="' + v + '">' + v + '</option>';
// });

function selectFaculties(id) {
    let select = ""
    for (i = 0; i < faculties.length; i++) {
        select = select + '<option value="' + faculties[i] + '">' + faculties[i] + '</option> \n';
    }
    document.getElementById(id).innerHTML = select;
}
selectFaculties("select");

function getInfoByAud() {
    let searchValue = document.getElementById('select').value;
    //console.log(searchValue)
    let result = "";
    for (let i = 0; i < auditoriums.length; i++) {
        if (auditoriums[i].faculty === searchValue) {
            result = result + `${auditoriums[i].name} (Numbers of students - ${auditoriums[i].size}) \n`
        }
    }
    document.getElementById("infoAud").value = result
}
selectFaculties("group3");

function checkAud() {
    let group = {
        name: document.getElementById("group1").value,
        students: +document.getElementById("group2").value,
        faculty: document.getElementById("group3").value,
    }
    console.log(group)
    let result = "";
    for (let i = 0; i < auditoriums.length; i++) {
        if (auditoriums[i].faculty === group.faculty && auditoriums[i].size >= group.students) {
            result = result + `${auditoriums[i].name}\n`
        }

    }
    document.getElementById("checkAuds").value = result
}

function sortArrayTask4Size() {
    function sortArraySize(ar) {
        ar.sort((a, b) => {
            return a.size - b.size
        })

    }
    sortArraySize(auditoriums)
    let result = "";
    for (let i = 0; i < auditoriums.length; i++) {
        result = result + `${auditoriums[i].name} (Numbers of students ${auditoriums[i].size}, ${auditoriums[i].faculty})\n`
    };
    document.getElementById("sortQuantity").value = result;
}

function sortArrayTask4Faculty() {
    function sortArrayFaculty(ar) {
        ar.sort((a, b) => {
            let A = a.name.toUpperCase();
            let B = b.name.toUpperCase();
            if (A > B) {
                return 1
            } else if (B > A) {
                return -1
            } else {
                return 0
            }
            //return a.faculty - b.faculty
        })
    }

    sortArrayFaculty(auditoriums)
    let result = "";
    for (let i = 0; i < auditoriums.length; i++) {
        result = result + `${auditoriums[i].name} (Numbers of students ${auditoriums[i].size}, ${auditoriums[i].faculty})\n`
    };
    document.getElementById("sortFaculty").value = result;
}
