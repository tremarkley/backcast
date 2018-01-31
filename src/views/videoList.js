var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.map(function(video, index) {
      new VideoListEntryView({el: $('.video-' + index), model: video}).render();
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
