window.onload = function() {
    var filterBuilderInstance,
        listFilter = ko.observable();

    var viewModel = {
        filterBuilderOptions: {
            fields: fields,
            value: filter,
            customOperations: [{
                name: "anyof",
                caption: "Is any of",
                icon: "check",
                editorTemplate: "tagBoxTemplate",
                calculateFilterExpression: function(filterValue, field) {
                    if(filterValue && filterValue.length > 0) {
                        var result = [],
                            lastIndex = filterValue.length - 1;
                        filterValue.forEach(function(value, index) {
                            result.push([field.dataField, "=", value]);
                            if(index !== lastIndex) {
                                result.push("or");
                            }
                        });
                        return result;
                    }
                }
            }],
            onInitialized: function(e) {
                filterBuilderInstance = e.component;
                listFilter(filterBuilderInstance.getFilterExpression());
            }
        },

        buttonOptions: {
            text: "Apply Filter",
            type: "default",
            onClick: function() {
                listFilter(filterBuilderInstance.getFilterExpression());
            }
        },

        listOptions: {
            dataSource: {
                store: products,
                filter: listFilter
            },
            height: "100%"
        }
    };

    ko.applyBindings(viewModel, document.getElementById("demo"));
};