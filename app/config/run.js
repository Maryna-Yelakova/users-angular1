angular.module('usersApp')
.run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function() {
        $state.go('error');
    });
});