export class HTTP {
  constructor() {

  }
  request(params) {
    const _that = this
    return new Promise((resolve, reject) => {
      wx.request({
        url: params.url,
        method: params.method || 'GET',
        data: params.data,
        success: (res) => {
          if (res.data.m = 'ok') {
            const data = res.data.d
            resolve(data)
          } else {
            this.showErr(res.m)
          }
        },
        fail: (err) => {
          _that.showErr(res.m)
        }
      })
    })
  }
  showErr(errMsg) {
    wx.showToast({
      title: errMsg,
      icon: 'none',
    })
  }
}