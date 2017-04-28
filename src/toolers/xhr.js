var alert = require('./alert');
const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const DELETE = 'DELETE';
var xhr = function (uri, method, data, cb, errorCallBack)
{
    var url = window.api_host + uri;
    var http = new XMLHttpRequest();
    data = data ? data : {};
    if (method == GET) {
        url += '?' + $.param(data);
    }
    http.open(method, url);
    http.withCredentials = true;
    http.setRequestHeader('Content-Type', 'application/json');
    http.onreadystatechange = function () {
        var res;
        var errors;
        if (http.readyState == 4) {
            if (http.status == 401) {
                alert('未登录');
                window.location.href = '/login.html';
                // if (errorCallBack) {
                //     errorCallBack();
                // }
            } else if (http.status == 403) {
                res = JSON.parse(http.responseText);
                errors = res.errors ? JSON.stringify(res.errors) : '您没有权限操作或访问此页面';
                alert(errors);
                if (errorCallBack) {
                    errorCallBack();
                }
            } else if (http.status == 413) {
                alert('请求体过大，请稍后再试或联系技术');
                if (errorCallBack) {
                    errorCallBack();
                }
            } else if (http.status >= 500) {
                alert('服务器异常，请稍后再试或联系技术');
                if (errorCallBack) {
                    errorCallBack();
                }
            } else if (http.status == 200) {
                var response = eval('(' + http.responseText + ')');
                if (typeof response.total !== 'undefined' && response.total !== null) {
                    response.recordsTotal = response.total;
                    response.recordsFiltered = response.total;
                }
                cb(response);
            } else {
                if (http.responseText !== '') {
                    res = JSON.parse(http.responseText);
                }
                errors = res && res.errors ? JSON.stringify(res.errors) : '服务器异常，请稍后再试或联系技术';
                alert(errors);
                if (errorCallBack) {
                    errorCallBack();
                }
            }
        }
    };
    if (method == GET) {
        http.send();
    } else {
        http.send(JSON.stringify(data));
    }
};
var dt = function (uri, method, data) {
    return function (params, cb) {
        xhr(uri, method, $.extend(params, data), cb);
    }.bind(this);
};
module.exports = {
    dt: dt,
    get: function (uri, data, cb, errorCallBack) {
        xhr(uri, GET, data, cb, errorCallBack);
    },
    post: function (uri, data, cb, errorCallBack) {
        xhr(uri, POST, data, cb, errorCallBack);
    },
    put: function (uri, data, cb, errorCallBack) {
        xhr(uri, PUT, data, cb, errorCallBack);
    },
    del: function (uri, data, cb, errorCallBack) {
        xhr(uri, DELETE, data, cb, errorCallBack);
    },
    GET: GET,
    POST: POST,
    PUT: PUT,
    DELETE: DELETE
};
