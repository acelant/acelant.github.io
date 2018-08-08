var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    var arrayStore;
    $scope.dataGridOptions = {
        twoWayBindingEnabled: false,
        showBorders: true,
        bindingOptions: {           
            dataSource: {
                deep: false,
                dataPath: 'dataSource'
            }
        },
        onInitialized: function(e) {
            e.component.beginCustomLoading();
        },
        columns: [{
            dataField: "LastUpdate",
            dataType: "date",
            width: 115,
            format: "longTime"
        },  {
            dataField: "Symbol"
        }, {
            dataField: "Price",
            dataType: "number",
            format: "#0.####",
            cellTemplate: "priceCellTemplate"
        }, {
            dataField: "Change",
            dataType: "number",
            width: 140,
            format: "#0.####",
            cellTemplate: "changeCellTemplate"
        }, {
            dataField: "DayOpen",
            dataType: "number",
            format: "#0.####"
        }, {
            dataField: "DayMin",
            dataType: "number",
            format: "#0.####"
        }, {
            dataField: "DayMax",
            dataType: "number",
            format: "#0.####"
        }],
        loadPanel: {
            enabled: false
        }
    };

    $.connection.hub.url = "https://js.devexpress.com/Demos/Mvc/signalr";
    var hub = $.connection.liveUpdateSignalRHub;

    hub.client.updateStockPrice = function (data) {
        if (arrayStore) {
            arrayStore.update(data.Symbol, data);
            $scope.dataSource.reload();
        }
    };

    $.connection.hub.start({ waitForPageLoad: false }).done(function () {
        hub.server.getAllStocks().done(function (data) {
            arrayStore = new DevExpress.data.ArrayStore({
                key: "Symbol",
                data: data
            });
            $scope.dataSource = new DevExpress.data.DataSource({
                store: arrayStore
            });
            $scope.$apply();
        });
    });
});
