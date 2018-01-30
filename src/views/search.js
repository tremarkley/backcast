var SearchView = Backbone.View.extend({

  initialize: function() {
    this.$el.on('click', 'button', function() {
      this.search();
    }.bind(this));
    
    this.$el.on('keyup', 'input', function(event) {
      if (event.keyCode === 13) {
        this.search();
      }
    }.bind(this));
  },
  
  search: function() {
    var query = $('.form-control').val();
    if (query !== '') {
      this.collection.search(query);
      $('.form-control').val('');
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
