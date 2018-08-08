import WxValidate from '../../utils/WxValidate.js'

const App = getApp()

Page({
    data: {
        currentTab: 0, //预设当前项的值
        form: {
            name: '',
            sex: '',
            date: '',
            educational_level: '',
            identity: '',
        },
        sex: [
            { name: '男', value: '1', checked: 'true' },
            { name: '女', value: '2' },
        ],
        educational_level: [
            '中专及以下',
            '大专',
            '本科',
            '本科以上'
        ],
        // identity: [
        //     { name: '学生', value: '1', checked: 'true' },
        //     { name: '在职', value: '2' },
        //     { name: '待业', value: '3' },
        //     { name: '其它', value: '4' },
        // ]
    },
    switchTab: function (e) {
        this.setData({
            currentTab: e.detail.current
        });
        //this.checkCor();
    },
    // 点击标题切换当前页时改变样式
    swichNav: function (e) {
        var up = "form.identity";
        var cur = e.target.dataset.current;
        if (this.data.currentTaB == cur) {
            return false;
        }else {
            this.setData({
                currentTab: cur,
            })
        }
    },
    //性别
    bindSexChange(e) {
        var up = "form.sex";
        this.setData({
            [up]: e.detail.value,
        })
    },
    //时间控件
    bindDateChange: function (e) {
        var up = "form.date";
        this.setData({
            [up]: e.detail.value
        })
    },
    //教育程度
    bindEducationChange: function(e){
        var up = "form.educational_level";
        this.setData({
            [up]: e.detail.value,
        })
    },
    onLoad() {
        this.initValidate()
        console.log(this.WxValidate)
    },
    showModal(error) {
        wx.showModal({
            content: error.msg,
            showCancel: false,
        })
    },
    submitForm(e) {
        const params = e.detail.value

        console.log(params)

        // 传入表单数据，调用验证方法
        if (!this.WxValidate.checkForm(params)) {
            const error = this.WxValidate.errorList[0]
            this.showModal(error)
            return false
        }

        this.showModal({
            msg: '提交成功',
        })
    },
    initValidate() {
        // 验证字段的规则
        const rules = {
            name: {
                required: true,
            },
            sex: {
                required: true,
            },
            date: {
                required: true,
            },
        }
        // 验证字段的提示信息，若不传则调用默认的信息
        const messages = {
            name: {
                required: '请输入姓名',
            },
            sex: {
                required: '请选择性别',
            },
            date: {
                required: '请选择时间',
            }
            
        }
        // 创建实例对象
        this.WxValidate = new WxValidate(rules, messages)
    },
})