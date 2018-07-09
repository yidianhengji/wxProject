//index.js
//获取应用实例
const app = getApp()
Page({
    data: {
        dataList: [
            { "title": "环境保护", "url": "../image/indexListIcon/icon1.png", "path": "../list/list" },
            { "title": "老人关爱", "url": "../image/indexListIcon/icon2.png", "path": "../list/list" },
            { "title": "手工课堂", "url": "../image/indexListIcon/icon3.png", "path": "../list/list" },
            { "title": "科创园地", "url": "../image/indexListIcon/icon4.png", "path": "../list/list" },
            { "title": "亲子活动", "url": "../image/indexListIcon/icon5.png", "path": "../list/list" },
            { "title": "家电维修", "url": "../image/indexListIcon/icon6.png", "path": "../list/list" },
            { "title": "志愿者列表", "url": "../image/indexListIcon/icon7.png" },
            { "title": "预约服务", "url": "../image/indexListIcon/icon8.png" },
            { "title": "管理中心", "url": "../image/indexListIcon/icon9.png", "path": "../user/user" }
        ]
    },
    //事件处理函数
    clickIndexView: function (event) {
        wx.navigateTo({
            url: event.currentTarget.dataset.itemPath + '?title=' + event.currentTarget.dataset.itemTitle
        })
    },
    clickTelUser: function () {
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
