Meteor.publish('aktivnosti', function () {
  return Aktivnosti.find({}, { sort: { createdAt: -1 }, limit: 3 });
});

Meteor.publish('aktivnost', function (id) {
  check(id, String);
  return Aktivnosti.find({_id: id});
});

Meteor.publish('gallery', function () {
  return Images.find();
});
