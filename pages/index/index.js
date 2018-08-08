var httpRequest = require('../../utils/request.js');
const app = getApp();

Page({
    data: {
        phoneNumber: '',
        globalRoleData: '',
        dataList: [
            { "title": "环境保护", "uuid": "153049720572388", "url": "../image/indexListIcon/icon1.png", "path": "../indexTeamList/indexTeamList" },
            { "title": "老人关爱", "uuid": "153049724075277", "url": "../image/indexListIcon/icon2.png", "path": "../indexTeamList/indexTeamList" },
            { "title": "手工课堂", "uuid": "153049725197393", "url": "../image/indexListIcon/icon3.png", "path": "../indexTeamList/indexTeamList" },
            { "title": "科创园地", "uuid": "153049726659970", "url": "../image/indexListIcon/icon4.png", "path": "../indexTeamList/indexTeamList" },
            { "title": "亲子活动", "uuid": "153049728164352", "url": "../image/indexListIcon/icon5.png", "path": "../indexTeamList/indexTeamList" },
            { "title": "家电维修", "uuid": "153049730503275", "url": "../image/indexListIcon/icon6.png", "path": "../indexTeamList/indexTeamList" },
            { "title": "志愿者列表", "uuid": "", "url": "../image/indexListIcon/icon7.png", "path": "../indexvolunteerList/indexvolunteerList" },
            { "title": "预约服务", "uuid": "", "url": "../image/indexListIcon/icon8.png" },
            { "title": "管理中心", "uuid": "", "url": "../image/indexListIcon/icon9.png", "path": "../user/user" }
        ]
    },
    onLoad: function () {
        //查询服务热线
        var _this = this;
        httpRequest.requestHeader("hotline/queryHotline.do", '', function (data) {
            _this.data.phoneNumber = "" + data.data.phone+""
        });

        const app = getApp();
        _this.data.globalRoleData = app.globalData.globalRole
        
    },
    //页面跳转
    clickIndexView: function (event) {
        if (event.currentTarget.dataset.itemUuid!=''){
            wx.navigateTo({
                url: event.currentTarget.dataset.itemPath + '?title=' + event.currentTarget.dataset.itemTitle + '&uuid=' + event.currentTarget.dataset.itemUuid
            })
        }else {
            wx.navigateTo({
                url: event.currentTarget.dataset.itemPath
            })
        }
    },
    //拨打电话
    clickTelUser: function () {
        var _this = this;
        var phoneNumber = _this.data.phoneNumber
        var data_s = phoneNumber.toString();
        console.log(data_s)
        var ddd = "asdsa"
        console.log(ddd)
        debugger
        wx.makePhoneCall({
            phoneNumber: data_s,
            success: function () {
                console.log("拨打电话成功！")
            },
            fail: function () {
                console.log("拨打电话失败！")
            }
        })
    }
})
