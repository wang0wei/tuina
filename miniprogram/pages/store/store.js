// pages/store/store.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
    ],
    active:'TuinaData',
    currentSelected:'TuinaData',
    listData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getListData();
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

  },
  onClick(ev){
    //console.log(ev);
    this.setData({
      currentSelected:ev.detail.name,
      listData:[]//清空list数组，避免渲染先出现格式后显示数据
    });
    this.getListData();
  },
  getListData(){
    db.collection(this.data.currentSelected).get().then((res) => {
      //console.log(res);
      this.setData({
        listData: res.data
      })
    })
  },
  handleTuinaDetail(ev) {
    //console.log(ev)
    let id = ev.target.dataset.id;
    wx.navigateTo({
      url: '/pages/store/tuinaDetail/tuinaDetail?id=' + id
    })
   },
  handleMedicDetail(ev) {
    let id = ev.target.dataset.id;
    wx.navigateTo({
      url: '/pages/store/medicDetail/medicDetail?id=' + id
    })
  }, handleSidelineDetail(ev) {
    let id = ev.target.dataset.id;
    wx.navigateTo({
      url: '/pages/store/sidelineDetail/sidelineDetail?id=' + id
    })
  }
})