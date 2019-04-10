// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jsonStr: '',
    inputUrl: ''
  },


  setUrl: function(event) {
    var page = this;
    page.setData({
      inputUrl: event.detail.value
    });
  },

  submit: function(event) {
    var page = this;
    wx.request({
      url: page.data.inputUrl,
      success: function(json) {
        page.setData({
          jsonStr: JSON.stringify(json.data)
        });
      },
      fail: function() {
        jsonStr: '获取失败'
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = this;
    // wx.request({
    //   url: 'https://localhost:44390/Port/StoreList',
    //   success: function (json) {
    //     page.setData({
    //       jsonStr: JSON.stringify(json)
        
    //     });
    //   }, fail: function () {
    //     page.setData({
    //       jsonStr: '接口调用错误'
    //     });
    //   }
      
    // });
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