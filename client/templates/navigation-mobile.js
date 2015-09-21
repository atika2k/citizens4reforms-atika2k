Template.navigationMobile.helpers({
  activeLink: function (route) {
    var pathName = Router.current().route.getName();
    return (pathName === route) ? 'active' : '';
  }
});