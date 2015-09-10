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
      { data: 'createdBy', title:'Креатор' },
      { data: 'createdAt', title:'Датум' },
    ]
  }
});

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Наслов'
  },

  description: {
    type: String,
    label: 'Опис'
  },

  content: {
    type: String,
    label: 'Содржина',
    autoform:{
      rows: 10
    }
  },
   /*image: orion.attribute('file', {
      label: 'Слика', // We use this function to make i18n work in autoform
      optional: true
  }),
  *
   * Here its the same with image attribute.
   * summernote is a html editor.
   
  body: orion.attribute('summernote', {
      label: orion.helpers.getTranslation('posts.schema.body') // We use this function to make i18n work in autoform
  }),*/
  /**
   * This attribute sets the user id of the user that created 
   * this post automatically.
   */
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));


Posts.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});
