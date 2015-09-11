Template.doma.onRendered(function () {
  this.subscribe('aktivnosti');
});

Template.doma.helpers({
  posts: function () {
    return Aktivnosti.find({}, { sort: { createdAt: -1 } });
  }
});