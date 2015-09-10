Posts = new orion.collection('posts', {
  singularName: orion.helpers.getTranslation('posts.singularName'), // The name of one of this items
  pluralName: orion.helpers.getTranslation('posts.pluralName'), // The name of more than one of this items
  title: 'Постови', // The title of the page
  link: {
    title: 'Постови'
    /*orion.helpers.getTranslation('posts.title')*/
  },

  tabular: {
    columns: [
      { data: 'title', title:'Наслов' },
      orion.attributeColumn('createdBy', 'createdBy', 'createdBy'),
      orion.attributeColumn('createdAt', 'createdAt', 'createdAt')
    ]
  }
});

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Наслов',
    optional: false
  },

  description: {
    type: String,
    label: 'Опис',
    optional: true,
    max: 200
  },

  content: {
    type: String,
    label: 'Содржина',
    optional: false,
    max: 1000,
    autoform: {
      rows: 10
    }
  },

  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')


}));

Posts.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});
