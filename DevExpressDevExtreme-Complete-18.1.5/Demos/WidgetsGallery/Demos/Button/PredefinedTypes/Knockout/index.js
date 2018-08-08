window.onload = function() {
    var viewModel = {
        okButtonOptions: {
            text: 'OK',
            type: 'normal',
            width: 90,
            onClick: function(e) { 
                DevExpress.ui.notify("The OK button was clicked");
            }
        },
    
        applyButtonOptions: {
            text: "Apply",
            type: "success",
            width: 90,
            onClick: function(e) { 
                DevExpress.ui.notify("The Apply button was clicked");
            }
        },
    
        doneButtonOptions: {
            text: "Done",
            type: "default",
            width: 90,
            onClick: function(e) { 
                DevExpress.ui.notify("The Done button was clicked");
            }
        },
    
        deleteButtonOptions: {
            text: "Delete",
            type: "danger",
            width: 90,
            onClick: function(e) { 
                DevExpress.ui.notify("The Delete button was clicked");
            }
        },

        okDisabledButtonOptions: {
            text: 'OK',
            type: 'normal',
            width: 90,
            disabled: true
        },

        applyDisabledButtonOptions: {
            text: "Apply",
            type: "success",
            width: 90,
            disabled: true
        },

        doneDisabledButtonOptions: {
            text: "Done",
            type: "default",
            width: 90,
            disabled: true
        },

        deleteDisabledButtonOptions: {
            text: "Delete",
            type: "danger",
            width: 90,
            disabled: true
        }
    };
    
    ko.applyBindings(viewModel, document.getElementById("demo"));
};
