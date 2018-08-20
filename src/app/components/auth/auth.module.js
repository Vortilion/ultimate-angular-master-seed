function config($firebaseRefProvider) {
    var config = {
        apiKey: "AIzaSyADoyWeLmUmIede4XSRgn97Os6CWoFnLv4",
        authDomain: "contacts-manager-f45b5.firebaseapp.com",
        databaseURL: "https://contacts-manager-f45b5.firebaseio.com",
        projectId: "contacts-manager-f45b5",
        storageBucket: "contacts-manager-f45b5.appspot.com",
        messagingSenderId: "190435009614"
    };
    $firebaseRefProvider.registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts'
    });
    firebase.initializeApp(config);
}

config.$inject = ['$firebaseRefProvider'];
angular
    .module('components.auth', [
        'ui.router',
        'firebase'
    ])
    .config(config);
