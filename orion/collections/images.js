Images = new orion.collection('images', {

  singularName: 'image',
  pluralName: 'images',
  title: 'Галерија',
  link: {
    title: 'Галерија'
  },

  tabular: {
    columns: [
      { data: 'title', title:'Име' },
      orion.attributeColumn('createdBy', 'createdBy', 'Креирал:'),
      orion.attributeColumn('createdAt', 'createdAt', 'Креирано:'),
      orion.attributeColumn('image', 'image', 'Слика')
    ]
  }
});

Images.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Име',
    max: 50,
    optional: false,
  },

  eventAbout: {
    type: String,
    label: 'Настан',
    optional: true,
    max: 400,
    autoform:{
      rows: 4
    }
  },

  image: orion.attribute('image', {
      label: 'Слика',
      optional: false
  }),

  createdAt: orion.attribute('createdAt'),

  createdBy: orion.attribute('createdBy')

}));


Images.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});
