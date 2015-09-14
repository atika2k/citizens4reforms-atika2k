Template.aktivnosti.helpers({
  aktivnosti: function () {
    return Aktivnosti.find({}, { sort: { createdAt: -1 } });
  }
});

Template.aktivnosti.events({
  'click #load-more-activities': function (e, tmpl) {
    var limit = Session.get('aktivnostiLimit');
    Session.set('aktivnostiLimit', limit + 5);
  }
});

Template.aktivnosti.onDestroyed(function () {
  Session.set('aktivnostiLimit', 5);
})