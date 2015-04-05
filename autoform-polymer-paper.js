// -*- mode:js2; coding: utf-8 -*-

Meteor.startup(function () {
    AutoForm.setDefaultTemplate('paper');
});


Template.quickForm_paper.events({
    'click #qfSubmit': function(evt){
	$(evt.target).submit();
    }
});


