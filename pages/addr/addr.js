// pages/addr/addr.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addrlist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },


  edit: function (event) {
    wx.navigateTo({
      url: 'edit?id=' + event.currentTarget.dataset.id + '&userId=' + app.globalData.userId,
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
    var page = this;
    var userId = app.globalData.userId;
    wx.request({
      url: app.globalData.ipUrl + 'GetAddrListByUserId',
      data: {
        id: userId
      },
      method: 'post',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: json => {
        console.log(json);
        this.setData({
          addrlist: json.data
        });
      }
    })
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