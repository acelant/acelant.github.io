$(function(){    
    $("#scheduler").dxScheduler({
        dataSource: data,
        views: [{
            type: "workWeek",
            name: "Vertical Grouping",
            groupOrientation: "vertical",
            cellDuration: 60,
            intervalCount: 2
        }, {
            type: "workWeek",
            name: "Horizontal Grouping",
            groupOrientation: "horizontal",
            cellDuration: 30,
            intervalCount: 2
        }],
        currentView: "Vertical Grouping",
        crossScrollingEnabled: true,
        currentDate: new Date(2018, 4, 21),
        startDayHour: 9,
        endDayHour: 16,
        groups: ["priorityId"],
        resources: [
            { 
                 fieldExpr: "priorityId", 
                 allowMultiple: false, 
                 dataSource: priorityData,
                 label: "Priority"
            }
        ],
        height: 700,
        showCurrentTimeIndicator: false
    });
});