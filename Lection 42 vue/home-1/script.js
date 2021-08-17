const sample = new Vue({
    el: "#app",
    data: {
        search: "",
        typedSearch: "",
        isTyped: false,
        styles: {
            background: "red"
        }
    },
    methods: {
        saveSearch() {
            this.typedSearch = this.search;
            this.search = "";
            this.styles.background = "red"
        },
        changeColor(count) {
            if (count > 0) {
                this.styles.background = "green"
            } else {
                this.styles.background = "red"
            }
        }
    },
})