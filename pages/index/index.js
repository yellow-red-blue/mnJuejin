//index.js
//获取应用实例
import {HTTP} from "../../utils/http.js"
import { Recommend } from "formateData.js";
const app = getApp()
Page({
  data: {
    recommendList: [],
    loading: true,
  },
  onReachBottom() {
    this.getRecommend()
  },
  onLoad: function () {
    this.getRecommend()
  },
  getRecommend() {
    const a = new HTTP()
    a.request({
      url: 'https://recommender-api-ms.juejin.im/v1/get_recommended_entry?suid=NUNqmRvef7BI3QNZAeyA&ab=welcome_3&src=web'
    }).then(res => {
      if (!res.length) {
        a._showErr('服务器开小差了请刷新重试')
      }
      this.setData({
        loading: false
      })
      let recommendList = this.data.recommendList
      res.forEach(item => {
        recommendList.push(new Recommend(item))
      })
      this.setData({
        recommendList
      })
    }).catch(err => {
      console.log(err)
    })
  }
})
