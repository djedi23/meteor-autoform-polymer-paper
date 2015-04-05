Template.afBooleanRadioGroup_paper.events({
    'change paper-toggle-button': function(evt) {
	var val = evt.target.checked;
	$(evt.target).find('input[value=false]').attr('checked', !val);
	$(evt.target).find('input[value=true]').attr('checked', val);
    }
});

