(function() {
    angular.module('usersApp').controller('errorController',['$scope', errorCtrl]);
    function errorCtrl($scope) {
        $scope.notFoundError = "404 - Page Not Found (no design provided, TODO add designs)"
    }
})();