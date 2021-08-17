const application = new Vue({
    el: "#app",
    data: {
        colors: ["green", "black", "red", "white", "grey"],
        textColor: "",
        coloredText: "",
        colorValue: "",
        coloredTextIsShown: false
    },
    methods: {
        chngColor: function () {
            let ar = this.colors;
            this.coloredText = this.textColor
            for (let i = 0; i < ar.length; i++) {
                if (ar[i] == this.textColor) {
                    this.colorValue = ar[i]
                }
                this.coloredTextIsShown = true
            } if (!this.colorValue) {
                this.coloredText = "You entered wrong color"
            }
        }
    }
})

