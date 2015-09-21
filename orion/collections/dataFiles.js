DataFiles = new orion.collection('dataFiles', {
  singularName: 'документ',
  pluralName: 'документи',
  title: 'Материјали',
  link: {
    title: 'Материјали'
  },

  tabular: {
    columns: [
      {data: 'title', title:'Наслов' },
      {data: 'category', title: 'Опис'},
      orion.attributeColumn('createdBy', 'createdBy', 'Креирал:'),
      orion.attributeColumn('createdAt', 'createdAt', 'Креирано:'),
      orion.attributeColumn('file', 'file', 'Документи')
    ]
  }
});

DataFiles.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Наслов',
    optional: false,
    max: 50
  },

  description: {
    type: String,
    label: 'Опис',
    optional: false,
    max: 500,
    autoform: {
      rows: 4
    }
  },

  extension: {
    type: String,
    label: 'Тип на документ (Внимавајте при изборот на типот на документ!)',
    allowedValues: ['.pdf', '.docx', '.doc', '.odt', '.zip', '.rar'],
    optional: false
  },

  createdAt: orion.attribute('createdAt'),

  createdBy: orion.attribute('createdBy'),

  file: orion.attribute('file', {
    label: 'Документ',
    optional: false
  })
}));


DataFiles.helpers({
  getCreator: function () {
    return Meteor.users.findOne({ _id: this.createdBy });
  }
});
