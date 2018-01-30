var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videos.on('select', function(selected) {
      this.render(selected);
    }, this);
    this.render();
  },


  render: function(vid) {
    this.$el.html(this.template());
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();
    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render(vid);
    return this;
  },

  template: templateURL('src/templates/app.html')

});

