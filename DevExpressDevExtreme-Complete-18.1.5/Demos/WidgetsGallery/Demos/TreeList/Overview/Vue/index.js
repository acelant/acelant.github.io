import Vue from "vue";

import {
    DxTreeList,
    DxColumn,
    DxColumnChooser,
    DxHeaderFilter,
    DxSearchPanel,
    DxSelection
} from 'devextreme-vue/ui/tree-list';

import { tasks, employees, priorities } from "./data.js";

new Vue({
    el: "#app",
    components: {
        DxTreeList,
        DxColumn,
        DxColumnChooser,
        DxHeaderFilter,
        DxSearchPanel,
        DxSelection
    },
    data() {
        return {
            expandedRowKeys: [1, 2],
            selectedRowKeys: [1, 29, 42],
            employeeLookup: {
                dataSource: employees,
                valueExpr: "ID",
                displayExpr: "Name"
            },
            statusLookup: {
                dataSource: [
                    "Not Started",
                    "Need Assistance",
                    "In Progress",
                    "Deferred",
                    "Completed"
                ]
            },
            priorityLookup: {
                dataSource: priorities,
                valueExpr: "id",
                displayExpr: "value"
            },
            customizeTaskCompletionText: function (cellInfo) {
                return `${cellInfo.valueText}%`;
            }
        };
    },
    computed: {
        dataSource() {
            return tasks.map(function(task) {
                employees.forEach(function(employee) {
                    if (task.Task_Assigned_Employee_ID === employee.ID) {
                        task.Task_Assigned_Employee = employee;
                    }
                });
                return task;
            });
        }
    }
});