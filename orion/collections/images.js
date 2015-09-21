Images = new orion.collection('images', {

  singularName: 'слика',
  pluralName: 'слики',
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

  category: {
    type: String,
    label: 'Категорија',
    allowedValues: ['Јавни дебати', 'Обуки', 'Работилници', 'Настани', 'Акции', 'Конференции', 'Општо' ],
    optional: false
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
      label: 'Слики',
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
