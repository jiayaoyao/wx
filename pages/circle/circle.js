// pages/circle/circle.js

Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
      title: '圈子de名字'
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  createPost:function() {
    wx.navigateTo({
      url: '../posting/posting'
    })
  },
  gotoPost: function() {
    wx.navigateTo({
      url: '../post/post'
    })
  }
})