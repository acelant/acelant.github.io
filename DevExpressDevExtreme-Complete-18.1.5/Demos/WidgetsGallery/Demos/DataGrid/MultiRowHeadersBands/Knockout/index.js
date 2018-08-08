window.onload = function() {
    var viewModel = {
        gridOptions: {
            dataSource: countries,
            columnAutoWidth: true,
            allowColumnReordering: true,
            showBorders: true,
            columns: ["Country", {
                headerCellTemplate: function(container) {
                    container.append($("<div>Area, km<sup>2</sup></div>"));
                },
                dataField: "Area"
            }, {
                caption: "Population",
                columns: [{
                    caption: "Total",
                    dataField: "Population_Total",
                    format: "fixedPoint"
                }, {
                    caption: "Urban",
                    dataField: "Population_Urban",
                    format: "percent"
                }]
            }, {
                caption: "Nominal GDP",
                columns: [{
                    caption: "Total, mln $",
                    dataField: "GDP_Total",
                    format: "fixedPoint",
                    sortOrder: "desc"
                }, {
                    caption: "By Sector",
                    columns: [{
                        caption: "Agriculture",
                        width: 100,
                        dataField: "GDP_Agriculture",
                        format: {
    						type: "percent",
    						precision: 1
    					}
                    }, {
                        caption: "Industry",
                        dataField: "GDP_Industry",
                        format: {
    						type: "percent",
    						precision: 1
    					}
                    }, {
                        caption: "Services",
                        width: 90,
                        dataField: "GDP_Services",
                        format: {
    						type: "percent",
    						precision: 1
    					}
                    }]
                }]
            }]
        }
    };
    
    ko.applyBindings(viewModel, document.getElementById("grid"));
};