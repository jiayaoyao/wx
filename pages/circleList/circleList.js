//index.js
//获取应用实例
var app = getApp();

Page({
  data: {
    circles: ['交友圈','相亲圈','二手交易圈','枪支圈','同性恋圈','资料圈']
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //创建选择的圈子
  create:function(){
    wx.navigateTo({
      url: '../createCircle/createCircle'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    wx.setNavigationBarTitle({
      title: '创建圈子'
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
