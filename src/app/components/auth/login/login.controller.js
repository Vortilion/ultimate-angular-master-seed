function LoginController($state, authService) {
    var ctrl = this;

    ctrl.$onInit = function () {
        ctrl.error = null;
        ctrl.user = {
            email: '',
            password: ''
        };
    };

    ctrl.loginUser = function (event) {
        return authService
            .login(event.user)
            .then(function () {
                $state.go('app');
            }, function (reason) {
                ctrl.error = reason.message;
            });
    };
}

angular
    .module('components.auth')
    .controller('LoginController', LoginController);
