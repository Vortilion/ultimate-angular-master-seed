function AppController($state, authService) {
    var ctrl = this;

    ctrl.user = authService.getUser();
    ctrl.logout = function () {
        authService.logout().then(function () {
            $state.go('auth.login');
        });
    };
}

angular
    .module('common')
    .controller('AppController', AppController);
