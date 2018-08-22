function ContactNewController(contactService) {
    var ctrl = this;

    ctrl.$onInit = function () {
        ctrl.contact = {
            name: '',
            email: '',
            job: '',
            location: '',
            social: {
                facebook: '',
                github: '',
                twitter: '',
                linkedin: ''
            },
            tag: 'none'
        };
        ctrl.createNewContact = function (event) {
            return contactService
                .createNewContact(event.contact)
                .then(function (contact) {
                    console.log(contact);
                });
        };
    };
}

angular
    .module('components.contact')
    .controller('ContactNewController', ContactNewController);
