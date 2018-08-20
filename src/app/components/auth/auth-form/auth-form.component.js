var authForm = {
    bindings: {
        user: '<',
        message: '@',
        button: '@',
        onSubmit: '&'
    },
    controller: 'AuthFormController',
    templateUrl: './auth-form.html',
};

angular
    .module('components.auth')
    .component('authForm', authForm);
