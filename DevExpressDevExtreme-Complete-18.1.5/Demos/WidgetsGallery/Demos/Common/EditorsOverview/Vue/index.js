import Vue from "vue";

import { DxTextBox, DxColorBox, DxNumberBox, DxSwitch, DxSelectBox } from "devextreme-vue";

new Vue({
    el: "#app",
    components: {
        DxTextBox,
        DxColorBox,
        DxNumberBox,
        DxSwitch,
        DxSelectBox
    },
    data: function() {
        return {
            color: "#f05b41",
            text: "UI Superhero",
            width: 370,
            height: 260,
            transform: "scaleX(1)",
            border: false,
            transformations: [
                {
                    key: "Flip",
                    items: [ 
                        { name: "0 degrees", value: "scaleX(1)" }, 
                        { name: "180 degrees", value: "scaleX(-1)" }
                    ]
                },
                {
                    key: "Rotate",
                    items: [
                        { name: "0 degrees", value: "rotate(0)" },
                        { name: "15 degrees", value: "rotate(15deg)" },
                        { name: "30 degrees", value: "rotate(30deg)" },
                        { name: "-15 degrees", value: "rotate(-15deg)" },
                        { name: "-30 degrees", value: "rotate(-30deg)" }
                    ]
                }
            ]
        };
    },
    watch: {
        height(val) {
            this.width = val * 37 / 26;
        },
        width(val) {
            this.height = val * 26 / 37;
        }
    }
});