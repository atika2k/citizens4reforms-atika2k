Meteor.publish('posts', function () {
  return Posts.find({}, { sort: { createdAt: -1 }, limit: 3 });
});

Meteor.publish('gallery', function () {
  return Gallery.find();
});
