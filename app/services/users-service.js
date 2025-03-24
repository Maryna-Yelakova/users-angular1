angular.module('usersApp')
.service('userService', function($timeout) {
    const users = [
    {
        username: 'mperry1992',
        first_name: 'Matthew',
        last_name: 'Perry',
        email: 'matthew.perry@email.com',
        password: 'Password1',
        user_type: 'Admin'
    },
    {
        username: 'ldicaprio',
        first_name: 'Leonardo',
        last_name: 'DiCaprio',
        email: 'leonardo.dicaprio@email.com',
        password: 'Password2',
        user_type: 'Driver'
    },
    {
        username: 'mstreep',
        first_name: 'Meryl',
        last_name: 'Streep',
        email: 'meryl.streep@email.com',
        password: 'Password3',
        user_type: 'Admin'
    },
    {
        username: 'thanks',
        first_name: 'Tom',
        last_name: 'Hanks',
        email: 'tom.hanks@email.com',
        password: 'Password4',
        user_type: 'Driver'
    },
    {
        username: 'jdoe1985',
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@email.com',
        password: 'Password5',
        user_type: 'Admin'
    },
    {
        username: 'jsmith2020',
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'jane.smith@email.com',
        password: 'Password6',
        user_type: 'Driver'
    },
    {
        username: 'bgates',
        first_name: 'Bill',
        last_name: 'Gates',
        email: 'bill.gates@email.com',
        password: 'Password7',
        user_type: 'Admin'
    },
    {
        username: 'tcruise',
        first_name: 'Tom',
        last_name: 'Cruise',
        email: 'tom.cruise@email.com',
        password: 'Password8',
        user_type: 'Driver'
    },
    {
        username: 'srogan',
        first_name: 'Seth',
        last_name: 'Rogen',
        email: 'seth.rogen@email.com',
        password: 'Password9',
        user_type: 'Admin'
    },
    {
        username: 'scarlett',
        first_name: 'Scarlett',
        last_name: 'Johansson',
        email: 'scarlett.johansson@email.com',
        password: 'Password10',
        user_type: 'Driver'
    },
    {
        username: 'ldicaprio1',
        first_name: 'Leonardo1',
        last_name: 'DiCaprio1',
        email: 'leonardo.dicaprio1@email.com',
        password: 'Password21',
        user_type: 'Driver'
    },
    ];
    this.isUsernameUnique = function(username) {
        return !users.some(user => user.username === username);
    };
// timeout is used to simulate a network delay
    this.getUsers = function() {
        return $timeout(function() {
            return users;
        }, 1000);
    };

    this.addUser = function(newUser) {
        return $timeout(function() {
            users.push(newUser);
            return users;
        }, 1000);
    }

    this.createUser = function(newUser) {
        if (newUser && !this.isUsernameUnique(newUser.username)) {
        return $timeout(function() {
            return Promise.reject(new Error('Username is already taken'));
        }, 1000);
        } else {
            return this.addUser(newUser);
        }
    }

    this.updateUser = function(user) {
        return $timeout(function() {
            const index = users.findIndex(u => u.username === user.username);
            users[index] = user;
            return users;
        }, 1000);
    }

    this.deleteUser = function(user) {
        return $timeout(function() {
            const index = users.findIndex(u => u.username === user.username);
            users.splice(index, 1);
            return users;
        }, 1000);
    }
});