import Vue from "vue";

import {
    DxDataGrid,
    DxColumn,
    DxGrouping,
    DxGroupPanel,
    DxPager,
    DxPaging,
    DxSearchPanel,
    DxSelection
} from 'devextreme-vue/ui/data-grid';

import {
    DxBullet,
    DxFont,
    DxMargin,
    DxSize,
    DxTooltip
} from 'devextreme-vue/ui/bullet';

import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';

var collapsed = false;

new Vue({
    el: "#app",
    components: {
        DxDataGrid,
        DxColumn,
        DxGrouping,
        DxGroupPanel,
        DxPager,
        DxPaging,
        DxSearchPanel,
        DxSelection,
        DxBullet,
        DxFont,
        DxMargin,
        DxSize,
        DxTooltip
    },
    data() {
        return {
            dataSource: new DataSource({
                store: {
                    type: "odata",
                    url: "https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes",
                    beforeSend: function(request) {
                        request.params.startDate = "2018-05-10";
                        request.params.endDate = "2018-05-15";
                    }
                }
            }),
            onContentReady: function(e) {
                if (!collapsed) {
                    e.component.expandRow(["EnviroCare"]);
                    collapsed = true;
                }
            },
            customizeTooltip: function (data) {
                return {
                    text: `${parseInt(data.value)}%`
                };
            }
        };
    }
});