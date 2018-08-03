//app.js
var httpRequest = require('utils/request.js');

App({
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);

        wx.login({
            success: function (code) {
                wx.getUserInfo({
                    success: function (res) {
                        var app = getApp();
                        app.globalData.userInfo = res.userInfo
                        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                        // 所以此处加入 callback 以防止这种情况
                        if (app.userInfoReadyCallback) {
                            app.userInfoReadyCallback(res)
                        }

                        /*
                        * 小程序自带的登录
                        */
                        wx.login({
                            success: res => {
                                var code = res; //返回code
                                /*
                                * 小程序微信授权登陆
                                */
                                var app = getApp();
                                var data = {
                                    code: code.code,
                                    nickName: app.globalData.userInfo.nickName,
                                    gender: app.globalData.userInfo.gender,
                                    avatarUrl: app.globalData.userInfo.avatarUrl,
                                };
                                httpRequest.request("xcxlogin/login.do", data, function(data){
                                    var app = getApp();
                                    if (app.globalData.globalUserId==''){
                                        app.globalData.globalUserId = data.data.user_id
                                    }else {
                                        console.log("写入失败")
                                    }

                                    if (app.globalData.globalRole == '') {
                                        app.globalData.globalRole = data.data.role
                                    } else {
                                        console.log("写入失败")
                                    }

                                    if (app.globalData.globalIsAuthentication == '') {
                                        app.globalData.globalIsAuthentication = data.data.is_authentication
                                    } else {
                                        console.log("写入失败")
                                    }
                                    
                                    if (data.data.is_authentication==2){
                                        wx.showModal({
                                            title: '温馨提示',
                                            content: '您还未实名认证！请先实名认证。',
                                            success: function (res) {
                                                if (res.confirm) {
                                                    wx.navigateTo({
                                                        url: '../userName/userName'
                                                    })
                                                } else if (res.cancel) {
                                                    console.log('用户点击取消')
                                                }
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                });
            }
        });
    },
    globalData: {
        userInfo: null,//用户信息
        path: 'http://47.106.163.198:8081/wxbacksys/',
        globalRole: '',//权限
        globalUserId: '',//用户id
        globalIsAuthentication: '',//是否实名
    }
})


/*
  "pages/index/index",  首页
  "pages/list/list",     首页列表详情
  "pages/user/user",    管理中心
  "pages/MyVolunteer/MyVolunteer",   我的志愿队
  "pages/MyEvaluate/MyEvaluate",     我的志愿队评价
  "pages/MyActivity/MyActivity"      我参与的活动
  "pages/MyNews/MyNews", 我的消息
*/