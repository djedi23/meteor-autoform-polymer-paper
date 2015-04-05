
Template.afCheckbox_paper.events({
    'change paper-checkbox': function(evt) {
	var val = $(evt.target).attr('checked');
	$(evt.target).find('input').attr('checked', val!==undefined);
    }
});

