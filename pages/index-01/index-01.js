//定义一个变量将数据给导入进来
var postData = require("../../data/page-data.js");


Page({

  /**
   
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //往data中添加数据然后绑定到页面上
    this.setData({ post_key: postData.postsList })


  },

  //点击每一个列表进入详情页
  inTap: function (event) {
    //获取每篇文章的id
    var postId = event.currentTarget.dataset.postid;
    console.log(postId);
    wx.navigateTo({
      url: '../post/post-detail/post-detail?id' + postId
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})