'use strict';
export default angular.module('appl.ctrlWorkflow', []).controller('workflow', configWorkflow);
function configWorkflow() {
    return{
        restrict: "E",
        replace: "true",
        scope: {
            data: "="
        },
        template: "workflow.html",
        controller: controllerWorkflow,
        controllerAs: "ctrlWorkflow"
    };

}


class controllerWorkflow {
    constructor($scope, DataService) {
        console.info("%cController: ctrlWorkflow", "color:darkorange");
        this.DataService = DataService;
        this.$scope = $scope;
        this.init();
    }
    init() {
        this.DataService.read('Workflow', function (data) {
            console.info("%cRead:" + JSON.stringify(data), "color:green");
            this.$scope.topic = data.data.Topic;
            this.$scope.content = data.data.Content;
            this.$scope.picture = data.data.picture;
        });
    }
}