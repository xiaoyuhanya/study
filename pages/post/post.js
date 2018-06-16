//定义一个变量通过require方法将数据给导入进来
var postData = require('../../data/page-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onTap: function (event) {
    //获取每篇文章的id 
    var postId = event.currentTarget.dataset.postid;
    console.log(postId);
    //跳转到详情页的时候将id也传过去 
    wx.navigateTo({
      url: '../post/post-detail/post-detail?id=' + postId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // this.data.postList = postData.postList;

    this.setData({ posts_key: postData.postsList });

  },

  //点击轮播图跳转到详情页
  // onSwiperItemTap:function(event){
  //   var postId = event.currentTarget.dataset.postid;    
  //   wx.navigateTo({
  //     url: '../post/post-detail/post-detail?id='+postId
  //   })
  // },
  //点击轮播图跳转到详情页
  onSwiperTap: function (event) {
    //target指的是当前点击的组件 currentTarget指的事件捕获的组件
    var postId = event.target.dataset.postid;
    console.log(postId)
    wx.navigateTo({
      url: '../post/post-detail/post-detail?id=' + postId
    })
  }






})