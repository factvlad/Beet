"use strict"

const matrix = new Vue({
    el: "#matrix",
    data: {
        isShown: false,
        showModal: false,
        button: "",
        isDate: false,
    },
    methods: {
        refresh() {
            matrix.isShown = false;
        },
        showModalWindow() {
            matrix.showModal = true;
        }
    }
})

Vue.component("modal", {
    template: `
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-body">
            <slot name="body">
              <p v-html="modalContent"> </p>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
    `,
    computed: {
        modalContent() {
            if (matrix.isDate) {
                const date = new Date();
                matrix.isDate = true;
                return `You leaved matrix at </br> <b>${date.toLocaleString()}</b>`;
            } else {
                matrix.isDate = false;
                return `You decided to stay in matrix, you fucking coward.</br>You used <b>${matrix.button}</b> mouse button for it`
            }

        }
    }
})

const refresh = document.querySelector(".refresh")
window.addEventListener("click", function load(e) {
    if (e.target != refresh && !matrix.isShown) {
        matrix.isShown = true
        console.log(1)
    }
})
