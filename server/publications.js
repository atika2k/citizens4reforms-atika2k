Meteor.publish('posts', function () {
  return Posts.find({}, { sort: { createdAt: -1 }, limit: 3 });
});