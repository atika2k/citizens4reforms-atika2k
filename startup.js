if(Meteor.isClient){
  Meteor.startup(function () {
    i18n.setLanguage('mk');
    T9n.setLanguage('mk');
  });
}