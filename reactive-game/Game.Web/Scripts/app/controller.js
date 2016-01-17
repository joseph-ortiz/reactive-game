(function() {
    var controllerModule = angular.module("controller-module", []);
    controllerModule.controller('GameCtrl', function() {
        var self = $scope;
        self.hello = "world";
    });
}());