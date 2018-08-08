import Vue from "vue";

import { DxTileView, DxList } from "devextreme-vue";
import ArrayStore from "devextreme/data/array_store";
import { data } from "./data.js";

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

new Vue({
    el: "#app",
    components: {
        DxTileView, DxList
    },
    filters: {
        currency(data) {
          return currencyFormatter.format(data);
        }
    },
    data: function() {
        return {
            currentHotel: data[0],
            dataSource: {
                store: new ArrayStore({
                    data: data,
                    key: "Id"
                }),
                group: "City",
                searchExpr: ["Hotel_Name", "City", "Address"]
            }
        };
    },
    methods: {
        listSelectionChanged(e) {
            this.currentHotel = e.addedItems[0];
        }
    }
});