// pages/addr/edit.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addr: {}
  },

  formSubmit: function(e) {
    var page = this;
    page.setData({
      addr: e.detail.value
    });
    console.log()
    wx.request({
      url: app.globalData.ipUrl + 'SaveOrUpdateAddr',
      data: this.data.addr,
      success: json => {
        console.log(json);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);

    wx.request({
      url: app.globalData.ipUrl + 'GetAddrById?id=' + options.id,
      success: json => {
        console.log(json.data);
        var page = this;
        page.setData({
          addr: json.data
        });
      }
    });
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