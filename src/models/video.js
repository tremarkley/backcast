var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    // debugger;
    this.set('id', video.id.videoId);
  },

  select: function() {
    debugger
    this.trigger('select', this);
  }

});
