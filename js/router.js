require(['lib', 'lib/backbone'], function() {
  return Backbone.Router.extend({
    routes: {
      '/': 'users',
      'repos': 'repos'
    }
  });
})