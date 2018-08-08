$(function(){
    $("#gridContainer").dxDataGrid({
        dataSource: employees,
        keyExpr: "ID",
        showBorders: true,
        editing: {
            mode: "popup",
            allowUpdating: true,
            popup: {
                title: "Employee Info",
                showTitle: true,
                width: 700,
                height: 345,
                position: {
                    my: "top",
                    at: "top",
                    of: window
                }
            }
        },
        columns: [
            {
                dataField: "Prefix",
                caption: "Title",
                width: 70
            },
            "FirstName",
            "LastName", 
            {
                dataField: "BirthDate",
                dataType: "date"
            },
            {
                dataField: "Position",
                width: 170
            }, 
            {
                dataField: "HireDate",
                dataType: "date"
            },
            {
                dataField: "StateID",
                caption: "State",
                width: 125,
                lookup: {
                    dataSource: states,
                    displayExpr: "Name",
                    valueExpr: "ID"
                }
            }, 
            { 
                dataField: "Address", 
                visible: false
            }
        ]
    });
});