// pages/fengguang/fengguang.js
Page({
  data: {
    goods: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = this;
    wx.request({
      url: 'https://localhost:44390/Store/JsonList',
      success: function (json) {
        page.setData({
          goods: json.data
        });
      }, fail: function () {
        console.log('获取失败');
      }
    });
  },

  test: function(event) {
    wx.navigateTo({
      url: 'show?id=' + event.currentTarget.dataset.id,
    })
  },

  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})