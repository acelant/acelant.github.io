var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    $scope.okButtonOptions = {
        text: 'OK',
        type: 'normal',
        width: 90,
        onClick: function(e) { 
            DevExpress.ui.notify("The OK button was clicked");
        }
    };

    $scope.applyButtonOptions = {
        text: "Apply",
        type: "success",
        width: 90,
        onClick: function(e) { 
            DevExpress.ui.notify("The Apply button was clicked");
        }
    };

    $scope.doneButtonOptions = {
        text: "Done",
        type: "default",
        width: 90,
        onClick: function(e) { 
            DevExpress.ui.notify("The Done button was clicked");
        }
    };

    $scope.deleteButtonOptions = {
        text: "Delete",
        type: "danger",
        width: 90,
        onClick: function(e) { 
            DevExpress.ui.notify("The Delete button was clicked");
        }
    };

    $scope.okDisabledButtonOptions = {
        text: 'OK',
        type: 'normal',
        width: 90,
        disabled: true
    };

    $scope.applyDisabledButtonOptions = {
        text: "Apply",
        type: "success",
        width: 90,
        disabled: true
    };

    $scope.doneDisabledButtonOptions = {
        text: "Done",
        type: "default",
        width: 90,
        disabled: true
    };

    $scope.deleteDisabledButtonOptions = {
        text: "Delete",
        type: "danger",
        width: 90,
        disabled: true
    };
});
