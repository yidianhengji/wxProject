var httpRequest = require('../../utils/request.js');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },
    
    //表单提交按钮
    formSubmit: function (e) {
        var _this = this;
        if (e.detail.value.name==''){
            wx.showModal({
                title: '温馨提示',
                content: '请输入真实姓名',
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    }
                }
            })
        } else if (e.detail.value.card_number == ''){
            wx.showModal({
                title: '温馨提示',
                content: '请输入身份证号码',
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    }
                }
            })
        } else if (e.detail.value.card_number.length != '18') {
            wx.showModal({
                title: '温馨提示',
                content: '请输入18位身份证号码',
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                    }
                }
            })
        } else {
            var data = {
                name: e.detail.value.name,
                card_number: e.detail.value.card_number,
            }
            httpRequest.requestHeader("authentication/addAuthentication.do", data, function (data) {
                if (data.status == 200) {
                    wx.showToast({
                        title: '成功',
                        icon: 'succes',
                        duration: 1000,
                        mask: true
                    })
                }
            });
        }
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