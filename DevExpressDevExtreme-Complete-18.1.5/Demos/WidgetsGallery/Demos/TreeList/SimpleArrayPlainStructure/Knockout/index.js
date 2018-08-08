window.onload = function() {
    var viewModel = {
        treeListOptions: {
            dataSource: employees,
            keyExpr: "ID",
            parentIdExpr: "Head_ID",
            columns: [{
                dataField: "Title",
                caption: "Position"
            }, "Full_Name", "City", "State", "Mobile_Phone", {
                dataField: "Hire_Date",
                dataType: "date"
            }],
            expandedRowKeys: [1],
            showRowLines: true,
            showBorders: true,
            columnAutoWidth: true
        }
    };
    
    ko.applyBindings(viewModel, document.getElementById("treelist"));
};