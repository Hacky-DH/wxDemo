Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    color: 'lightgray',
    news: [
      '2020年1月20日新型冠状病毒感染肺炎在武汉爆发，逐渐传遍全国。',
      '截止2020年1月31日12点全国确诊人数9720人，疑似15238人，死亡213人，治愈178人。',
      '大部分互联网公司由于疫情延迟到正月十七上班，初十到十四远程上班。',
      '2020年1月27日科比飞机失事，和其二女儿突然去世。'
    ],
  },
  
  colors: ['#1B9AF7', '#A5DE37', '#FEAE1B', '#FF4351', '#7B72E9', 'lightgray'],

  countClick : function() {
    this.setData({
      count: this.data.count + 1,
      color: this.colors[this.data.count % this.colors.length]
    });
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
    console.info("refresh");
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