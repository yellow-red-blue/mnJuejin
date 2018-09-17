// pages/activity/index.js
import {apiConfigUrl} from "../../server/serverUrl/activeityUrl.js"
import {HTTP} from "../../utils/http.js"
import {formatTime} from "../../utils/util.js"
import {Acitiveity} from "formateData.js"
import { Activeity } from "./formateData.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 500,
    current: 0,
    imgHeightList: [],
    page: 1,
    hasMore: true,
    currentIndex: 0,
    currentCityAlias: '',
    acitiveityList: [],
    city: [
      {
        cityAlias: '',
        cityName: "热门城市",
        weight: 0
      },
      {
        cityAlias: 'beijing',
        cityName: "北京",
        weight: 0
      },
      {
        cityAlias: 'shanghai',
        cityName: "上海",
        weight: 0
      },
      {
        cityAlias: 'guangzhou',
        cityName: "广州",
        weight: 0
      },
      {
        cityAlias: 'shenzhen',
        cityName: "深圳",
        weight: 0
      },
      {
        cityAlias: 'hangzhou',
        cityName: "杭州",
        weight: 0
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiper()
    this.getHot(this.data.currentCityAlias)
  },
  selectCity(e) {
    const index = e.currentTarget.dataset.index
    const currentCityAlias = this.data.city[index].cityAlias
    this.setData({
      currentIndex: index,
      currentCityAlias,
      acitiveityList: [],
      hasMore: true,
      page: 1
    })
    this.getHot(this.data.currentCityAlias)
  },
  getHot(alias) {
    if (!this.data.hasMore) {
      return false
    }
    const http = new HTTP()
    const date = formatTime(new Date())
    const _that = this
    http.request({
      url: apiConfigUrl.getEventList,
      data: {
        uid: '',
        client_id: '',
        token: '',
        src: 'web',
        cityAlias: alias,
        orderType: 'satrtTime',
        pageNum: this.data.page,
        pageSize: 20
      }
    })
    .then(res => {
      console.log(res)
      if (!res.length) {
        this.setData({
          hasMore: false
        })
      }
      let page = this.data.page + 1
      this.setData({
        page
      })
      let originList = this.data.acitiveityList
      let acitiveityList = []
      res.forEach(item => {
        acitiveityList.push(new Activeity(item))
      })
      acitiveityList = originList.concat(acitiveityList)
      this.setData({
        acitiveityList
      })
    })
    .catch(err => {
      console.log(err)
    })
  },
  getSwiper() {
    const http = new HTTP()
    const date = formatTime(new Date())
    http.request({
      url: apiConfigUrl.getActiveitySwiper,
      data: {
        uid: '',
        client_id: '',
        src: 'web',
        orderType: 'satrtTime',
        bannerStartTime: date,
        pageNum: 1,
        pageSize: 20,
        showBanner: 1
      }
    })
    .then(res => {
      console.log(res)
      const swiperList = res
      this.setData({
        swiperList
      })
    })
    .catch(err => {
      console.log(err)
    })
  },
  imageLoad(e) {
    const imgWidth = e.detail.width
    const imgHeight = e.detail.height
    const radio = imgHeight / imgWidth
    const windowWidth = wx.getSystemInfoSync().windowWidth
    const height = windowWidth * radio
    let imgHeightList = this.data.imgHeightList
    imgHeightList[e.currentTarget.dataset.id] = height
    this.setData({
      imgHeightList
    })
  },
  bindchange(e) {
    this.setData({
      current: e.detail.current
    })
  },
  onReachBottom() {
    this.getHot(this.data.currentCityAlias)
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
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})