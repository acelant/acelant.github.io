$(function(){
	
    $("#relatorio").dxPivotGrid({
        allowSortingBySummary: true,
        allowSorting: true,
        allowFiltering: true,
        allowExpandAll: true,
        //height: 500,
        showBorders: true,
		showTotalsPrior: "rows",
		rowHeaderLayout: "tree",
		showRowGrandTotals: false,
		showColumnGrandTotals: true,
		showColumnTotals: false,
        texts: {
            collapseAll: "Recolher todos",
            dataNotAvailable: "N/A",
            expandAll: "Expandir todos",
            exportToExcel: "Exportar para arquivo do Excel",
            grandTotal: "Total Geral",
            noData: "Sem dados",
            removeAllSorting: "Remover toda a classificação",
            showFieldChooser: "Mostrar seletor de campo",
            sortColumnBySummary: "Ordenar {0} por esta coluna",
            sortRowBySummary: "Ordenar {0} por esta linha",
            total: "{0} Total"
            },
        fieldChooser: {
            enabled: false
        },
       fieldPanel: {
            showColumnFields: false,
            showDataFields: false,
            showFilterFields: false,
            showRowFields: true,
            allowFieldDragging: true,
            visible: true
	    },
        "export": {
            enabled: true,
            fileName: "Demonstrativo Resultados Exercicio"
        },
        onCellPrepared: function(e) {
                
                e.cellElement.css("font-size", "14px");
                /*var cek_kolom = e.cell.text;
                if (e.area == 'row' ){
                    if((cek_kolom=='03 - Debitos')){
                        e.cellElement.css("background-color", "#99a8a1");
                        e.cellElement.css("color", "red");
                    }*/
                if(e.area == "data"){
                    if(e.cell.value < 0 ){
                        e.cellElement.css("color", "red");

                    }
                }
        },
        dataSource: {
            fields: [{
                caption: "Nivel 1",
                width: 60,
                dataField: "nivel1",
                area: "row" 
            }, {
                caption: "Nivel 2",
                dataField: "nivel2",
                width: 60,
                area: "row"
			}, {
                caption: "Nivel 3",
                dataField: "nivel3",
                width: 60,
                area: "row"
			}, {
                caption: "Nivel 4",
                dataField: "nivel4",
                width: 60,
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
