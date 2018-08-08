window.onload = function() {
    var viewModel = {
        schedulerOptions: {
            dataSource: data,
            views: ["timelineDay", "timelineWeek", "timelineWorkWeek", "timelineMonth"],
            currentView: "timelineMonth",
            currentDate: new Date(2017, 4, 1),
            firstDayOfWeek: 0,
            startDayHour: 8,
            endDayHour: 20,
            cellDuration: 60,
            groups: ["priority"],
            resources: [{
                fieldExpr: "ownerId",
                allowMultiple: true,
                dataSource: resourcesData,
                label: "Owner",
                useColorAsDefault: true
            }, { 
                fieldExpr: "priority",
                allowMultiple: false,
                dataSource: priorityData,
                label: "Priority"
            }],
            height: 580
        }
    };
    
    ko.applyBindings(viewModel, document.getElementById("scheduler-demo"));
};