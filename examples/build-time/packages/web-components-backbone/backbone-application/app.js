const AppView = Backbone.View.extend({
  el: '#container',
  initialize: function () {
      this.render();
  },
  render: function () {
      this.$el.html("<child-application name=\"Ryan\"/>");
  }
});

const appView = new AppView();
