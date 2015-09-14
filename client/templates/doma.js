Template.doma.onRendered(function () {
  this.subscribe('aktivnostiDoma');
});

Template.doma.helpers({
  posts: function () {
    return Aktivnosti.find({}, { sort: { createdAt: -1 } });
  }
});