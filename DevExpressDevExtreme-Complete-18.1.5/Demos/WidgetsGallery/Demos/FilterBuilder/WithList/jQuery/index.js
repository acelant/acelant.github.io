$(function() {
    var filterBuilderInstance = $("#filterBuilder").dxFilterBuilder({
        fields: fields,
        value: filter,
        customOperations: [{
            name: "anyof",
            caption: "Is any of",
            icon: "check",
            editorTemplate: function(conditionInfo) {
                return $("<div>").dxTagBox({
                    value: conditionInfo.value,
                    items: categories,
                    onValueChanged: function(e) {
                        conditionInfo.setValue(e.value);
                    },
                    width: "auto"
                });
            },
            calculateFilterExpression: function(filterValue, field) {
                if(filterValue && filterValue.length > 0) {
                    var result = [],
                        lastIndex = filterValue.length - 1;
                    filterValue.forEach(function(value, index) {
                        result.push([field.dataField, "=", value]);
                        index !== lastIndex && result.push("or");                        
                    });
                    return result;
                }
            }
        }]
    }).dxFilterBuilder("instance");

    $("#listWidget").dxList({
        dataSource: new DevExpress.data.DataSource({
            store: products,
            filter: filterBuilderInstance.getFilterExpression()
        }),
        height: "100%",
        itemTemplate: function(data, index) {
            var result = $("<div>").addClass("product");
            $("<img>").attr("src", data.ImageSrc).appendTo(result);
            $("<div>").text(data.Name).appendTo(result);
            $("<div>").addClass("price")
                .html(Globalize.formatCurrency(data.Price, "USD", { maximumFractionDigits: 0 })).appendTo(result);
            return result;
        }
    });

    $("#apply").dxButton({
        text: "Apply Filter",
        type: "default",
        onClick: function() {
            var filter = filterBuilderInstance.getFilterExpression(),
                dataSource = $("#listWidget").dxList("instance").getDataSource();
            dataSource.filter(filter);
            dataSource.load();
        },
    });
});