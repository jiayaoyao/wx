//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gotoCircle: function() {
    wx.navigateTo({
      url: '../circle/circle'
    })
  },
  gotoCreateCircle:function(){
    wx.navigateTo({
      url: '../createCircle/circleList'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    wx.setNavigationBarTitle({
      title: '圈子'
    })
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
