Vue.component("increament-decrement", {
    template: `
    <div class="mb-3">
        <input  v-model.lazy.number="value" @focusout="clean" type="text">
        <p v-text="showValue"></p>
        <button class="btn btn-dark" @click.number="increment">Increment</button>
        <button class="btn btn-dark" @click.number="decrement">Decrement</button>
    </div>
    `,
    props: {
        totalValue: Number,
    },
    data() {
        return {
            value: null,
            showValue: null,
        }
    },
    methods: {
        clean() {
            this.showValue = this.value;
            this.value = null;
            this.$emit("add-to-values", this.showValue)

        },
        increment() {
            this.showValue += 1;
            this.$emit("add-to-values", this.showValue)
            //app.values[0] = this.showValue
        },
        decrement() {
            this.showValue -= 1;
            this.$emit("add-to-values", this.showValue)
            //app.values[1] = this.showValue
        },
        addToValue() {
            this.$emit("add-to-values", this.showValue)
        }
    },
})

const app = new Vue({
    el: "#app",
    data: {
        total: null,
        values: [],
        total: 0,
        componentCount: null,
        components: [],
    },
    methods: {
        addToValues(id) {
            this.values.push(id)
        },
        getTotal() {
            for (let i = 0; i < this.$children.length; i++) {
                this.total = this.$children.reduce((acc, element) => acc + element.showValue, 0)
            }
        }
        , makeComponentsAr() {
            for (let i = 0; i < this.componentCount; i++) {
                this.components.push(i)
            }
        }
    },

})