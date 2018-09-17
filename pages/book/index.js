// pages/book/index.js
import {apiConfigUrl} from "../../server/serverUrl/activeityUrl.js"
import {HTTP} from "../../utils/http.js"
import {BookList} from "formateBook.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageNum: 1,
    bookList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSmallBook()
  },
  getSmallBook() {
    let pageNum = this.data.pageNum
    const http = new HTTP()
    http.request({
      url: apiConfigUrl.getSmallBook,
      data: {
        pageNum: pageNum,
        uid: '',
        client_id: '',
        token: '',
        src: 'web',
        alias: ''
      }
    }).then(res => {
      if (!res.length) {
        return false
      }
      pageNum += 1
      this.setData({
        pageNum
      })
      console.log(res)
      let bookList = []
      res.forEach(el => {
        bookList.push(new BookList(el))
      });
      bookList = [...this.data.bookList, ...bookList]
      this.setData({
        bookList
      })
      
    }).catch(err => {
      console.log(err)
    })
  },
  jumpBookDetail(e) {
    console.log(e)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../../pages/bookDetail/bookDetail?id=${id}`,
      success() {
        
      }
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
    this.getSmallBook()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})