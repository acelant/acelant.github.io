window.onload = function() {
    var viewModel = {
        chartOptions: {
            palette: "Harmony Light",
            dataSource: zoomingData,
            series: [{
                argumentField: "arg",
                valueField: "y1"
            }, {
                argumentField: "arg",
                valueField: "y2"
            }],
            scrollBar: {
                visible: true
            },
            scrollingMode: "all", 
            zoomingMode: "all",
            legend:{
                visible: false
            },
            onDone: function(e) {
                e.component.zoomArgument(300,500);
            }
        }
    };
    
    ko.applyBindings(viewModel, document.getElementById("chart-demo"));
};