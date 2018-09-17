// components/preImage/preImage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgList: Array,
    imgListIndex: Number
  },
  /**
   * 组件的初始数据
   */
  data: {
    oneImageStatus: false,
    twoImageStatus: false,
    moreImageStatus: false,
    twoList: [2, 4],
    moreList: [3, 5, 6, 7, 8, 9]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkLargeImage(e) {
      const currentIndex = e.currentTarget.dataset.index
      const current = this.properties.imgList[currentIndex]
      wx.previewImage({
        urls: this.properties.imgList,
        current,
        success() {
          
        }
      })
      console.log(e)
      console.log(this.properties.imgListIndex)
    }
  },
  ready() {
    const length = this.properties.imgList.length
    const oneImageStatus =  length === 1
    const twoImageStatus =  this.data.twoList.includes(length)
    const moreImageStatus = this.data.moreList.includes(length)
    this.setData({
      oneImageStatus,
      twoImageStatus,
      moreImageStatus
    })
  },
})
