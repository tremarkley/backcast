var VideoListEntryView = Backbone.View.extend({

  render: function() {
    // debugger
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
