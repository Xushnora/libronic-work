i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "key": "hello world"
      }
    }
  }
}, function(err, t) {
  // initialized and ready to go!
  console.log("Ready to go!");
});

var changeLng = function(varLng) {
  i18next.changeLanguage('en', (err, t) => {
    if (err) return console.log('something went wrong loading', err);
    t('applog'); // -> same as i18next.t
  });
};

changeLng()

