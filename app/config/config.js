(function() {
    angular.module("usersApp").config(["$routeProvider", "$locationProvider", "$urlRouterProvider",  function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/error');

    $stateProvider
        .state('home', {
            url: '/',
                templateUrl: "./app/views/users.html",
                controller: "userListController"
        })
        .state('error', {
            url: '/error',
            templateUrl: './app/views/error-page.html',
            controller: 'errorController'
        });
    }]);
}
)();