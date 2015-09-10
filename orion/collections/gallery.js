Gallery = new orion.collection('gallery', {

  singularName: orion.helpers.getTranslation('gallery.singularName'), // The name of one of this items
  pluralName: orion.helpers.getTranslation('gallery.pluralName'), // The name of more than one of this items
  title: 'Галерија', // The title of the page
  link: {
    title: 'Галерија'
    /*orion.helpers.getTranslation('posts.title')*/
  },

  tabular: {
    columns: [
      { data: 'title', title:'Име' },
      { data: 'eventAbout', title:'Настан' },
      { data: 'createdAt', title:'Датум' },
      orion.attributeColumn('file', 'image', 'Image'),
      /*{ data: 'image', title:'Слика' },*/
    ]
  }
});

Gallery.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Име',
    autoform:{
      columns:2
    }
  },

  eventAbout: {
    type: String,
    label: 'Настан',
    autoform:{
      columns:2
    }
  },

  image: orion.attribute('file', {
      label: 'Image', // We use this function to make i18n work in autoform
      optional: true
  }),

  createdAt: orion.attribute('createdAt')
}));


Gallery.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdAt });
  }
});
