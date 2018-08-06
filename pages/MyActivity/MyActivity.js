var app = getApp();
Page({
    data: {
        winHeight: "",//窗口高度
        currentTab: 0, //预设当前项的值
        scrollLeft: 0, //tab标题的滚动条位置
    },
    // 滚动切换标签样式
    switchTab: function (e) {
        this.setData({
            currentTab: e.detail.current
        });
        //this.checkCor();
    },
    // 点击标题切换当前页时改变样式
    swichNav: function (e) {
        var cur = e.target.dataset.current;
        if (this.data.currentTaB == cur) { return false; }
        else {
            this.setData({
                currentTab: cur
            })
        }
    },
    onLoad: function (options) {
        //设置标题
        wx.setNavigationBarTitle({
            title: options.title + '详情'
        })
        //获取高度
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    winHeight: res.windowHeight -40,
                });
            }
        })
    }
})