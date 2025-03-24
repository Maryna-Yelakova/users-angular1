(function() {
    'use strict';     
    angular.module('usersApp').controller('userListController',['$scope','userService', 'Flash', userListCtrl]);
    function userListCtrl($scope, userService, Flash) {
        $scope.getUsers = function() {
            userService.getUsers().then(function(response){
                $scope.users = response;
            });
        };

        $scope.setCreateMode = function() {
            $scope.createMode = true;
            $scope.editMode = false;
        };

        $scope.selectUser = function(user) {
            $scope.editMode = true;
            $scope.createMode = false;
            $scope.selectedUser = user;
            $scope.newUser = angular.copy(user);
        }

        $scope.closeForm = function() {
            $scope.editMode = false;
            $scope.createMode = false;
            $scope.selectedUser = null;
            $scope.newUser = {};
        }

        $scope.createUser = function() {
            userService.createUser($scope.newUser).then(function (response) {
                 $scope.users = response;
                 $scope.closeForm();
            }, function (error) {
                Flash.create('danger', error.message,  0, {container: 'flash-fixed'});
            });
        };

        $scope.deleteUser = function() {
            userService.deleteUser($scope.selectUser).then(function () {
                $scope.closeForm();
                $scope.users = response;
            });
        }

        $scope.updateUser = function() {
            console.log($scope.newUser, "newUser");
            userService.updateUser($scope.newUser).then(function (response) {
                $scope.users = response;
                $scope.closeForm();
            });
        }

        $scope.angular = angular;
        $scope.users = [];
        $scope.newUser = {};
        $scope.selectedUser = null;
        $scope.editMode = false;
        $scope.createMode = false;
        $scope.userTypes = ['Admin', 'Driver'];
        $scope.useremail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        $scope.getUsers();

    }
})();