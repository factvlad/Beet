let text = document.querySelector(".text")
let changedTextBefore = document.querySelector(".changedText")


// document.onkeydown = function (event) {
//     if ((event.ctrlKey && (event.code == "KeyE")) || (event.ctrlKey && ((event.code == "Equal") || event.code == "NumpadAdd"))) {
//         return false
//     }
// }

document.addEventListener('keydown', function (event) {
    if ((event.ctrlKey && (event.code == "KeyE")) || (event.ctrlKey && ((event.code == "Equal") || event.code == "NumpadAdd"))) {
        event.preventDefault();
    }
})

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && (event.code == "KeyE")) {
        text.style.display = "none";
        changedTextBefore.style.display = "block";
        changedTextBefore.innerHTML = text.innerHTML.trim()
    }
});


//console.log(document.querySelector(".changedText").innerHTML)

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && ((event.code == "Equal") || event.code == "NumpadAdd")) {
        text.style.display = "block";
        //console.log(changedTextAfter.innerHTML);
        changedTextBefore.style.display = "none";
        let changedTextAfter = document.querySelector(".changedText").value;
        text.innerHTML = changedTextAfter
    }
});

