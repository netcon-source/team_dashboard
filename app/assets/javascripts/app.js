(function($, _, Backbone){
  "use strict";

  window.app = {};
  var app = window.app;

  app.collections = {};
  app.models = {};
  app.views = {};
  app.views.widgets = {};
  app.views.WidgetEditors = {};
  app.views.schemas = {};
  app.mixins = {};
  app.helpers = {};

  app.init = function() {
    app.collections.dashboards = new app.collections.Dashboard({});
    app.helpers.datapointsTargetsPool = new app.helpers.DatapointsTargetsPool();

    app.router = new window.app.Router();
    try {
      Backbone.history.start({ pushState: true });
    }
    catch(x) {
      console.log(x);
    }
  };

})($, _, Backbone);
