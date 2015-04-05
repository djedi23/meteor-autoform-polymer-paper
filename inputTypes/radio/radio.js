Template.afRadio_paper.events({
    'change paper-radio-button': function(evt) {
	var val = $(evt.target).attr('checked');
	$(evt.target).find('input').attr('checked', val!==undefined);
    }
});
