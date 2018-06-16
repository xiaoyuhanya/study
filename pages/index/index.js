Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onTap: function () {
    // console.log(1)
    // wx.navigateTo是跳转到新的一个页面 且上面有返回按钮 只是将页面隐藏而已，并没有将页面关闭
    //wx.redirectTo也是跳转新的一个页面，但是他讲关闭前面的页面，没有返回的按钮
    // wx.navigateTo({
    //   url: '../post/post'
    // })
    wx.navigateTo({
      url: '../post/post-detail/post-detail'
    })

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },







})

