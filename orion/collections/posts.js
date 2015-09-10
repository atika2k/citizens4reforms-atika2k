Posts = new orion.collection('posts', {
  singularName: 'post',
  pluralName: 'posts',
  link: {
    title: 'Posts'
  },
  tabular: {
    columns: [
      {data: 'title', title: 'Наслов'},
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