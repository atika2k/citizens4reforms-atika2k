Meteor.publish('aktivnostiDoma', function () {
  return Aktivnosti.find({}, {
    limit: 3 ,
    sort: { createdAt: -1 },
    fields: {
      _id: 1,
      title: 1,
      description: 1,
      image: 1,
      createdAt: 1,
      createdBy: 1
    }
  });
});

Meteor.publish('aktvnostiLazy', function (limit) {
  console.log('limit: ' + limit);
  check(limit, Number);
  return Aktivnosti.find({}, {
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

Meteor.publish('aktivnost', function (id) {
  check(id, String);
  return Aktivnosti.find({_id: id});
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

Meteor.publish('galleryLazy', function (limit) {
  check(limit, Number);
  return Images.find({},{
    sort: { createdAt: -1},
    fields: {
      title: 1,
      eventAbout: 1,
      image: 1,
      createdAt: 1,
      createdBy: 1
    },
    limit: limit
  });
});
