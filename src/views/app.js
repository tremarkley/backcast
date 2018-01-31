var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.search();
    this.listenTo(this.videos, 'sync', this.selectTop); 
    this.render();
  },
  
  selectTop: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },

  render: function() {
    this.$el.html(this.template());
    new VideoListView({
      el: $('.list'),
      collection: this.videos
    }).render();
    
    new VideoPlayerView({
      el: $('.player'),
      collection: this.videos
    }).render();
    
    new SearchView({
      el: $('.search'),
      collection: this.videos
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});

