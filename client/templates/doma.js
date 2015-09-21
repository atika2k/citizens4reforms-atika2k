var active = true;

Template.doma.onCreated(function () {
  this.subscribe('aktivnostiDoma');
});

Template.doma.onRendered(function () {
  this.$('.carousel').carousel({
    interval: 3000
  });
});

Template.doma.helpers({
  aktivnosti: function () {
    active = true;
    return Aktivnosti.find({}, { sort: { createdAt: -1 } });
  },
  active: function () {
    if(active){
      active = false;
      return 'active';
    } else{
      return '';
    }
  }
});