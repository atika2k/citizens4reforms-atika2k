Template.gallery.helpers({
  images: function () {
    return Images.find({}, {sort: {createdAt: -1}});
  }
});

Template.gallery.events({
  'click .thumbnail' : function (e, tmpl) {
    var imageThumbId = $(e.currentTarget).attr('id');

    var pswpElement = tmpl.$('.pswp')[0];

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
  'click #load-more-images' : function () {
    var limit = Session.get('galleryLimit');
    Session.set('galleryLimit', limit + 6)
  }
});

Template.gallery.onDestroyed(function () {
  Session.set('galleryLimit', 6);
});

function imageTransform (item) {
  // body...
}