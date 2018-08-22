function ContactService(authService, $firebaseRef, $firebaseArray) {
    var ref = $firebaseRef.contacts;
    var uid = authService.getUser().uid;

    return {
        createNewContact: function (contact) {
            return $firebaseArray(ref.child(uid)).$add(contact);
        }
    };
}

angular
    .module('components.contact')
    .factory('contactService', ContactService);
