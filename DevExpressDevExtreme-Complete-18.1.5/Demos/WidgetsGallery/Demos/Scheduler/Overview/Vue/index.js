import Vue from "vue";

import { DxScheduler, DxResource } from "devextreme-vue/ui/scheduler";

import { employees, data } from "./data.js";

new Vue({
    el: "#app",
    components: {
        DxScheduler,
        DxResource
    },
    data() {
        return {
            groups: ['employeeID'],
            views: ['month'],
            currentDate: new Date(2016, 7, 2, 11, 30),
            employees,
            dataSource: data
        };
    },
    methods: {
        markWeekEnd(cellData) {
            function isWeekEnd(date) {
                const day = date.getDay();
                return day === 0 || day === 6;
            }
            const classObject = {};
            classObject[`employee-${cellData.groups.employeeID}`] = true;
            classObject[`employee-weekend-${cellData.groups.employeeID}`] = isWeekEnd(cellData.startDate);
            return classObject;
        },

        markTraining(cellData) {
            const classObject = {
                "day-cell": true
            };

            classObject[this.getCurrentTraining(cellData.startDate.getDate(), cellData.groups.employeeID)] = true;
            return classObject;
        },

        getCurrentTraining(date, employeeID) {
            var result = (date + employeeID) % 3,
                currentTraining = `training-background-${result}`;

            return currentTraining;
        }
    }
});