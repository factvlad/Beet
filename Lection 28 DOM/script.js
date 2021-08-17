//let countTask1 = 0;
function task1() {
    let playList = [

        {

            author: "BRING ME THE HORIZON",

            song: "CAN YOU FEEL MY HEART"

        },

        {

            author: "QUEEN",

            song: "BOHEMIAN RHAPSODY"

        },

        {

            author: "LYNYRD SKYNYRD",

            song: "FREE BIRD"

        },

        {

            author: "DEEP PURPLE",

            song: "SMOKE ON THE WATER"

        },

        {

            author: "JIMI HENDRIX",

            song: "ALL ALONG THE WATCHTOWER"

        },

        {

            author: "AC/DC",

            song: "BACK IN BLACK"

        },

        {

            author: "QUEEN",

            song: "WE WILL ROCK YOU"

        },

        {

            author: "METALLICA",

            song: "ENTER SANDMAN"

        }

    ];
    checkOl = document.getElementsByTagName("ol")
    let btn = document.getElementById("task1")

    console.log(checkOl)

    if (checkOl.length == 0) {
        ol = document.createElement("ol")
        let list = ""
        btn.after(ol);
        for (let i = 0; i < playList.length; i++) {
            list = `${list} <li> ${playList[i].author}: ${playList[i].song} </li>\n`
        }
        ol.innerHTML = list
    } else {
        ol.remove()
    }


}




let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let closeBtn = document.getElementById("closeMyBtn");

btn.onclick = function () {
    modal.style.display = "block"
}
closeBtn.onclick = function () {
    modal.style.display = "none"
}
span.onclick = function () {
    modal.style.display = "none"
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}


let items = document.querySelectorAll(".item");
let colors = ["red", "yellow", "green"]

items[1].style.margin = ("10px 0")

let count = 0;

function changeColor() {
    // if (count > 2) {
    //     for (let i = 0; i < items.length; i++) {
    //         items[i].style.backgroundColor = "black"
    //         count = 0;
    //     }
    // } else {

    if (count > 2) {
        count = 0;
    }
    for (let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "black"
    }
    items[count].style.backgroundColor = colors[count]

    count = count + 1;

}