Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

Router.route('/', function () {
  this.render('doma');
}, {
  name: 'doma'
});

Router.route('/aktivnosti', function () {
  this.render('aktivnosti');
}, {
  name: 'aktivnosti'
});

Router.route('/gallery', function () {
  this.render('gallery');
}, {
  name: 'gallery'
});

Router.route('/aktivnosti/:_id', function () {
  this.wait(Meteor.subscribe('aktivnost', this.params._id));
  if (this.ready()) {
    this.render('aktivnost', {
      data: function () {
        return Aktivnosti.findOne({_id: this.params._id});
      }
    });
  } else {
    this.render('loading');
  }
},{
  name: 'aktivnost'
});

Router.route('/materijali/:_id', function () {
  this.wait(Meteor.subscribe('dokument', this.params._id));
  if(this.ready()){
    this.render('dokument', {
      data: function () {
        return DataFiles.findOne({_id: this.params._id});
      }
    });
  } else {
    this.render('loading');
  }
},{
  name: 'dokument'
});


Router.route('/za-organizacijata', function () {
  this.render('zaOrganizacijata');
},{
  name: 'zaOrganizacijata'
});

Router.route('/za-proektot', function () {
  this.render('zaProektot');
},{
  name: 'zaProektot'
});

Router.route('/potrebi-problemi', function () {
  this.render('potrebiProblemi');
},{
  name: 'potrebiProblemi'
});

Router.route('/misija', function () {
  this.render('misija');
},{
  name: 'misija'
});

Router.route('/rezultati', function () {
  this.render('rezultati');
},{
  name: 'rezultati'
});

Router.route('/celna_grupa', function () {
  this.render('celna_grupa');
},{
  name: 'celna_grupa'
});

Router.route('/materijali', function () {
  this.render('materijali');
},{
  name: 'materijali'
});



Router.route('/media', function () {
  this.render('media');
},{
  name: 'media'
});

Router.route('/kontakt', function () {
  this.render('kontakt');
},{
  name: 'kontakt'
});