// pages/bookDetail/bookDetail.js
import {apiConfigUrl} from "../../server/serverUrl/activeityUrl.js"
import {HTTP} from "../../utils/http.js"
import {BookList} from "../book/formateBook.js"
let WxParse = require('../../wxParse/wxParse.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    tabList: ['目录', '介绍', '评论'],
    currentTabIndex: 0,
    bookInfo: {},
    sectionList: [],
    buyList: [],
    commentInfo: {},
    scrollIntoView: '',
    scrollViewHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    let all = Promise.all([
      this.getListSection(options),
      this.getBookInfo(options),
      this.getListBuy(options),
      this.getHotList(options)
    ])
    all.then(res => {
      this.setData({
        loading: false
      })
      let bookInfo = res[1]
      let sectionList = res[0]
      let buyList = res[2]
      let commentInfo = res[3]
      this.setData({
        bookInfo,
        sectionList,
        buyList,
        commentInfo
      })
      let article = bookInfo.summaryHtml
      WxParse.wxParse('article', 'html', article, that, 5)
      this.getElementHeight('.book-info').then(res => {
        const bookHeight = res
      })
      Promise.all([this.getElementHeight('.book-info'), this.getElementHeight('.tab-operator')])
      .then(res => {
        const [bookHeight, tabHeight] = res
        let windowHeight = wx.getSystemInfoSync().windowHeight
        const scrollViewHeight = windowHeight - bookHeight - tabHeight - 10
        this.setData({
          scrollViewHeight
        })
      })
    })
  
  },
  getElementHeight(selector) {
    return new Promise((resolve, reject) => {
      let query = wx.createSelectorQuery()
      query.select(selector).boundingClientRect()
      query.exec(res => {
        resolve(res[0].height)
      })
    })
  },
  scrollToIndex(e) {
    const index = e.currentTarget.dataset.index
    const itemId = `scroll-to-index${index}`
    this.setData({
      currentTabIndex: index,
      scrollIntoView: itemId
    })
  },
  getListSection(options) {
    const http = new HTTP()
    return Promise.resolve(http.request({
      url: apiConfigUrl.getListSection,
      data: {
        id: options.id || '5b63fdba6fb9a04fde5ae6d0',
        uid: '',
        client_id: '',
        token: '',
        src: 'web'
      }
    }))
  },
  getBookInfo(options) {
    const http = new HTTP()
    return Promise.resolve(http.request({
      url: apiConfigUrl.getBookInfo,
      data: {
        id: options.id || '5b63fdba6fb9a04fde5ae6d0',
        uid: '',
        client_id: '',
        token: '',
        src: 'web'
      }
    }))
  },
  getListBuy(options) {
    const http = new HTTP()
    return Promise.resolve(http.request({
      url: apiConfigUrl.getListBuy,
      data: {
        id: options.id || '5b63fdba6fb9a04fde5ae6d0',
        uid: '',
        client_id: '',
        token: '',
        pageNum: 1,
        pageSize: 20,
        src: 'web'
      }
    }))
  },
  getHotList(options) {
    const http = new HTTP()
    return Promise.resolve(http.request({
      url: apiConfigUrl.getHotList,
      data: {
        targetId: options.id || '5b63fdba6fb9a04fde5ae6d0',
        pageNum: 1,
        pageSize: 5
      }
    }))
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