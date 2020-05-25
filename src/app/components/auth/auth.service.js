function AuthService($firebaseAuth) {
    var auth = $firebaseAuth();
    var authData = null;

    function storeAuthData(response) {
        authData = response;
        return authData;
    }

    this.register = function(user) {
        return auth
            .$createUserWithEmailAndPassword(user.email, user.password)
            .then(storeAuthData);
    };

    this.login = function(user) {
        return auth
            .$signInWithEmailAndPassword(user.email, user.password)
            .then(storeAuthData);
    };
}

angular
    .module('components.auth')
    .service('authService', AuthService);
