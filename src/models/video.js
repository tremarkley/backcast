var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
    this.getDetails();
  },
  
  getDetails: function() {
    context = this;
    Backbone.ajax({
      
      url: 'https://www.googleapis.com/youtube/v3/videos',
      
      type: 'GET',

      data: {
        part: 'contentDetails',
        id: context.get('id'),
        key: window.YOUTUBE_API_KEY 
      },
      
      success: function(data) {
        console.log(data);
        context.set('videoDetails', data);
      },
      
      error: function(data) {
        console.log('DIDN\'T WORK', data);
      }
    });
    
  }

});
