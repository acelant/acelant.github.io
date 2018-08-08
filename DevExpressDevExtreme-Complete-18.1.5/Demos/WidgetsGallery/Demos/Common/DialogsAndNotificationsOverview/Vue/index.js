import Vue from "vue";

import { DxButton, DxPopup, DxPopover } from "devextreme-vue";

import notify from 'devextreme/ui/notify';

import { housesSource } from "./data.js";

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

const 
    ADD_TO_FAVORITES = "Add to Favorites",
    REMOVE_FROM_FAVORITES = "Remove from Favorites";

new Vue({
    el: "#app",
    components: {
        DxButton, DxPopup, DxPopover
    },
    filters: {
        currency(val) {
          return currencyFormatter.format(val);
        }
    },
    data: function() {
        return {
            houses: housesSource,
            currentHouse: housesSource[0],
            popupVisible: false,
            position: {
                offset: '0, 2',
                at: 'bottom',
                my: 'top',
                collision: 'fit flip'
            }
        };
    },
    computed: {
        favoriteText() {
            return this.currentHouse.Favorite ? REMOVE_FROM_FAVORITES : ADD_TO_FAVORITES;
        }
    },
    methods: {
        showHouse(house) {
          this.currentHouse = house;
          this.popupVisible = true;
        },
        changeFavoriteState() {
          let favoriteState = !this.currentHouse.Favorite;
          let message = `This item has been ${
                   favoriteState ? "added to" : "removed from"
                   } the Favorites list!`;
          this.currentHouse.Favorite = favoriteState;
          notify({
                  message: message,
                  width: 450
              }, 
              favoriteState ? "success" : "error",  2000
          );   
        }
    }
});