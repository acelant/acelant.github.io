import Vue from "vue";

import {
    DxChart, 
    DxAdaptiveLayout,
    DxCommonSeriesSettings,
    DxSize,
    DxTooltip,
} from 'devextreme-react/ui/chart';

import {
    DxPivotGrid,
    DxFieldChooser
} from 'devextreme-react/ui/pivot-grid';

import { sales } from "./data.js";

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
});

new Vue({
    el: "#app",
    components: {
        DxChart,
        DxAdaptiveLayout,
        DxCommonSeriesSettings,
        DxSize,
        DxTooltip,
        DxPivotGrid,
        DxFieldChooser
    },
    data() {
        return {
            dataSource: {
                fields: [{
                    caption: "Region",
                    width: 120,
                    dataField: "region",
                    area: "row",
                    sortBySummaryField: "Total"
                }, {
                    caption: "City",
                    dataField: "city",
                    width: 150,
                    area: "row"
                }, {
                    dataField: "date",
                    dataType: "date",
                    area: "column"
                }, {
                    groupName: "date",
                    groupInterval: "month",
                    visible: false
                }, {
                    caption: "Total",
                    dataField: "amount",
                    dataType: "number",
                    summaryType: "sum",
                    format: "currency",
                    area: "data"
                }],
                store: sales
            },
            customizeTooltip: function (args) {
                const valueText = currencyFormatter.format(args.originalValue);
                return {
                    html: `${args.seriesName} | Total<div class='currency'>${valueText}</div>`
                };
            }
        };
    },
    mounted() {
        const pivotGrid = this.$refs.grid.instance;
        const chart = this.$refs.chart.instance;
        pivotGrid.bindChart(chart, {
            dataFieldsDisplayMode: "splitPanes",
            alternateDataFields: false
        });
        const dataSource = pivotGrid.getDataSource();
        setTimeout(function() {
            dataSource.expandHeaderItem("row", ["North America"]);
            dataSource.expandHeaderItem("column", [2013]);
        }, 0);
    }
});