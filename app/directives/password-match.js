(function() {
    angular.module("usersApp").directive('passwordMatch', function() {
        return {
        require: 'ngModel',
        scope: {
            otherModelValue: '=passwordMatch'
        },
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.passwordMatch = function(modelValue) {
                return modelValue === undefined || modelValue === scope.otherModelValue;
            };

            scope.$watch('otherModelValue', function(newValue, oldValue) {
                if(newValue !== oldValue) {
                    ngModel.$validate();
                }
            });
        }
    };
    });
})();