Template.materijali.onCreated(function () {
  var instance = this;
  instance.loaded = new ReactiveVar(0);
  instance.limit = new ReactiveVar(3);
  instance.searchString = new ReactiveVar('');

  instance.autorun(function () {
    var limit = instance.limit.get();
    var searchString = instance.searchString.get();
    var subscription = instance.subscribe('materiajliLazy', limit, searchString);
    if(subscription.ready()){
      instance.loaded.set(limit)
    }
    instance.materijali = function () {
      return DataFiles.find({}, { sort: { createdAt: -1 } });
    }
  });
});


Template.materijali.helpers({
  materijali: function () {
    return Template.instance().materijali();
  },
  hasMoreMaterijali: function () {
    return Template.instance().materijali().count() >= Template.instance().limit.get();
  },
  cutDescription: function (str) {
    if(str.length > 150)
      return str.substr(0, 147) + ' ...';
    else
      return str;
  }
})

Template.materijali.events({
  'click #load-more-materijali': function (e, instance) {
    var limit = instance.limit.get()
    limit += 3;
    instance.limit.set(limit);
  },
  'click #search-materijali': function (e, instance) {
    e.preventDefault();
    var $input = instance.$('input.form-control');
    var inputText = $input.val();
    if(inputText === '')
      return;
    instance.searchString.set(inputText);
    instance.limit.set(3);
  },
  'click #search-clear': function (e, instance) {
    e.preventDefault();
    var $input = instance.$('input.form-control');
    var inputText = $input.val();
    if(inputText === '')
      return;
    $input.val('');
    instance.searchString.set('');
    instance.limit.set(3);
  }
});