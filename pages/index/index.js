var httpRequest = require('../../utils/request.js');
const app = getApp();

Page({
    data: {
        phoneNumber: '',
        globalRoleData: '',
        dataList: [
            { "title": "环境保护", "uuid": "153049720572388", "url": "../image/indexListIcon/icon1.png", "path": "../list/list" },
            { "title": "老人关爱", "uuid": "153049724075277", "url": "../image/indexListIcon/icon2.png", "path": "../list/list" },
            { "title": "手工课堂", "uuid": "153049725197393", "url": "../image/indexListIcon/icon3.png", "path": "../list/list" },
            { "title": "科创园地", "uuid": "153049726659970", "url": "../image/indexListIcon/icon4.png", "path": "../list/list" },
            { "title": "亲子活动", "uuid": "153049728164352", "url": "../image/indexListIcon/icon5.png", "path": "../list/list" },
            { "title": "家电维修", "uuid": "153049730503275", "url": "../image/indexListIcon/icon6.png", "path": "../list/list" },
            { "title": "志愿者列表", "uuid": "", "url": "../image/indexListIcon/icon7.png", "path": "../indexvolunteerList/indexvolunteerList" },
            { "title": "预约服务", "uuid": "", "url": "../image/indexListIcon/icon8.png" },
            { "title": "管理中心", "uuid": "", "url": "../image/indexListIcon/icon9.png", "path": "../user/user" }
        ]
    },
    onLoad: function () {
        //查询服务热线
        var _this = this;
        httpRequest.requestHeader("hotline/queryHotline.do", '', function (data) {
            _this.data.phoneNumber = data.data.phone
        });

        const app = getApp();
        _this.data.globalRoleData = app.globalData.globalRole
        
    },
    //页面跳转
    clickIndexView: function (event) {
        wx.navigateTo({
            url: event.currentTarget.dataset.itemPath + '?title=' + event.currentTarget.dataset.itemTitle
        })
    },
    //拨打电话
    clickTelUser: function () {
        var _this = this;
        wx.makePhoneCall({
            phoneNumber: _this.data.phoneNumber,
            success: function () {
                console.log("拨打电话成功！")
            },
            fail: function () {
                console.log("拨打电话失败！")
            }
        })
    }
})
