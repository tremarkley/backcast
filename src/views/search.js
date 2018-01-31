var SearchView = Backbone.View.extend({

  initialize: function() {
    this.$el.on('click', 'button', function() {
      this.search();
      $('.form-control').val('');
    }.bind(this));
    
    this.$el.on('keyup', 'input', function(event) {
      if (event.keyCode === 13) {
        this.search();
        $('.form-control').val('');
      } else {
        clearTimeout(window.debounce);
        window.debounce = setTimeout(this.search.bind(this), 500);
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
