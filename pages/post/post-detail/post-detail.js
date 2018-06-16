//定义一个变量通过require方法将数据给导入进来
var postData = require('../../../data/page-data.js');
Page({
  data: {
    isPlayingMusic: false
  },
  onLoad: function (options) {
    var postId = options.id;
    this.data.currentPostId = postId;
    var postsData = postData.postsList[postId];
    // console.log(postsData);
    //因为数据是同步加载的所以用以下方式将数据放到上面的data中
    // this.data.postsData = postsData;
    this.setData({
      postsData: postsData
    })

    // var postsCollected = {
    //   1:"true",
    //   2:"false",
    //   3:"true",
    // },
    //从缓存里面读取文章有没有收藏 这是读取的是所有的文章 这是同步接口
    var postsCollected = wx.getStorageSync('posts_Collected')

    //判断postsCollected是不是存在的
    if (postsCollected) {
      //获取当前的文章有没有收藏
      var postCollected = postsCollected[postId];
      this.setData({
        collected: postCollected
      })
    } else {
      var postsCollected = {}
      postsCollected[postId] = false;
      wx.setStorageSync('posts_Collected', postsCollected);

    }


  },
  onCollectedTap: function (event) {
    var postsCollected = wx.getStorageSync('posts_Collected');
    //获取当前的文章有没有收藏
    var postCollected = postsCollected[this.data.currentPostId];
    //取反  收藏编程未收藏的 未收藏的编程收藏的
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    //更新文章是否收藏的缓存值
    wx.setStorageSync('posts_collected', postsCollected);

    this.setData({
      collected: postCollected
    })
    //提示框
    // wx.showToast({
    //   title: postCollected ? "收藏成功" :"收藏失败",
    // })
    //模态框
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })


  },
  //分享操作
  onShareTap: function (event) {
    var itemLists = ['微信', '微博', '腾讯QQ']
    //​显示操作菜单
    wx.showActionSheet({
      itemList: itemLists,
      itemColor: "#0ff",
      success: function (res) {
        wx.showModal({
          title: '用户分享给' + itemLists[res.tapIndex],
          content: '用户是否分享给' + itemLists[res.tapIndex] + '好友',
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })

  },
  //音乐播放功能实现
  onMusicTap: function (event) {
    //定义一个变量 判断当前是不是播放状态
    var isPlayingMusic = this.data.isPlayingMusic;
    if (isPlayingMusic) {
      //暂停状态
      wx.pauseBackgroundAudio();
      //如果音乐暂停 就让音乐暂停
      this.setData({
        isPlayingMusic: false
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
        title: "此时此刻",
        coverImgUrl: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000",
        controls: true
      });
      //如果音乐播放 就设置播放状态
      this.setData({
        isPlayingMusic: true

      })
    }

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