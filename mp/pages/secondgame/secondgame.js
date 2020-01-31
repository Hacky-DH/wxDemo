//var starttime;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: '手指放在圆圈上 Ready?Go!',
  },

  start: function(e) {
    this.starttime = new Date().getTime();
  },

  end: function(e) {
    var endtime = new Date().getTime();
    var diff_sec = (endtime-this.starttime)/1000.;
    var diff = Math.abs(diff_sec - 1);
    var ratio = new Number(diff*100).toFixed(2);
    var res;
    if(0<=diff&&0.05>diff) {
      res = '太准时了，简直是天才！';
    } else if(0.05<=diff&&0.1>diff) {
      res = '时间感不错，接近天才了！';
    } else if(0.1<=diff&&0.3>diff) {
      res = '水平不错，不过可以再精确些！';
    }else if(0.3<=diff&&0.5>diff) {
      res = '差强人意，继续努力吧！';
    }else if(0.5<=diff&&1>diff) {
      res = '太差劲了，居然差这么多！';
    }else {
      res = '无语了，差到瓜哇岛了！';
    }
    this.setData({
      result: '你按出了'+diff_sec+'秒，误差是'+ratio+'%\n'+res
    });
  },

  back: function() {
    wx.navigateBack({});
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
    });
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