var SearchView = Backbone.View.extend({

  initialize: function() {
    this.$el.on('click', 'button', function() {
      this.search();
      $('.form-control').val('');
    }.bind(this));
    
    this.$el.on('keyup', 'input', function(event) {
      this.search();
      if (event.keyCode === 13) {
        $('.form-control').val('');
      }
    }.bind(this));
  },
  
  search: function() {
    var query = $('.form-control').val();
    if (query !== '') {
      this.collection.search(query);
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
