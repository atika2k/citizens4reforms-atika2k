Template.aktivnosti.onCreated(function () {
  var instance = this;
  instance.loaded = new ReactiveVar(0);
  instance.limit = new ReactiveVar(5);
  instance.searchString = new ReactiveVar('');

  instance.autorun(function () {
    var limit = instance.limit.get();
    var searchString = instance.searchString.get();
    var subscription = instance.subscribe('aktivnostiLazy', limit, searchString);
    if(subscription.ready()){
      instance.loaded.set(limit)
    }
    instance.aktivnosti = function () {
      return Aktivnosti.find({}, { sort: { createdAt: -1 } });
    }
  });
});

Template.aktivnosti.helpers({
  aktivnosti: function () {
    return Template.instance().aktivnosti();
  },
  hasMoreAktivnosti: function () {
    return Template.instance().aktivnosti().count() >= Template.instance().limit.get();
  }
});

Template.aktivnosti.events({
  'click #load-more-activities': function (e, instance) {
    var limit = instance.limit.get()
    limit += 5;
    instance.limit.set(limit);
  },

  'click #search-aktivnosti': function (e, instance) {
    e.preventDefault();
    var $input = instance.$('input.form-control');
    var inputText = $input.val();
    if(inputText === '')
      return;
    instance.searchString.set(inputText);
    instance.limit.set(5);
  },
  'click #search-clear': function (e, instance) {
    e.preventDefault();
    var $input = instance.$('input.form-control');
    var inputText = $input.val();
    if(inputText === '')
      return;
    $input.val('');
    instance.searchString.set('');
    instance.limit.set(5);
  }
});