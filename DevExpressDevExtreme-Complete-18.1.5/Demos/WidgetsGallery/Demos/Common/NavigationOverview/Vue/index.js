import Vue from "vue";

import { DxTabPanel, DxTreeView } from "devextreme-vue";
import { continents } from "./data.js";

new Vue({
    el: "#app",
    components: {
        DxTabPanel,
        DxTreeView
    },
    data: function() {
        return {
            continents,
            tabPanelIndex: 0,
            countryData: continents[0].items[0],
            citiesData: continents[0].items[0].cities
        };
    },
    methods: {
        changeSelection(e) {
            var countryData = e.itemData;
            if(countryData.cities) {
                this.countryData = e.itemData;
                this.citiesData = countryData.cities;
                this.tabPanelIndex = 0;
            }
        }      
    }
});