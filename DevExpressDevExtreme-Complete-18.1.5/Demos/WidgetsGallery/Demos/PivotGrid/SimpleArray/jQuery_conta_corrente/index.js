$(function(){
	
    $("#relatorio").dxPivotGrid({
        allowSortingBySummary: true,
        allowSorting: true,
        allowFiltering: true,
        allowExpandAll: true,
        height: 500,
        showBorders: true,
		showTotalsPrior: "rows",
		rowHeaderLayout: "tree",
		showRowGrandTotals: false,
		showColumnGrandTotals: false,
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
		onCellPrepared: function(e) {
				
				e.cellElement.css("font-size", "14px");
				var cek_kolom = e.cell.text;
				/*if (e.area == 'row' ){
					if(cek_kolom.indexOf(negativo) != -1){
						e.cellElement.css("background-color", "red");
						e.cellElement.css("color", "white");
					}
				}else */
				if(e.area == "data"){
                    if(e.cell.value < 0 ){
                        e.cellElement.css("color", "red");

                    }
				}
		},
		calculateCustomSummary: function (options) {
                            console.log(options);
							if (options.summaryProcess == 'start') {
								options.totalValue = {sum:0};
							}
							if (options.summaryProcess == 'calculate') {
								options.totalValue.sum += options.value.target;	
							}
							if (options.summaryProcess == 'finalize') {
								options.totalValue = options.totalValue.sum;
							}
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
			/*}, {
                caption: "Nivel 3",
                dataField: "nivel3",
                width: 120,
                area: "row"*/
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
