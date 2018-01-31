var Videos = Backbone.Collection.extend({

  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  parse: function(dataObj) {
    console.log(dataObj);
    return dataObj.items;
  },
  
  search: function(userString = 'Klay Thompson') {
    this.fetch({
      data: {
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true,
        maxResults: 5, 
        q: userString,
        key: window.YOUTUBE_API_KEY 
      }
    });
  }
});
