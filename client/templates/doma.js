Template.doma.onRendered(function () {
  this.subscribe('posts');
});

Template.doma.helpers({
  posts: function () {
    return Posts.find({}, { sort: { createdAt: -1 } });
  }
});