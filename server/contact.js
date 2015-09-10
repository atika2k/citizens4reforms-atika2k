Meteor.methods({
  sendEmail: function (text) {
    check([text], [String]);

    this.unblock();

    Email.send({
      to: 'atika2k@gmail.com',
      from: 'atika2k@gmail.com',
      subject: 'New message from contact form',
      text: text
    });
  }
});