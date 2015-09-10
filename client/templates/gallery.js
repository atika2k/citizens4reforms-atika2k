Template.gallery.onRendered(function () {
  var pswpElement = this.$('.pswp')[0];
  console.log('pswpElement', pswpElement);
  // build items array
  var items = [
      {
        src: '/blog1.jpg',
        w: 440,
        h: 270
      },
      {
        src: '/blog2.jpg',
        w: 440,
        h: 270
      },
      {
        src: '/blog3.jpg',
        w: 440,
        h: 270
      }
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
      history: false,
      focus: false,

      showAnimationDuration: 0,
      hideAnimationDuration: 0
      
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
});

Template.gallery.events({
  'click #gallery-btn' : function (e, tmpl) {
    var pswpElement = tmpl.$('.pswp')[0];
    console.log('pswpElement', pswpElement);
    // build items array
    var items = [
        {
          src: '/blog1.jpg',
          w: 440,
          h: 270
        },
        {
          src: '/blog2.jpg',
          w: 440,
          h: 270
        },
        {
          src: '/blog3.jpg',
          w: 440,
          h: 270
        }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  }
})