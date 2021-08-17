console.log("JS is working!!")
const img = document.querySelectorAll("img")

for (let index = 0; index < img.length; index++) {
    img[index].addEventListener("click", function () {
        console.log(`Image ${index}`)
    })

}