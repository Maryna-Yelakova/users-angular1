(function() {
    angular.module("usersApp").config(["$routeProvider", "$locationProvider",  function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/", {
                templateUrl: "./app/views/users.html",
                controller: "userListController"
            })
            .when('/error', {
                templateUrl: './app/views/error-page.html',
                controller: 'errorController'
            })
            .otherwise({
             redirectTo: "/"
            });
    }]);
}
)();