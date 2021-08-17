const navItems = document.querySelectorAll(".nav__span");
const navLink = document.querySelectorAll(".nav__item");

// document.addEventListener("DOMContentLoaded", function (event) {
//     console.log("DOM fully loaded and parsed");
// });

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function () {
        for (let j = 0; j < navLink.length; j++) {
            navItems[j].classList.remove("selected");
            //console.log(navItems[j])
        }
        this.classList.add("selected");
    })
};

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
});

const anchors = document.querySelectorAll('.nav__item,.top__down,.news__name,.footer__logo');

for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function (e) {
        e.preventDefault();
        const blockID = this.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

    })
};



let anchorsList = document.getElementsByClassName("anchor");
let anchorsAr = []
for (let i = 0; i < anchorsList.length; i++) {
    anchorsAr.push(anchorsList[i].offsetTop - 100);
};
const nav = document.querySelector(".nav")

let ptojectsHeights = []
let projectList = document.getElementsByClassName("pictures__img");

let galleryHeights = []
let galleryList = document.querySelectorAll(".gallery__img");

let newsHeights = []
let newsList = document.querySelectorAll(".news__img");

let newsInfoHeights = []
let newsInfoList = document.querySelectorAll(".news__content");


document.addEventListener("DOMContentLoaded", function (event) {
    for (let i = 0; i < projectList.length; i++) {
        ptojectsHeights.push(projectList[i].getBoundingClientRect().top);
    };
    for (let i = 0; i < galleryList.length; i++) {
        galleryHeights.push(galleryList[i].getBoundingClientRect().top);
    };
    for (let i = 0; i < newsList.length; i++) {
        newsHeights.push(newsList[i].getBoundingClientRect().top);
    };
    for (let i = 0; i < newsInfoList.length; i++) {
        newsInfoHeights.push(newsInfoList[i].getBoundingClientRect().top);
    };
})

document.onscroll = function () {
    let scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;

    if (scrollTop >= 0 && scrollTop <= 150) {

        let selectedElements = document.getElementsByClassName("selected");
        if (selectedElements.length === 1) {
            selectedElements[0].classList.remove("selected");;
        }
        let project = document.getElementById(0);
        if (project) {
            navItems[0].classList.add("selected");
        }
    } else if (scrollTop >= (anchorsAr[1] - 150) && scrollTop <= anchorsAr[1] + 150) {

        let selectedElements = document.getElementsByClassName("selected");
        if (selectedElements.length === 1) {
            selectedElements[0].classList.remove("selected");;
        }
        let project = document.getElementById(1);
        if (project) {
            navItems[1].classList.add("selected");
        }
    }
    else if (scrollTop >= (anchorsAr[2] - 150) && scrollTop <= anchorsAr[2] + 150) {
        let selectedElements = document.getElementsByClassName("selected");
        if (selectedElements.length === 1) {
            selectedElements[0].classList.remove("selected");;
        }
        let project = document.getElementById(2);
        if (project) {
            navItems[2].classList.add("selected");
        }
    }
    else if (scrollTop >= (anchorsAr[3] - 550) && scrollTop <= anchorsAr[3] + 150) {
        let selectedElements = document.getElementsByClassName("selected");
        if (selectedElements.length === 1) {
            selectedElements[0].classList.remove("selected");;
        }
        let project = document.getElementById(3);
        if (project) {
            navItems[3].classList.add("selected");
        }
    }
    scrollTop = (document.documentElement && document.documentElement.scrollTop + 470) ||
        document.body.scrollTop;
    for (let i = 0; i < ptojectsHeights.length; i++) {
        if (ptojectsHeights[i] <= scrollTop) {
            //console.log(scrollTop)
            projectList[i].classList.add("animate__animated");
            projectList[i].classList.add("animate__heartBeat");
        };
    }
    for (let i = 0; i < galleryHeights.length; i++) {
        if (galleryHeights[i] <= scrollTop) {
            //console.log(scrollTop)
            galleryList[i].classList.add("animate__animated");
            galleryList[i].classList.add("animate__swing");
        }
    }
    for (let i = 0; i < newsHeights.length; i++) {
        if (newsHeights[i] <= scrollTop) {
            //console.log(scrollTop)
            newsList[i].classList.add("animate__animated");
            newsList[i].classList.add("animate__rotateIn");
        }
    }
    for (let i = 0; i < newsInfoHeights.length; i++) {
        if (newsInfoHeights[i] <= scrollTop) {
            //console.log(scrollTop)
            newsInfoList[i].classList.add("animate__animated");
            newsInfoList[i].classList.add("animate__bounceIn");
        }
    }

}


$('.news__container').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
});

const brooklin = { lat: 40.67993655115294, lng: -73.90032150054118 };
const center = { lat: 40.65636585726536, lng: -73.8765019729654 }
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12.7,
        center: center,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    });
    //let marker = {};
    marker = new google.maps.Marker({
        position: brooklin,
        icon: "images/marker.png",
        map: map,
    })
}

const submit = document.getElementById("submit")

submit.addEventListener("click", function () {
    const fullName = document.getElementById("inputname").value
    const email = document.getElementById("inputemail").value
    if (isNaN(fullName) & fullName != "") {
        window.localStorage.setItem("FullName", fullName)
    }
    if (isNaN(email) & email != "") {
        window.localStorage.setItem("email", email)
    }
})

const checkboxSumbit = document.getElementById("agree")

checkboxSumbit.addEventListener("change", function () {
    let check = checkboxSumbit.checked
    //console.log(check)
    if (check) {
        submit.disabled = false
    } else {
        submit.disabled = true
    }
})




//console.log(checkboxSumbit)

    ////console.log(localStorage)

//window.localStorage.setItem("")

