Posts = new orion.collection('posts', {
  singularName: 'post', 
  pluralName: 'posts',
  title: 'Постови',
  link: {
    title: 'Постови'
    /*orion.helpers.getTranslation('posts.title')*/
  },

  tabular: {
    columns: [
      { data: 'title', title:'Наслов' },
      orion.attributeColumn('createdBy', 'createdBy', 'createdBy'),
      orion.attributeColumn('createdAt', 'createdAt', 'createdAt'),
      orion.attributeColumn('image', 'image', 'Image')
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
    max: 200,
    autoform: {
      rows: 2
    }
  },

  content: {
    type: String,
    label: 'Содржина',
    optional: false,
    max: 3000,
    autoform: {
      rows: 10
    }
  },

  image: orion.attribute('image', {
      label: 'Image',
      optional: true
  }),

  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')


}));

Posts.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});
