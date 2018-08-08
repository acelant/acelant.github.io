$(function(){
	
    $("#relatorio").dxPivotGrid({
        allowSortingBySummary: true,
        allowSorting: true,
        allowFiltering: true,
        allowExpandAll: true,
        //height: 440,
        showBorders: true,
		showTotalsPrior: "rows",
		rowHeaderLayout: "tree",
		showRowGrandTotals: true,
		showColumnTotals: false,
        fieldChooser: {
            enabled: false
        },
       /*fieldPanel: {
            showColumnFields: false,
            showDataFields: false,
            showFilterFields: false,
            showRowFields: true,
            allowFieldDragging: true,
            visible: true
	    },*/
        "export": {
            enabled: true,
            fileName: "relatorio"
        },
        dataSource: {
            fields: [{
                caption: "Nivel 1",
                width: 120,
                dataField: "nivel1",
                area: "row" 
            }, {
                caption: "Nivel 2",
                dataField: "nivel2",
                width: 120,
                area: "row"
			}, {
                caption: "Nivel 3",
                dataField: "nivel3",
                width: 120,
                area: "row"
            }, {
                caption: "Ano",
				dataField: "ano",
				area: "column"
            }, {
                caption: "Mês",
				dataField: "mes",
				area: "column"
			}, {
                caption: "Valor",
                dataField: "valor",
                dataType: "number",
                summaryType: "sum",
                format: "fixedPoint",
				precision: 2,
                area: "data"
            }],
            store: relatorio
        }
		
    });
}
 
);
