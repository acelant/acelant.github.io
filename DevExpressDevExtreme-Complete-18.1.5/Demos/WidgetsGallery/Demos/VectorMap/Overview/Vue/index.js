import Vue from "vue";

import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';

import { DxVectorMap } from "devextreme-vue";

import DxPieChart from "devextreme/viz/pie_chart";

import { countriesGDP } from "./data.js";

const format = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0
}).format;

new Vue({
    el: "#app",
    components: {
        DxVectorMap
    },
    data: function() {
        return {
            layers: {
                name: "areas",
                dataSource: mapsData.world,
                colorGroups: [0, 10000, 50000, 100000, 500000, 1000000, 10000000, 50000000],
                colorGroupingField: "total",
                label: {
                    enabled: true,
                    dataField: "name"
                },
                customize: function (elements) {
                    elements.forEach(function (element) {
                        var countryGDPData = countriesGDP[element.attribute("name")];
                        element.attribute("total", countryGDPData && countryGDPData.total || 0);
                    });
                }        
            },
            legends: [{
                source: { layer: "areas", grouping: "color" },
                customizeText: function (arg) {
                    return `${format(arg.start)} to ${format(arg.end)}`;
                }
            }],
            title: {
                text: "Nominal GDP",
                subtitle: {
                    text: "(in millions of US dollars)"
                }
            },
            exportSettings: {
                enabled: true
            },
            tooltip: {
                enabled: true,
                customizeTooltip: function (arg) {
                    let countryGDPData = countriesGDP[arg.attribute("name")];
                    let total = countryGDPData && countryGDPData.total;
                    let totalMarkupString = total ? `<div id='nominal' >Nominal GDP: $${total}M</div>` : "";
                    let node = `<div #gdp><h4>${arg.attribute("name")}</h4>${
                                    totalMarkupString
                                }<div id='gdp-sectors'></div></div>`;
                    return {
                        html: node
                    };
                }
            },
            bounds: [-180, 85, 180, -60]
        };
    },
    methods: {
        onTooltipShown(e) {
            let name = e.target.attribute("name"),
                gdpData = countriesGDP[name] ? [
                    { name: "industry", value: countriesGDP[name].industry },
                    { name: "services", value: countriesGDP[name].services },
                    { name: "agriculture", value: countriesGDP[name].agriculture }
                ] : null,
                container = document.getElementById("gdp-sectors");
            if (gdpData) {
                new DxPieChart(container, this.getPieChartConfig(gdpData));
            } else {
                container.textContent = "No economic development data";
            }
        },
        getPieChartConfig(chartData) {
            return {
                dataSource: chartData,
                series: [{
                    valueField: "value",
                    argumentField: "name",
                    label: {
                        visible: true,
                        connector: {
                            visible: true,
                            width: 1
                        },
                        customizeText: function(pointInfo) {
                            return `${pointInfo.argument[0].toUpperCase()}${
                                       pointInfo.argument.slice(1)
                                   }: $${pointInfo.value}M`;
                        }
                    }
                }],
                legend: {
                    visible: false
                }
            };
        }
    }
});