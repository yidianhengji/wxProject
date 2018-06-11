//index.js
//获取应用实例
const app = getApp()
console.log(app)
Page({
  data: {
    dataList: [
      { "title": "环境保护", "url": "../image/indexListIcon/icon1.png" },
      { "title": "老人关爱", "url": "../image/indexListIcon/icon2.png" },
      { "title": "手工课堂", "url": "../image/indexListIcon/icon3.png" },
      { "title": "科创园地", "url": "../image/indexListIcon/icon4.png" },
      { "title": "亲子活动", "url": "../image/indexListIcon/icon5.png" },
      { "title": "家电维修", "url": "../image/indexListIcon/icon6.png" },
      { "title": "志愿者列表", "url": "../image/indexListIcon/icon7.png" },
      { "title": "预约服务", "url": "../image/indexListIcon/icon8.png" },
      { "title": "管理中心", "url": "../image/indexListIcon/icon9.png" }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickTelUser: function(){
    wx.makePhoneCall({
      phoneNumber: '18588773304',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  onLoad: function () {
    
  },
})
