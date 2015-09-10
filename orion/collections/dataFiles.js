DataFiles = new orion.collection('dataFiles', {

  singularName: orion.helpers.getTranslation('dataFiles.singularName'), // The name of one of this items
  pluralName: orion.helpers.getTranslation('dataFiles.pluralName'), // The name of more than one of this items
  title: 'Материјали', // The title of the page
  link: {
    title: 'Материјали'
    /*orion.helpers.getTranslation('posts.title')*/
  },

  tabular: {
    columns: [
      { data: 'title', title:'Тема' },
      { data: 'category', title:'Категорија' },
      { data: 'createdAt', title:'Датум' },
    ]
  }
});

DataFiles.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Наслов'
  },

  category: {
    type: String,
    label: 'Опис'
  },

  createdAt: orion.attribute('createdAt')
}));


DataFiles.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdAt });
  }
});
