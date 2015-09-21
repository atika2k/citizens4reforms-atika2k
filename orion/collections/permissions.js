// Images permissions

Images.deny({
  update: function () {
    return Meteor.user() == null;
  },
  insert: function () {
    return Meteor.user() == null;
  },
  remove: function () {
    return Meteor.user() == null;
  }
});


// Aktivnosti permissions

Aktivnosti.deny({
  update: function () {
    return Meteor.user() == null;
  },
  insert: function () {
    return Meteor.user() == null;
  },
  remove: function () {
    return Meteor.user() == null;
  }
});

// DataFiles permissions

DataFiles.deny({
  update: function () {
    return Meteor.user() == null;
  },
  insert: function () {
    return Meteor.user() == null;
  },
  remove: function () {
    return Meteor.user() == null;
  }
});