Template.navigation.helpers({
  activeLink: function (route) {
    var pathName = Router.current().route.getName();
    return (pathName === route) ? 'active' : '';
  }
});