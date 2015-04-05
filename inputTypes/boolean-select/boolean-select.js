Template.afBooleanSelect_paper.events({
    'core-select paper-dropdown-menu': function(evt,tpl){
        var detail = evt.originalEvent.detail;
        $(evt.currentTarget).val(detail.item.textContent.toLowerCase());
    }
});
