Meteor.publish('aktivnostiDoma', function () {
  // Meteor._sleepForMs(1500);
  return Aktivnosti.find({}, {
    limit: 3 ,
    sort: { createdAt: -1 },
    fields: {
      _id: 1,
      title: 1,
      description: 1,
      imageCarousel: 1
    }
  });
});

Meteor.publish('aktivnostiLazy', function (limit, searchString) {
  // Meteor._sleepForMs(1500);
  check(limit, Number);
  check(searchString, String);
  return Aktivnosti.find({
    title: { '$regex': '.*' + searchString || '' + '.*', '$options' : 'i'}
  }, {
    limit: limit ,
    sort: { createdAt: -1 },
    fields: {
      _id: 1,
      title: 1,
      description: 1,
      content: 1,
      image: 1,
      createdAt: 1,
      createdBy: 1
    }
  });
});

Meteor.publish('materiajliLazy', function (limit, searchString) {
  Meteor._sleepForMs(500);
  check(limit, Number);
  check(searchString, String);
  return DataFiles.find({
    title: { '$regex': '.*' + searchString || '' + '.*', '$options' : 'i'}
  }, {
    sort: {createdAt: -1},
    fields: {
      title: 1,
      description: 1,
      file: 1,
      extension: 1
    },
    limit: limit
  });
})

Meteor.publish('aktivnost', function (id) {
  check(id, String);
  return Aktivnosti.find({_id: id});
});

Meteor.publish('dokument', function (id) {
  check(id, String);
  return DataFiles.find({_id: id});
});

Meteor.publish('gallery', function () {
  return Images.find({},{
    sort: { createdAt: -1},
    fields: {
      title: 1,
      eventAbout: 1,
      image: 1,
      createdAt: 1,
      createdBy: 1
    },
  });
});

Meteor.publish('galleryLazy', function (limit, category) {
  // Meteor._sleepForMs(1500);
  check(limit, Number);
  check(category, String);
  var query = {};
  if(category !== ''){
    query['category'] = category;
  }
  return Images.find(query,{
    sort: { createdAt: -1},
    fields: {
      title: 1,
      eventAbout: 1,
      image: 1,
      category: 1,
      createdAt: 1,
      createdBy: 1
    },
    limit: limit
  });
});

