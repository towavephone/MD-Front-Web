var superagent = require('superagent');
var moment = require('moment');
var xhr = require('./xhr');
var cat_selection_list = [];
var cat_data;

function getAppType (app_id) {
    console.log(typeof (app_id), app_id);
    switch (parseInt(app_id)) {
    case 1:
        return '微信胡桃街';
    case 2:
        return '微信拼多多/微信支付';
    case 3:
        return '微信微拼';
    case 4:
        return '拼多多App/微信支付';
    case 5:
        return '拼多多手机创蓝';
    case 6:
        return '支付宝App支付';
    case 7:
        return '胡桃街QQ手机App';
    case 8:
        return '微博胡桃街';
    case 9:
        return '支付宝WAP支付';
    case 10:
        return '胡桃街QQ互联';
    case 11:
        return '微博拼多多';
    case 12:
        return '拼多多QQ手机App';
    case 13:
        return '拼多多QQ互联';
    case 27:
        return '拼多多QQ钱包';
    case 31:
        return 'ApplePay';
    default:
        return 'error';
    }
}

function getOrderStatus (order_status, shipping_status, pay_status) {
    var str = '';
    switch (parseInt(order_status)) {
    case 0:
        str += '未成团';
        break;
    case 1:
        str += '已成团';
        break;
    case 2:
        str += '已取消';
        break;
    }
    switch (parseInt(shipping_status)) {
    case 0:
        str += '未发货';
        break;
    case 1:
        str += '已发货';
        break;
    case 2:
        str += '已签收';
        break;
    }
    switch (parseInt(pay_status)) {
    case 0:
        str += '未付款';
        break;
    case 2:
        str += '已付款';
        break;
    case 3:
        str += '已申请退款';
        break;
    case 4:
        str += '已通过退款';
        break;
    }
    return str;
}

function iniCat () {
    console.log('iniCat');
    $.ajax({
        url: window.api_host + '/categories',
        xhrFields: {withCredentials: true},
        success: function (result) {
            var data = result;
            cat_data = result;
            cat_selection_list = [];

            for (var i = 0; i < data.length; i++) {
                if (getLevel(data[i]) == 1) {
                    cat_selection_list.push({
                        'id': data[i]['id'],
                        'name': data[i]['cat_name'],
                        'sub': []
                    });
                    continue;
                }
            }
            for (i = 0; i < data.length; i++) {
                if (getLevel(data[i]) == 2) {
                    for (var j = 0; j < cat_selection_list.length; j++) {
                        if (cat_selection_list[j]['id'] == data[i]['cat_id_1']) {
                            cat_selection_list[j]['sub'].push({
                                'id': data[i]['id'],
                                'name': data[i]['cat_name'],
                                'sub': []
                            });
                            break;
                        }
                    }
                }
            }
            for (i = 0; i < data.length; i++) {
                if (getLevel(data[i]) == 3) {
                    for (var a = 0; a < cat_selection_list.length; a++) {
                        for (var b = 0; b < cat_selection_list[a]['sub'].length; b++) {
                            if (cat_selection_list[a]['sub'][b]['id'] == data[i]['cat_id_2']) {
                                cat_selection_list[a]['sub'][b]['sub'].push({
                                    'id': data[i]['id'],
                                    'name': data[i]['cat_name'],
                                    'sub': []
                                });
                            }
                        }
                    }
                }
            }
            for (i = 0; i < data.length; i++) {
                if (getLevel(data[i]) == 4) {
                    for (a = 0; a < cat_selection_list.length; a++) {
                        for (b = 0; b < cat_selection_list[a]['sub'].length; b++) {
                            for (var c = 0; c < cat_selection_list[a]['sub'][b]['sub'].length; c++) {
                                if (cat_selection_list[a]['sub'][b]['sub'][c]['id'] == data[i]['cat_id_3']) {
                                    cat_selection_list[a]['sub'][b]['sub'][c]['sub'].push({
                                        'id': data[i]['id'],
                                        'name': data[i]['cat_name']
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
    });
}

function getCategoryString (id) {
    var cat = getCategory(id);
    var result = '';
    for (var i = 0; i < cat.length; i++) {
        if (i > 0) {
            result += ' -- ';
        }
        result += cat[i]['name'];
    }
    return result;
}

function getCategory (id) {
    var result = [];
    for (var a = 0; a < cat_selection_list.length; a++) {
        if (cat_selection_list[a]['id'] == id.toString()) {
            result = [{
                'id': cat_selection_list[a]['id'],
                'name': cat_selection_list[a]['name']
            }];
            return result;
        }
        for (var b = 0; b < cat_selection_list[a]['sub'].length; b++) {
            if (cat_selection_list[a]['sub'][b]['id'] == id.toString()) {
                result = [{
                    'id': cat_selection_list[a]['id'],
                    'name': cat_selection_list[a]['name']
                }, {
                    'id': cat_selection_list[a]['sub'][b]['id'],
                    'name': cat_selection_list[a]['sub'][b]['name']
                }];
                return result;
            }
            for (var c = 0; c < cat_selection_list[a]['sub'][b]['sub'].length; c++) {
                if (cat_selection_list[a]['sub'][b]['sub'][c]['id'] == id.toString()) {
                    result = [{
                        'id': cat_selection_list[a]['id'],
                        'name': cat_selection_list[a]['name']
                    }, {
                        'id': cat_selection_list[a]['sub'][b]['id'],
                        'name': cat_selection_list[a]['sub'][b]['name']
                    }, {
                        'id': cat_selection_list[a]['sub'][b]['sub'][c]['id'],
                        'name': cat_selection_list[a]['sub'][b]['sub'][c]['name']
                    }];
                    return result;
                }
                for (var d = 0; d < cat_selection_list[a]['sub'][b]['sub'][c]['sub'].length; d++) {
                    result = [{
                        'id': cat_selection_list[a]['id'],
                        'name': cat_selection_list[a]['name']
                    }, {
                        'id': cat_selection_list[a]['sub'][b]['id'],
                        'name': cat_selection_list[a]['sub'][b]['name']
                    }, {
                        'id': cat_selection_list[a]['sub'][b]['sub'][c]['id'],
                        'name': cat_selection_list[a]['sub'][b]['sub'][c]['name']
                    }, {
                        'id': cat_selection_list[a]['sub'][b]['sub'][c]['sub'][d]['id'],
                        'name': cat_selection_list[a]['sub'][b]['sub'][c]['sub'][d]['name']
                    }];
                    return result;
                }
            }
        }
    }
    result = [{
        'id': '0',
        'name': '全品类'
    }];
    return result;
}

function getLevel (data) {
    if (data['cat_id_4'] != 0) {
        return 4;
    }
    if (data['cat_id_3'] != 0) {
        return 3;
    }
    if (data['cat_id_2'] != 0) {
        return 2;
    }
    return 1;
}
var dateRangeLocale = {
    applyLabel: '确认',
    cancelLabel: '取消',
    fromLabel: '开始时间',
    toLabel: '结束时间',
    daysOfWeek: '日_一_二_三_四_五_六'.split('_'),
    monthNames: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    firstDay: 1,
    customRangeLabel: '选择时间'
};
var dt_lang = {
    emptyTable: '没有数据',
    loadingRecords: '加载中...',
    processing: '查询中...',
    search: '检索:',
    lengthMenu: '每页 _MENU_ 件',
    zeroRecords: '没有数据',
    paginate: {
        first: '第一页',
        last: '最后一页',
        next: '下一页',
        previous: '上一页'
    },
    info: '第 _PAGE_ 页 / 总 _PAGES_ 页 / 共 _TOTAL_ 条数据',
    infoEmpty: '没有数据',
    infoFiltered: '(过滤总件数 _MAX_ 条)'
};

function alert (msg, cb, time) {
    if (time === undefined) {
        time = 3000;
    }
    $.bootstrapGrowl(msg, {
        ele: 'body',
        type: 'info',
        offset: {
            from: 'top',
            amount: 20
        },
        align: 'center',
        width: 'auto',
        delay: time,
        allow_dismiss: true,
        stackup_spacing: 10
    });
    if (cb) {
        setTimeout(cb, time);
    }
}

function loadState (isLoad, title, text) {
    title = title !== undefined ? title : '数据加载中';
    text = text !== undefined ? text : '请稍候...';
    var html = '<div id="loadState" style="position: fixed;width:100%;height:100%;left:0; top: 0; background-color:rgba(0,0,0,0.7)"; z-index: 998">';
    html += '<div style="position: absolute;width:300px;height:100px;left:50%; top: 40%; margin-left:-150px">';
    html += '<div class="box box-success box-solid">';
    html += '<div class="box-header">';
    html += '<h1 class="box-title">' + title + '</h1>';
    html += '</div><div class="box-body">' + text + '</div>';
    html += '<div class="overlay"><i class="fa fa-spinner fa-spin" style="color: rgb(250, 125, 42)"></i></div>';
    html += '</div></div></div>';
    var $load = $(html);
    if (isLoad && !$('div#loadState').length) {
        $('body').append($load);
    } else {
        $('#loadState').remove();
    }
}

function confirm (msg, cb) {
    var html = '<div id="confirm-view" class="confirm-view" style="position: fixed; width: 100%; height: 100%;left:0; top: 0; background-color:rgba(0,0,0,0.7); z-index: 999">';
    html += '<div class="btn-default" style="position: absolute;width:360px;height:auto;left:50%; top: 36%; margin-left:-180px; padding-bottom:20px; border-radius: 5px">';
    html += '<div style="height: 20px;width:100%; background-color:rgb(210,210,210);border-radius: 5px 5px 0 0"></div>';
    html += '<div style="color:#333333; margin: 15px 40px 45px; font-size: 12px; word-break: break-all; white-space: pre-line; font-family: 微软雅黑,Monaco,宋体">' + msg + '</div>';
    html += '<button id="confirm-cancel" style="position: absolute; width:70px; height:25px; bottom: 20px;left:40px; background:#ffffff; border:1px solid #c3c3c3; border-radius: 2px">取消</button>';
    html += '<button id="confirm-confirm" style="position: absolute; width:70px; height:25px; bottom: 20px;right:40px; color: #ffffff; background:#4a99fc; border:1px solid #c3c3c3; border-radius: 2px">确认</button>';
    html += '</div></div>';
    var $load = $(html);
    // $('body').append($load);
    if (!$('div#confirm-view.confirm-view').length) {
        $('body').append($load);
    } else {
        $('#confirm-view.confirm-view').remove();
        $('body').append($load);
    }
    $('#confirm-cancel').bind('click', function () {
        if (cb) {
            cb(false);
        }
        $('#confirm-view.confirm-view').remove();
    });
    $('#confirm-confirm').bind('click', function () {
        if (cb) {
            cb(true);
        }
        $('#confirm-view.confirm-view').remove();
    });
}

function setKeydownConfig (isConfig, keyCode, fn) { // keyCode(int)表示键码   isConfig(bool):设置或者移除  fn 方法
    if (isConfig == true) {
        document.onkeydown = function (e) {
            if (!e) {
                e = window.event;
            }
            if ((e.keyCode || e.which) == keyCode) {
                if (fn) {
                    fn();
                }
            }
        };
    } else {
        document.onkeydown = null;
    }
}

function toPercent (num) {
    return (parseFloat(num) * 100).toFixed(2) + '%';
}

function toYuan (num) {
    return (parseFloat(num) * 0.01).toFixed(2);
}

// 乘法函数，用来得到精确的乘法结果
// 说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
// 调用：accMul(arg1,arg2)
// 返回值：arg1乘以arg2的精确结果
function accMul (arg1, arg2) {
    var m = 0;
    var s1 = arg1.toString();
    var s2 = arg2.toString();
    try {
        m += s1.split('.')[1].length;
    } catch (e) {
        // console.log(e);
    }
    try {
        m += s2.split('.')[1].length;
    } catch (e) {
        // console.log(e);
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}

function uploadFile (file, cb, cb1) {
    xhr.get('/common/file/sign', {}, function (ret) {
        if (ret.result === true) {
            var sign = ret.data;
            var req = superagent.post(sign.host);
            var key = sign.prefix + '/' + moment().format('HHmmss') + genRandStr(14);
            req.field('key', key);
            req.field('Content-Disposition', 'filename=' + file.name);
            req.field('policy', sign.policy);
            req.field('OSSAccessKeyId', sign.accessId);
            req.field('success_action_status', 200);
            req.field('signature', sign.signature);
            req.attach('file', file);
            req.on('progress', function (e) {
                console.log(e);
                cb1 ? cb1(e) : null;
            });
            req.end(function (err, res) {
                if (err === null && res.statusCode === 200) {
                    cb(sign.host + '/' + key);
                }
            });
        }
    });
}

function genRandStr (len) {
    len = len || 8;
    var chars = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';
    var ret = '';
    while (len--) {
        ret += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return ret;
}

function getField (data, key) {
    return typeof data[key] === 'undefined' || data[key] === null ? 'NA' : data[key];
}

function getParams (state, include_fields, ignore_fields) {
    var data = {};
    var includeFields = include_fields ? include_fields : [];
    var ignoreFields = ignore_fields ? ignore_fields : [];
    for (var key in state) {
        var str = state[key];
        if (ignoreFields.indexOf(key) !== -1) {
            continue;
        }
        if (Object.prototype.toString.call(str) === '[object String]') {
            str = str.trim();
            if (str === '' && includeFields.indexOf(key) === -1) {
                continue;
            }
        }
        data[key] = str;
    }
    return data;
}

function setValue (e, handleData) {
    var data = {};
    data[e.target.id] = handleData ? handleData(e) : e.target.value;
    return data;
}

function onChange (a, b, c, cb, cb1) {
    var data = {};
    if (c.length === 0) {
        data[a] = '';
        cb ? cb(data) : null;
    } else {
        data[a] = b;
        cb1 ? cb1(data) : null;
    }
    return data;
}

var validator = {
    // 所有可以的验证规则处理类存放的地方，后面会单独定义
    types: {},
    // 验证类型所对应的错误消息
    messages: [],
    // 当然需要使用的验证类型
    config: {},
    // 暴露的公开验证方法
    // 传入的参数是 key => value对
    validate: function (data) {
        // 清空所有的错误信息
        this.messages = [];
        for (var i in data) {
            if (data.hasOwnProperty(i)) {
                if (!this.config[i]) {
                    continue; // 如果验证不存在，则不处理
                }
                var type = this.config[i].type; // 根据key查询是否有存在的验证规则
                var name = this.config[i].name ? this.config[i].name : i;
                var checker = this.types[type]; // 获取验证规则的验证类
                if (!type) {
                    continue; // 如果验证规则不存在，则不处理
                }
                if (!checker) { // 如果验证规则类不存在，抛出异常
                    throw {
                        name: 'ValidationError',
                        message: 'No handler to validate type ' + type
                    };
                }
                var result_ok = checker.validate(data[i]); // 使用查到到的单个验证类进行验证
                if (!result_ok) {
                    var msg = name + checker.instructions;
                    this.messages.push(msg);
                }
            }
        }
        return this.hasErrors();
    },
    // helper
    hasErrors: function () {
        return this.messages.length !== 0;
    }
};

// 验证给定的值是否不为空
validator.types.isNonEmpty = {
    validate: function (value) {
        return value !== '';
    },
    instructions: '不能为空'
};

validator.types.isNonNegativeInteger = {
    validate: function (value) {
        var exp = /^(0|[1-9]\d*)$/;
        return exp.test(value);
    },
    instructions: '必须为非负整数'
};

validator.types.isPositiveInteger = {
    validate: function (value) {
        var exp = /^[1-9][0-9]*$/;
        return exp.test(value);
    },
    instructions: '必须为正整数'
};

module.exports = {
    getAppType: getAppType,
    getOrderStatus: getOrderStatus,
    iniCat: iniCat,
    alert: alert,
    confirm: confirm,
    loadState: loadState,
    getCategoryString: getCategoryString,
    dateRangeLocale: dateRangeLocale,
    dt_lang: dt_lang,
    setKeydownConfig: setKeydownConfig,
    accMul: accMul,
    toPercent: toPercent,
    toYuan: toYuan,
    uploadFile: uploadFile,
    getField: getField,
    getParams: getParams,
    setValue: setValue,
    onChange: onChange,
    validator: validator
};
