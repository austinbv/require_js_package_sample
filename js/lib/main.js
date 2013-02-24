require.config({
  baseUrl: '.',
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    paths: {
      'jquery': 'jquery-1.9.1',
      'backbone': 'backbone-0.9.10',
      '_': 'underscore-1.4.4',
      'bootstrap': 'bootstrap-2.3.0'
    }
  }
});