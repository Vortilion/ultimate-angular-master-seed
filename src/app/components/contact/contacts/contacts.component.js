var contacts = {
    bindings: {
        contacts: '<',
        filter: '<'
    },
    templateUrl: './contacts.html',
    controller: 'ContactsController'
};

angular
    .module('components.contact')
    .component('contacts', contacts)
    .config(function ($stateProvider) {
        $stateProvider
            .state('contacts', {
                parent: 'app',
                url: '/contacts?filter',
                component: 'contacts',
                params: {
                    filter: {
                        value: 'none'
                    }
                },
                resolve: {
                    contacts: function (contactService) {
                        return contactService.getContactList().$loaded();
                    },
                    filter: function ($transition$) {
                        return $transition$.params();
                    }
                }
            });
    });
