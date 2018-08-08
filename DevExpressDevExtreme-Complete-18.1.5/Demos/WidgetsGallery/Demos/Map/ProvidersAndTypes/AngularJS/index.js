var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    var mapProviders = [{ 
            key: "google",
            name: "Google Dynamic Map"
        }, { 
            key: "googleStatic",
            name: "Google Static Map"
        }, { 
            key: "bing",
            name: "Bing Map"
        }],
        mapTypes = [{ 
            key: "roadmap",
            name: "Default Map"
        }, { 
            key: "satellite",
            name: "Photographic Map"
        }, { 
            key: "hybrid",
            name: "Hybrid Map"
        }];
    $scope.provider = mapProviders[0].key;
    $scope.type = mapTypes[0].key;
    $scope.mapOptions = {
        center: "Brooklyn Bridge,New York,NY",
        zoom: 14,
        height: 400,
        width: "100%",
        bindingOptions: {
            provider: "provider",
            type: "type"
        }
    };
    $scope.chooseProviderOptions = {
        dataSource: mapProviders,
        displayExpr: "name",
        valueExpr: "key",
        bindingOptions: {
            value: "provider"
        }
    };
    $scope.chooseTypeOptions = {
        dataSource: mapTypes,
        displayExpr: "name",
        valueExpr: "key",
        bindingOptions: {
            value: "type"
        }
    };
});