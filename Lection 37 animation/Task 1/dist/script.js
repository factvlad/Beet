const icon = document.querySelectorAll(".row__icon")
const suit = document.querySelectorAll(".deck__back")
const front = document.querySelectorAll(".deck__front")
const empty = document.querySelector(".empty")

for (let i = 0; i < suit.length; i++) {
    front[i].addEventListener("mouseenter", function (event) {
        let suitIcons = suit[i].querySelectorAll(".row__icon")
        if (i % 2 == 0) {
            for (let index = 0; index < suitIcons.length; index++) {
                suitIcons[index].classList.add("animate__animated");
                suitIcons[index].classList.add("animate__backInDown");
                suitIcons[index].classList.add("is-visible");
            }
        } else {
            for (let index = 0; index < suitIcons.length; index++) {
                suitIcons[index].classList.add("animate__animated");
                suitIcons[index].classList.add("animate__backInUp");
                suitIcons[index].classList.add("is-visible");

            }
        }
        let suitSvg = suit[i].querySelectorAll(".deck__svg")
        for (let i = 0; i < suitSvg.length; i++) {
            suitSvg[i].classList.add("animate__animated");
            suitSvg[i].classList.add("animate__flip")

        }
        let ace = suit[i].querySelectorAll(".row__ace")
        for (let i = 0; i < ace.length; i++) {
            ace[i].classList.add("animate__animated");
            ace[i].classList.add("animate__heartBeat")

        }
    })
}

for (let i = 0; i < suit.length; i++) {
    suit[i].addEventListener("mouseleave", function (event) {
        let suitIcons = this.querySelectorAll(".row__icon")
        for (let index = 0; index < suitIcons.length; index++) {
            suitIcons[index].classList.remove("animate__animated");
            suitIcons[index].classList.remove("animate__backInDown")
            suitIcons[index].classList.remove("animate__backInUp")
            suitIcons[index].classList.remove("animate__flash")
        }
        let suitSvg = suit[i].querySelectorAll(".deck__svg")
        for (let i = 0; i < suitSvg.length; i++) {
            suitSvg[i].classList.remove("animate__animated");
            suitSvg[i].classList.remove("animate__flip")

        }
        let ace = suit[i].querySelectorAll(".row__ace")
        for (let i = 0; i < ace.length; i++) {
            ace[i].classList.remove("animate__animated");
            ace[i].classList.remove("animate__heartBeat")

        }
    })
}


