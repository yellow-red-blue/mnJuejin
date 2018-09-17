// components/activeity-item/activeity-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activeity: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    joinAcity(e) {
      console.log(e)
      const url = e.currentTarget.dataset.url
      console.log(url)
      wx.navigateTo({
        url: `../../pages/outer/outer?webUrl=${url}`,
        success: () => {

        }
      })
    }
  }
})
