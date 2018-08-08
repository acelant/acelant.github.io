import Vue from "vue";

import { DxCircularGauge, DxLinearGauge, DxSlider} from "devextreme-vue";

new Vue({
    el: "#app",
    components: {
        DxCircularGauge,
        DxLinearGauge,
        DxSlider
    },
    data: function() {
        return {
            speedValue: 40,
            indicatorSize: {
                width: 90,
                height:90
            },
            indicatorColor: {
                color: "#f05b41"
            },
            scale: {
                startValue: 0,
                endValue: 100,
                tickInterval: 10
            },
            invertedScale: {
                startValue: 100,
                endValue: 0,
                tickInterval: 10
            },
            coolantGeometry: {
                startAngle: 180,
                endAngle: 90
            },
            rpmGeometry: {
                startAngle: -90,
                endAngle: -180
            },
            psiGeometry: {
                startAngle: 90,
                endAngle: 0
            },
            instantFuelGeometry: {
                startAngle: 0,
                endAngle: -90
            },
            speedGeometry: {
                startAngle: 225,
                endAngle: 315
            },
            speedScale: {
                startValue: 20,
                endValue: 200,
                tickInterval: 20,
                minorTickInterval: 10
            },
            speedValueIndicator: {
                type: "twoColorNeedle",
                color: "transparent",
                secondFraction: 0.24,
                secondColor: "#f05b41",
            },
            speedSize: {
                width: 260 
            },
            fuelScale: {
                startValue: 0,
                endValue: 50,
                tickInterval: 25,
                minorTickInterval: 12.5,
                minorTick: {
                    visible: true
                },
                label: {
                    visible: false
                }
            },
            fuelValueIndicator: {
                color: "#f05b41",
                size: 8,
                offset: 7 
            },
            fuelSize: {
                width: 90,
                height: 20
            }
        };
    }
});