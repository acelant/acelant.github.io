$(function(){
    var rangeOptions = {
        size: {
            height: 200
        },
        dataSource: dataSource,
        chart: {
            commonSeriesSettings: {
                argumentField: "country",
                type: "bar"
            },
            series: [
                { valueField: "copper", name: "Copper" }
            ]
        },
        title: "Copper Production in 2013",
        onValueChanged: function (e) {
            var data = e.component.option("dataSource"),
                total = 0,
                startIndex,
                endIndex;
    
            $.each(data, function(i, item){
                if (item.country == e.value[0] )
                    startIndex = i;
                else if (item.country == e.value[1])
                    endIndex = i;
            });
    
            if(endIndex) {
                data
                    .slice(startIndex, endIndex + 1)
                    .forEach(function(item){
                        total += item.copper;
                    });
            }
            else {
                total = data[startIndex].copper;
            }
    
            $("#total").text(Globalize.formatNumber(total, { maximumFractionDigits: 0 }));
        }
    };
    
    $("#range-selector").dxRangeSelector(rangeOptions);
    
    $("#total").text("12,809,000");
});