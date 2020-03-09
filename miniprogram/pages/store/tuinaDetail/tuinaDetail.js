// pages/store/tuinadetail/tuinadetail.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    comments: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id = options.id;
    db.collection('TuinaData').doc(id).get().then((res) => {
      this.setData({
        detail: res.data
      });
      db.collection('CommentsData').where({
        CommentID: this.data.detail.TuinaID
      }).get().then((res) => {
        if (res.data.length) {
          this.setData({
            comments: res.data[0].Comments
          })
        }
      })
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  handleDetail() {
    let list=JSON.stringify(this.data.comments)
    wx.navigateTo({
      url: '/pages/store/commentDetail/commentDetail?commentsID=' + this.data.detail.TuinaID
    })
  }
})