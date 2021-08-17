"use strict"

const app = new Vue({
    el: "#app",
    data: {
        songs: [
            {
                name: "rammstein",
                tooltip: "deutschland",
                link: "https://www.youtube.com/watch?v=NeQM1c-XCDc&ab_channel=RammsteinOfficial"
            }, {
                name: "BUTCHER BABIES",
                tooltip: "Monsters Ball",
                link: "https://www.youtube.com/watch?v=HWLr2WVhIp8&ab_channel=CenturyMediaRecords"
            }, {
                name: "Sabaton",
                tooltip: "Bismark",
                link: "https://www.youtube.com/watch?v=oVWEb-At8yc&ab_channel=Sabaton"
            }, {
                name: "BABYMETAL",
                tooltip: "PA PA YA!!",
                link: "https://www.youtube.com/watch?v=oO7Y8NsnkRg&ab_channel=BABYMETAL"
            },
        ],
        styles: {
            color: "#e295bf",
            "text-decoration": "underline",
            "font-family": "Arial",
            "text-transform": "uppercase",
        },
    }
})

// const tooltip = new Vue({
//     el: "vue-custom-tooltip",
//     data: {

//     }
// })
