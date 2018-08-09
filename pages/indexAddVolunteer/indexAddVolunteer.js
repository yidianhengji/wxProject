import WxValidate from '../../utils/WxValidate.js'

const App = getApp()

Page({
    data: {
        currentTab: 0, //预设当前项的值
        heightBox: '88px',
        form: {
            name: '',
            sex: '1',
            date: '',
            educational_level: '',
            identity: '0',
            school_name1: '',
            major_class1: '',
            industry1: '',
            school_name2: '',
            major_class2: '',
            industry2: '',
            is_duty: '1',
            service_time: '1',
            phone: '',
            domicile: ''
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
        is_duty: [
            { name: '有', value: '1', checked: 'true' },
            { name: '否', value: '2' },
        ],
        service_time: [
            { name: '工作日', value: '1', checked: 'true' },
            { name: '周末', value: '2' },
        ],
    },
    
    // 身份切换
    swichNav: function (e) {
        var up = "form.identity";
        var cur = e.target.dataset.current;
        if (cur==0){
            this.setData({
                heightBox: "88px",
            })
        } else if (cur == 1){
            this.setData({
                heightBox: "44px",
            })
        } else if (cur == 2) {
            this.setData({
                heightBox: "0px",
            })
        } else if (cur == 3) {
            this.setData({
                heightBox: "132px",
            })
        }
        if (this.data.currentTaB == cur) {
            return false;
        }else {
            this.setData({
                currentTab: cur,
                [up]: cur
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
    //是否曾参与义务服务
    bindIsdutyChange: function(e){
        var up = "form.is_duty";
        this.setData({
            [up]: e.detail.value,
        })
    },
    //志愿者须知
    addVolunteerNotes: function(){
        wx.navigateTo({
            url: '../indexAddNotes/index'
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
            date: {
                required: true,
            },
            phone: {
                required: true,
                tel: true
            },
            domicile: {
                required: true
            }
        }
        // 验证字段的提示信息，若不传则调用默认的信息
        const messages = {
            name: {
                required: '请输入姓名',
            },
            date: {
                required: '请选择时间',
            },
            phone: {
                required: '请输入联系方式',
                tel: '请输入正确的联系方式'
            },
            domicile: {
                required: '请输入居住地址',
            }
        }
        // 创建实例对象
        this.WxValidate = new WxValidate(rules, messages)
    },
})