function task1() {
    class circle {
        constructor(_radius) {
            this.radius = _radius;
        }

        get getRadius() {
            return `The radius is ${this.radius}`;
        }

        set setRadius(newRadius) {
            this.radius = newRadius;
        }

        get getDiametr() {
            return "The diametr is " + this.radius * 2;
        }
        square() {
            let s = (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
            return `The square is ${s}`;
        }
        circleLength() {
            let c = (Math.PI * 2 * this.radius).toFixed(2);
            return `The circle Length is ${c}`;
        }
    }


    let c = new circle(document.getElementById("1").value);



    let result = `${c.getRadius}\n`

    // if (document.getElementById("1").value) {
    //     c.setRadius = newRadius
    // }
    // else {
    //     c.setRadius = document.getElementById("1").value;
    // }
    //c.setRadius = document.getElementById("3").value

    let newRadius = document.getElementById("3").value;

    if (!newRadius) {
        c.setRadius = document.getElementById("1").value;
    }
    else {
        c.setRadius = newRadius
    }

    result = result + `The new ${c.getRadius};\n ${c.getDiametr};\n ${c.square()};\n${c.circleLength()}`

    document.getElementById("5").value = result


    //let newRadius = document.getElementById("2").value
    // console.log(c.getRadius);
    // c.setRadius = 15;

    // console.log(c.getRadius);
    // console.log(c.getDiametr);
    // console.log(c.square());
    // console.log(c.circleLength());
}


function marker() {
    class marker {
        constructor(_color, _ink) {
            this.color = _color, this.ink = _ink
        }
    }

    class markerWithInk extends marker {
        constructor(_color, _ink) {
            super(_color, _ink)
        }
        print(text) {
            //let arText = text.split("")
            let textColorLength = (this.ink / 0.5);
            let colorText = text.substring(0, textColorLength);
            let ar = colorText.split("");
            let countSpaces = 1;
            for (let i = 0; i < ar.length; i++) {
                if (ar[i] == " ") {
                    countSpaces = countSpaces + 1;
                }
            }
            textColorLength = textColorLength + countSpaces;
            colorText = text.substring(0, textColorLength);
            let outText = "<span style = 'color: " + this.color + "'>" + colorText + "</span>";
            document.getElementById("markerText").innerHTML = outText;
        }
    }

    let m = new markerWithInk(document.getElementById("color").value, document.getElementById("ink").value);
    m.print(document.getElementById("textToFormat").value)
}



function employee() {
    let employeeText = document.getElementById("empList").value
    let employessAr = employeeText.split("\n")

    class employee {
        constructor(emp) {
            this.empl = emp;
        }

    }


    //console.log(e)
    class EmpTAble {
        constructor(employess) {
            this.emp = employess;
        }
        getHtml() {
            let empTable = "<table  border='1'>\n <caption>Таблица работников</caption> \n "
            for (let i = 0; i < this.emp.length; i++) {
                empTable = empTable + `<tr><td> ${this.emp[i]} </td></tr>`;
            }
            empTable = empTable + "</table>"
            document.getElementById("employee").innerHTML = empTable;
            console.log(empTable)
        }
    }

    let emp = new EmpTAble(employessAr)
    emp.getHtml()

}
