// pages/toc/toc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[{
      url:'/pages/index/index',
      title:'2020大事记',
      desc:'发生的大事',
      //navigate,redirect,switchTab,reLaunch,navigateBack,exit
      opentype:'switchTab'
    },
    {
      url:'/pages/index/index',
      title:'工作记录',
      desc:'工作点滴',
      opentype:'switchTab'
    },
    {
      url:'/pages/index/index',
      title:'生活记录',
      desc:'生活点滴',
      opentype:'switchTab'
    },
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.stopPullDownRefresh({
      complete: (res) => {},
    })
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