var VideoListView = Backbone.View.extend({
  
  render: function() {
    debugger
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.map(function(video, index) {
      new VideoListEntryView({el: this.$('.video-' + index), model: video}).render();
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
