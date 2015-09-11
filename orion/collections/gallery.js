Gallery = new orion.collection('gallery', {

  singularName: 'image', // The name of one of this items
  pluralName: 'images', // The name of more than one of this items
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
      orion.attributeColumn('image', 'image', 'Image'),
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

  image: orion.attribute('image', {
      label: 'Image',
      optional: true
  }),

  createdAt: orion.attribute('createdAt')
}));


Gallery.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdAt });
  }
});
