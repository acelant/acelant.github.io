var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    var filterBuilderInstance;
    
    $scope.listFilter = null;  
    $scope.categories = categories;   

    $scope.filterBuilderOptions = {
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
            $scope.listFilter = filterBuilderInstance.getFilterExpression();
        }
    };

    $scope.onTagBoxValueChanged = function(e) {
        e.model.data.setValue(e.value);
    };

    $scope.buttonOptions = {
        text: "Apply Filter",
        type: "default",
        onClick: function() {
            $scope.listFilter = filterBuilderInstance.getFilterExpression();
        },
    };

    $scope.listOptions = {
        dataSource: {
            store: products
        },
        height: "100%",
        bindingOptions: {
            "dataSource.filter": "listFilter"
        }
    };

});