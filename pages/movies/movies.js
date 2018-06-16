Page({
  onLoad:function(event){
    wx.request({ 
      url: 'https://b.com/movie/post_tep',
      data:{},
      method:"GET",
      header: {
        'Content-Type': 'json'
      }, 
      success:function(res){ 
        // console.log(res);
        console.log(res.statusCode)
      },
    
      fail:function(error){
        console.log("error");
      }
    })
  },
  onMoreTap:function(event){
    //获取每个电影的id
    var category = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'more-movies/more-movies?category=' + category
      // url: 'more-movies/more-movies'
      
    })
  }
})  