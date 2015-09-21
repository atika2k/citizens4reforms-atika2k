Template.gallery.onCreated(function () {
  var instance = this;
  instance.categories = ['Јавни дебати', 'Обуки', 'Работилници', 'Настани', 'Акции', 'Конференции', 'Општо'];
  instance.loaded = new ReactiveVar(0);
  instance.limit = new ReactiveVar(6);
  instance.category = new ReactiveVar('');

  instance.autorun(function () {
    var limit = instance.limit.get();
    var category = instance.category.get();
    var subscription = instance.subscribe('galleryLazy', limit, category);
    if(subscription.ready()){
      instance.loaded.set(limit)
    }
    instance.images = function () {
      return Images.find({}, { sort: { createdAt: -1 } });
    };
    instance.getCategories = function () {
      return instance.categories;
    };
    instance.getCategory = function () {
      if(instance.category.get() === '')
        return 'Категорија';
      else
        return instance.category.get();
    }
  });
});

Template.gallery.helpers({
  images: function () {
    return Template.instance().images();
  },
  hasMoreImages: function () {
    return Template.instance().images().count() >= Template.instance().limit.get();
  },
  categories: function () {
    return Template.instance().getCategories();
  },

  category: function () {
    return Template.instance().getCategory();
  }
});

Template.gallery.events({
  'click .thumbnail' : function (e, instance) {
    var imageThumbId = $(e.currentTarget).attr('id');

    var pswpElement = instance.$('.pswp')[0];

    var images = Images.find({}, {sort: {createdAt: -1}}).fetch();    

    var pswpImages = _.map(images, function(item){
      return {
        id: item._id,
        src: item.image.url,
        w: item.image.info.width,
        h: item.image.info.height,
        title: item.title
    }});

    var index = _.indexOf(_.pluck(pswpImages, 'id'), imageThumbId);
    if(index === -1) {
      index = 0;
    }
    var options = {
      history: false,
      focus: false,
      showAnimationDuration: 0,
      hideAnimationDuration: 0,
      index: index
    };
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, pswpImages, options);
    gallery.init();
  },
  'click #load-more-images' : function (e, instance) {
    var limit = instance.limit.get()
    limit += 6;
    instance.limit.set(limit);
  },

  'click .category': function (e, instance) {
    e.preventDefault();
    var category = e.currentTarget.innerText;
    if(_.contains(instance.categories, category)){
      instance.category.set(category);
      instance.limit.set(6);
    }
  },

  'click #reset-gallery': function (e, instance) {
    instance.category.set('');
    instance.limit.set(6);
  }
});