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
		showRowGrandTotals: true,
		showColumnGrandTotals: true,
		showColumnTotals: true,
        texts: {
            collapseAll: "Recolher todos",
            dataNotAvailable: "N/A",
            expandAll: "Expandir todos",
            exportToExcel: "Exportar para arquivo do Excel",
            grandTotal: "Total Geral",
            noData: "Sem dados",
            removeAllSorting: "Remover toda a classificação",
            showFieldChooser: "Mostrar lista de campos",
            sortColumnBySummary: "Ordenar {0} por esta coluna",
            sortRowBySummary: "Ordenar {0} por esta linha",
            total: "{0} Total"
            },
        fieldChooser: {
            enabled: true,
            applyChangesMode: "instantly",
            allowSearch: false,
            title: "Lista de Campos",
            texts: {
                allFields: "Campos",
                columnFields: "Colunas",
                dataFields: "Valores",
                rowFields: "Linhas",
                filterFields: "Filtros"
            }
        },
       fieldPanel: {
            showColumnFields: true,
            showDataFields: true,
            showFilterFields: false,
            showRowFields: true,
            allowFieldDragging: true,
            visible: true
	    },
        /*stateStoring: {
            enabled: true,
            type: "localStorage",
            storageKey: "demonstrativo-fechamentos"
        },*/
        "export": {
            enabled: true,
            fileName: "Demonstrativo Fechamentos"
        },
        onContextMenuPreparing: function (e) {
            var dataSource = e.component.getDataSource();
            if (e.field === dataSource.field(7)) {
                $.each(summaryDisplayModes, function (_, summaryDisplayMode) {
                    var summaryDisplayModeValue = summaryDisplayMode.value;
    
                    e.items.push({
                        text: summaryDisplayMode.text,
                        selected: e.field.summaryDisplayMode === summaryDisplayModeValue,
                        onItemClick: function (args) {
                            var format, precision; 
                            if (summaryDisplayModeValue === "absoluteVariation"
                                || summaryDisplayModeValue === "percentVariation") {
                                caption = "Variação";
                            } else {
                                caption = "%";
                            }
                            if (summaryDisplayModeValue === "none"
                                || summaryDisplayModeValue === "absoluteVariation") {
                                format = "fixedPoint";
                            }
                            if (summaryDisplayModeValue === "none"
                                || summaryDisplayModeValue === "absoluteVariation") {
                                precision = 2;
                            } else {
								precision = 1;
							}
                            dataSource.field(7, {
                                summaryDisplayMode: summaryDisplayModeValue,
                                format: format,
                                caption: caption,
                                precision: precision
                            });
    
                            dataSource.load();
                        }
                    });
                });
            }
        },
        onCellPrepared: function(e) {
				
				e.cellElement.css("font-size", "14px");
                if(e.area == "data"){
                    if(e.cell.value < 0 ){
                        e.cellElement.css("color", "red");
                    }
                }
		},
        dataSource: {
            fields: [{
                caption: "Opção",
                width: 120,
                dataField: "nivel1",
                area: "row"
            }, {
                caption: "Categoria",
                dataField: "nivel2",
                width: 120,
                area: "row"
			}, {
                caption: "PDV",
                dataField: "nivel3",
                width: 120,
                area: "row"
			}, {
                caption: "Forma Pgto",
                dataField: "nivel4",
                width: 120,
                area: "row",
				visible: true
            }, {
                caption: "Ano",
				dataField: "ano",
				area: "column",
                displayFolder: 'Data'
            }, {
                caption: "Mês",
                dataField: "mes",
                area: "column",
                displayFolder: 'Data'
			}, {
                caption: "Valor",
                dataField: "valor",
                dataType: "number",
                summaryType: "sum",
                format: "fixedPoint",
				precision: 2,
                area: "data"
            }, {
                caption: "%",
                dataField: "valor",
                dataType: "number",
                summaryType: "sum",
                summaryDisplayMode: "percentOfRowTotal",
                area: "data",
				precision: 1
            }],
            store: relatorio
        }
		
    });

    var summaryDisplayModes = [
        //{ text: "Nenhum", value: "none" },
        { text: "Variação Absoluta", value: "absoluteVariation" },
        { text: "Variação Percentual", value: "percentVariation" },
        { text: "Porcentagem do Total da Coluna", value: "percentOfColumnTotal" },
        { text: "Porcentagem do Total da Linha", value: "percentOfRowTotal" },
        { text: "Porcentagem do Total Geral da Coluna", value: "percentOfColumnGrandTotal" },
        { text: "Porcentagem do Total Geral da Linha", value: "percentOfRowGrandTotal" },
        { text: "Porcentagem do Total Geral", value: "percentOfGrandTotal" }
    ];

}

);
