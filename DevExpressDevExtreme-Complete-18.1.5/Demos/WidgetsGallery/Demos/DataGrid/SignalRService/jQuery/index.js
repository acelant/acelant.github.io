$(function(){
    $("#gridContainer").dxDataGrid({
        showBorders: true,
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
            cellTemplate: function (container, options) {
                container.addClass((options.data.Change > 0) ? "inc" : "dec");
                container.html(options.text);
            }
        }, {
            dataField: "Change",
            dataType: "number",
            width: 140,
            format: "#0.####",
            cellTemplate: function (container, options) {
                var fieldData = options.data;
                container.addClass(fieldData.Change > 0 ? "inc" : "dec");

                $("<span>")
                    .addClass("current-value")
                    .text(options.text)
                    .appendTo(container);
                container.append(" ");

                $("<span>")
                    .addClass("arrow")
                    .appendTo(container);
                container.append(" ");

                $("<span>")
                    .addClass("diff")
                    .text(fieldData.PercentChange.toFixed(2) + "%")
                    .appendTo(container);
            }
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
    });

    $.connection.hub.url = "https://js.devexpress.com/Demos/Mvc/signalr";
    var hub = $.connection.liveUpdateSignalRHub;
    var arrayStore, dataSource;

    hub.client.updateStockPrice = function (data) {
        if (arrayStore) {
            arrayStore.update(data.Symbol, data);
            dataSource.reload();
        }
    };

    $.connection.hub.start({ waitForPageLoad: false }).done(function () {
        hub.server.getAllStocks().done(function (data) {
            arrayStore = new DevExpress.data.ArrayStore({
                key: "Symbol",
                data: data
            });
            dataSource = new DevExpress.data.DataSource({
                store: arrayStore
            });
            $("#gridContainer").dxDataGrid({ 
                dataSource: dataSource
            });
        });
    });
});
