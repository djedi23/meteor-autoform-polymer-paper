// -*- mode: js2; tab-width:2 -*-

Package.describe({
    name: 'djedi:autoform-polymer-paper',
    summary: 'Autoform polymer / paper templates ',
    version: '1.0.0',
    git: 'https://github.com/djedi23/meteor-autoform-polymer-paper'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    
    api.use([
        'templating',
        'aldeed:autoform@4.2.1',
	'aldeed:collection2@2.2.0',
        'ecwyne:polymer',
        'ecwyne:polymer-elements'
    ], 'client');
    
    api.imply([
        'aldeed:autoform',
	'aldeed:collection2',
	'aldeed:simple-schema',
        'ecwyne:polymer',
        'ecwyne:polymer-elements'
    ]);
    
    api.addFiles(['autoform-polymer-paper.html',
		  'autoform-polymer-paper.js',
		  'autoform-polymer-paper.css',

                  'components/afFormGroup/afFormGroup.html',
                  'components/afFormGroup/afFormGroup.js',

                  'inputTypes/typedInput.html',
                  'inputTypes/boolean-checkbox/boolean-checkbox.html',
                  'inputTypes/boolean-checkbox/boolean-checkbox.js',
                  'inputTypes/boolean-radios/boolean-radios.html',
                  'inputTypes/boolean-radios/boolean-radios.js',
                  'inputTypes/boolean-select/boolean-select.html',
                  'inputTypes/boolean-select/boolean-select.js',
                  'inputTypes/button/button.html',
                  'inputTypes/color/color.html',
                  'inputTypes/date/date.html',
                  'inputTypes/datetime/datetime.html',
                  'inputTypes/datetime-local/datetime-local.html',
                  'inputTypes/email/email.html',
                  'inputTypes/file/file.html',
                  'inputTypes/hidden/hidden.html',
                  'inputTypes/month/month.html',
                  'inputTypes/number/number.html',
                  'inputTypes/password/password.html',
                  'inputTypes/radio/radio.html',
                  'inputTypes/radio/radio.js',
                  'inputTypes/range/range.html',
                  'inputTypes/reset/reset.html',
//                  'inputTypes/reset/reset.js',
                  'inputTypes/search/search.html',
                  'inputTypes/select/select.html',
                  'inputTypes/select/select.js',
                  'inputTypes/tel/tel.html',
                  'inputTypes/text/text.html',
                  'inputTypes/textarea/textarea.html',
                  'inputTypes/time/time.html',
                  'inputTypes/url/url.html',
                  'inputTypes/week/week.html'
		 ], 
		 'client');
});


// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('autoform-polymer');
//   api.addFiles('autoform-polymer-tests.js');
// });
