// pages/hot/index.js
import {apiConfigUrl} from "../../server/serverUrl/activeityUrl.js"
import {HTTP} from "../../utils/http.js"
import {Hot} from "formateHot.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstRequest: true,
    hotList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  previewImage() {
    wx.previewImage({
      urls: this.data.imgList,
      current: 'https://user-gold-cdn.xitu.io/2018/9/13/165d15986050c281?w=1080&h=1440&f=jpeg&s=216866',
      success: () => {

      }
    })
  },
  onLoad: function (options) {
    this.getRecommend()
  },
  getRecommend() {
    const http = new HTTP()
    http.request({
      url: apiConfigUrl.getHotRecommend,
      data: {
        uid: '584904b761ff4b006cb57784',
        device_id: '1536747040079',
        token: 'eyJhY2Nlc3NfdG9rZW4iOiJsaGtFRnhscjhLT3ppb3hKIiwicmVmcmVzaF90b2tlbiI6Im1OR2pXYXZ4ODZVaW1EWTciLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ==',
        src: 'web',
        before: this.data.firstRequest ? '' : '2018-09-13T10:43:05.007Z',
        limit: 30
      }
    }).then(res => {
      console.log(res)
      if (!res.list.length) {
        return false
      }
      this.setData({
        firstRequest: false
      })
      const lists = []
      res.list.forEach(item => {
        lists.push(new Hot(item))
      })
      let hotList = [...this.data.hotList, ...lists]
      this.setData({
        hotList
      })
      
    }).catch(err => {
      console.log(err)
    })
  },
  successLoad() {
    console.log(77777)
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
    this.getRecommend()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})