var xhr = require('./xhr');

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

function getParams (state, ignore_fields) {
    var data = {};
    var ignoreFields = ignore_fields ? ignore_fields : [];
    for (var key in state) {
        var str = state[key];
        if (ignoreFields.indexOf(key) !== -1) {
            continue;
        }
        if (Object.prototype.toString.call(str) === '[object String]') {
            str = str.trim();
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
    messages: {},
    // 当然需要使用的验证类型
    config: {},
    // 暴露的公开验证方法
    // 传入的参数是 key => value对
    validate: function (data) {
        // 清空所有的错误信息
        this.messages = {};
        for (var i in data) {
            if (data.hasOwnProperty(i)) {
                if (!this.config[i]) {
                    continue; // 如果验证不存在，则不处理
                }
                var types = this.config[i].types; // 根据key查询是否有存在的验证规则
                for (var j in types) {
                    var type = types[j];
                    var name = this.config[i].name ? this.config[i].name : i;
                    var checker = this.types[type]; // 获取验证规则的验证类
                    var params = this.config[i].params ? this.config[i].params[type] : null;
                    if (!type) {
                        continue; // 如果验证规则不存在，则不处理
                    }
                    if (!checker) { // 如果验证规则类不存在，抛出异常
                        throw {
                            name: 'ValidationError',
                            message: 'No handler to validate type ' + type
                        };
                    }
                    var result_ok = checker.validate(data[i], params); // 使用查到的单个验证类进行验证
                    if (!result_ok) {
                        // debugger
                        var instructions = Object.prototype.toString.call(checker.instructions) === '[object String]' ? checker.instructions : checker.instructions(data[i], params);
                        var msg = name + instructions;
                        if (typeof this.messages[i] == 'undefined') {
                            this.messages[i] = [msg];
                        } else {
                            this.messages[i].push(msg);
                        }
                    }
                }
            }
        }
        return this.hasErrors();
    },
    // helper
    hasErrors: function () {
        return Object.keys(this.messages).length !== 0;
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

validator.types.isRightLength = {
    validate: function (value, params) {
        if (params.max && !params.min) {
            return value.length <= params.max;
        }
        if (!params.max && params.min) {
            return value.length >= params.min;
        }
        return value.length >= params.min && value.length <= params.max;
    },
    instructions: function (value, params) {
        if (params.max && !params.min) {
            return '长度需小于等于' + params.max;
        }
        if (!params.max && params.min) {
            return '长度需大于等于' + params.min;
        }
        return '长度需在' + params.min + '~' + params.max + '之间';
    }
};

validator.types.isEmail = {
    validate: function (value) {
        var exp = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        return exp.test(value);
    },
    instructions: '格式不正确'
};

module.exports = {
    alert: alert,
    confirm: confirm,
    loadState: loadState,
    setKeydownConfig: setKeydownConfig,
    accMul: accMul,
    toPercent: toPercent,
    toYuan: toYuan,
    getField: getField,
    getParams: getParams,
    setValue: setValue,
    onChange: onChange,
    validator: validator
};
