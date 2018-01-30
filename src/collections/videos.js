var Videos = Backbone.Collection.extend({

  model: Video,
  
  parse: function(dataObj) {
    return dataObj.items;
  },
  
  search: function(userString) {
    var context = this;
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true,
        maxResults: 5, 
        q: userString,
        key: window.YOUTUBE_API_KEY 
      },
      contentType: 'application/json',
      
      success: function(data) {
        console.log(data);
        context.set(context.parse(data));
        context.trigger('change');
      },
      
      error: function(data) {
        console.log('ERROR', data);
      }
    });
  }
});
