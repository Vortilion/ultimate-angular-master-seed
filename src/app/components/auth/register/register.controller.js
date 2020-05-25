function RegisterController(authService) {
    var ctrl = this;

    ctrl.$onInit = function () {
        ctrl.error = null;
        ctrl.user = {
            email: '',
            password: ''
        };
    };

    ctrl.createUser = function (event) {
        return authService
            .register(event.user)
            .then(function () {
                // $state
                console.log('SUCCESS!');
            }, function (reason) {
                ctrl.error = reason.message;
            });
    };
}

angular
    .module('components.auth')
    .controller('RegisterController', RegisterController);
