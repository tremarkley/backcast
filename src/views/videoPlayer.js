var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', this.render, this);
    this.collection.on('change', this.render, this);
  },

  render: function(mainVid = this.collection.at(0)) {
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(mainVid.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
