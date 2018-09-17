# mnJuejin
自己练习的小程序。api来自掘金，如有侵权请联系我删除

自己练习过程中还是踩了不少的坑，之前一直用vue开发，总体上和vue差不多的方式但有些地方还是很不一样的， 写的过程中多踩踩坑就行了。

共有四个tab页面 和一些其他页面，

封装了wx.requst  和一些公共方法，

# 首页，
主要是数据的展示。首先将获取的数据根据页面需求进行model的改变，这样在view层就不必出现太多运算，而且在开发过程中 我们不必太注重关心后端的接口，
只需要把后端的接口用我们的class类改变一下即可。

# 沸点。
设计到多张图片的显示问题，需要用的自己写的样式组件，在我们点击当前图片时候可以调用微信的previewImage方法，进行放大显示，

# 小册
做了点击小册进入小册详细页面，这里我们用到了wx.Parse,将获取的json字符串的html进行转化成小程序模式。还有用了scroll——view，当我们点击目录
内容 和评论时 滚动到与之相对应的位置，此时需要动态的设置scroll-view的高度。

# 活动 
做了swiper 和点击进入外网页面。需要用到web-view 需要注意wev-view需要单独占一个页面，。然后通过wx.navigator到这个页面，动态页面只需要将动态值
通过options传入 ，当接受页面进行获取 即可。
这里可能会遇到这样一种需求 在外网页面，需要在跳转回小程序页面。 我遇到过一种情况是，外网的这个页面是很多公司业务需求的，不可能只根据我们当前业务引入微信
的jssdk，所以我们这里的做法时，在当前公共页面需要返回小程序页面时 通过网页redirectTo一个新的页面，新的页面引入微信的jssdk  返回小程序页面并进行传参。

# 组件 
做了一个骨架屏的公共组件，在某些文字显示页面避免用户等待过久的一些取巧方法。

# undo
1.首页的详情页面，和小册页面相似，就没做，
2.沸点页面的赞和评论 因为需要登录才能进行，暂时未做。
3. 小册详情和阅读。
4，跳到外网页面无法监听外网页面是否加载成功的事件。