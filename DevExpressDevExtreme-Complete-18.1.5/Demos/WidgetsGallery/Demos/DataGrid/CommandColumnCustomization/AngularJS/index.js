var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    function moveEditColumnToLeft(dataGrid) {
        dataGrid.columnOption("command:edit", { 
            visibleIndex: -1
        });
    }

    $scope.dataGridOptions = {
        dataSource: employees,
        showBorders: true,
        paging: {
            enabled: false
        },
        editing: {
            mode: "row",
            allowUpdating: true,
            allowDeleting: true,
            useIcons: true
        }, 
        columns: [
            {
                dataField: "Prefix",
                caption: "Title"
            },
            "FirstName",
            "LastName",
            {
                dataField: "Position",
                width: 130
            }, {
                dataField: "StateID",
                caption: "State",
                width: 125,
                lookup: {
                    dataSource: states,
                    displayExpr: "Name",
                    valueExpr: "ID"
                }
            }, {
                dataField: "BirthDate",
                dataType: "date",
                width: 125
            }
        ],
        onContentReady: function(e) {
            moveEditColumnToLeft(e.component);
        }
    };  
});