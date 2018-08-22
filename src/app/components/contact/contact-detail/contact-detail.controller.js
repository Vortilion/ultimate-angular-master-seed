function ContactDetailController() {
    var ctrl = this;

    ctrl.saveContact = function () {
        ctrl.onSave({
            $event: {
                contact: ctrl.contact
            }
        });
    };

    ctrl.$onInit = function () {
        ctrl.isNewContact = !ctrl.contact.$id;
    };
}

angular
    .module('components.contact')
    .controller('ContactDetailController', ContactDetailController);
