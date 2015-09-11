Aktivnosti = new orion.collection('aktivnosti', {
  singularName: 'activity' , 
  pluralName: 'activities' ,
  title: 'Активности',
  link: {
    title: 'Активности'
  },

  tabular: {
    columns: [
      { data: 'title', title:'Наслов' },
      orion.attributeColumn('createdBy', 'createdBy', 'Креирал:'),
      orion.attributeColumn('createdAt', 'createdAt', 'Креирано:'),
      orion.attributeColumn('image', 'image', 'Слика')
    ]
  }
});

Aktivnosti.attachSchema(new SimpleSchema({
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

  content: orion.attribute('summernote', {
      label: 'Содржина'
  }),
  
  image: orion.attribute('image', {
      label: 'Слика',
      optional: true
  }),

  createdBy: orion.attribute('createdBy'),
  
  createdAt: orion.attribute('createdAt')


}));

Aktivnosti.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});
