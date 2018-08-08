$(function(){
    $("#normal").dxButton({
        text: "OK",
        type: "normal",
        width: 90,
        onClick: function(e) { 
        	DevExpress.ui.notify("The OK button was clicked");
        }
    });
    
    $("#success").dxButton({
        text: "Apply",
        type: "success",
        width: 90,
        onClick: function(e) { 
        	DevExpress.ui.notify("The Apply button was clicked");
        }
    });
    
    $("#default").dxButton({
        text: "Done",
        type: "default",
        width: 90,
        onClick: function(e) { 
        	DevExpress.ui.notify("The Done button was clicked");
        }
    });
    
    $("#danger").dxButton({
        text: "Delete",
        type: "danger",
        width: 90,
        onClick: function(e) { 
        	DevExpress.ui.notify("The Delete button was clicked");
        }
    });

    $("#normal-disabled").dxButton({
        text: "OK",
        type: "normal",
        width: 90,
        disabled: true

    });
    
    $("#success-disabled").dxButton({
        text: "Apply",
        type: "success",
        width: 90,
        disabled: true
    });
    
    $("#default-disabled").dxButton({
        text: "Done",
        type: "default",
        width: 90,
        disabled: true
    });
    
    $("#danger-disabled").dxButton({
        text: "Delete",
        type: "danger",
        width: 90,
        disabled: true
    });
});
