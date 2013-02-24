require.config({
  packages: ['lib', 'users', 'repos']
});

require(['lib/backbone', 'backbone', 'router', 'users', 'repos'], function(Backbone, Router, users, repos) {
  var router = new Router();
  router.on("route:users", function() { users.start(); });
  router.on("route:repos", function() { repos.start(); });
  Backbone.history.start();
});
