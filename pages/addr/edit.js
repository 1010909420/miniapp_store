// pages/addr/edit.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addr: {},
    addrId: 0,
    userId: 0,
    radio1: false,
    radio0: true
  },

  delAddr: function(event) {
    // console.log(event.currentTarget.dataset.id);
    var addrId = event.currentTarget.dataset.id;
    wx.showModal({
      title: '是否确认',
      content: '删除后不可恢复',
      success: res => {
        if(res.confirm) {
          wx.request({
            url: app.globalData.ipUrl + 'DelAddrById',
            data: {
              id: addrId
            },
            method: 'post',
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            success: json => {
              console.log(json.data);

              wx.showToast({
                title: '已删除',
              });
              
              
              setTimeout(function() {
                wx.switchTab({
                  url: 'addr',
                })
              }, 1500); 
            }
          })
        }
      }
    })
  },

  formSubmit: function(e) {
    // var page = this;
    // page.setData({
    //   addr: e.detail.value
    // });
    var sendAddr = e.detail.value;

    wx.request({
      url: app.globalData.ipUrl + 'SaveOrUpdateAddr',
      data: {
        id: this.data.addrId,
        userId: this.data.userId,
        name: sendAddr.name,
        mobile: sendAddr.mobile,
        addr: sendAddr.addr,
        defaultAddr: sendAddr.defaultAddr
      }, 
      method: 'post',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: json => {
        console.log(sendAddr);
        console.log(json.data);

        wx.showToast({
          title: '成功',
        });
        
        setTimeout(function() {
          wx.switchTab({
            url: 'addr',
          })
        }, 1500);

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);

    wx.request({
      url: app.globalData.ipUrl + 'GetAddrById?id=' + options.id,
      success: json => {
        console.log(json.data);
        var page = this;
        page.setData({
          addr: json.data,
          addrId: options.id,
          userId: options.userId
        });
        if (this.data.addr != null && this.data.addr.defaultAddr == 1) {
          page.setData({
            radio0: false,
            radio1: true
          });
        }
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