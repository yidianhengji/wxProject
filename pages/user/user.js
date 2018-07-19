// pages/user/user.js
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        //居民
        dataList1: [
            { name: '我的志愿队', icon: '1', path: '../MyVolunteer/MyVolunteer' },
            { name: '我的活动', icon: '6', path: '../MyActivity/MyActivity' },
            { name: '我的预约', icon: '3', path: '' },
            { name: '我的消息', icon: '5', path: '../MyNews/MyNews', status: true },
        ],
        //志愿服务队
        dataList2: [
            { name: '志愿队管理', icon: '1', path: '' },
            { name: '活动管理', icon: '6', path: '' },
            { name: '预约服务管理', icon: '3', path: '' },
            { name: '我的消息', icon: '5', path: '../MyNews/MyNews', status: true },
        ],
        //社区管理员
        dataList3: [
            { name: '志愿队管理', icon: '1', path: '' },
            { name: '居民信息管理', icon: '2', path: '' },
            { name: '预约服务管理', icon: '3', path: '' },
            { name: '评价管理', icon: '4', path: '' },
            { name: '我的消息', icon: '5', path: '', status: true },
        ],
        //消息记录
        newsNum: '2',
        userInfoList: app.globalData
    },
    //点击跳转事件
    clickIndexView: function (event) {
        wx.navigateTo({
            url: event.currentTarget.dataset.itemPath + '?title=' + event.currentTarget.dataset.itemTitle
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})