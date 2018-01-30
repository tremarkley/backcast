var VideoListView = Backbone.View.extend({
  
  render: function() {
    this.collection.map(function(video){
      var view = new VideoListEntryView({model: video}).render();
    });
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
