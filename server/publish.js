Meteor.publish('posts', function () {
  return Posts.find();
});

Meteor.publish('gallery', function () {
  return Gallery.find();
});

