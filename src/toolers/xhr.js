var alert = require('./alert');
const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const DELETE = 'DELETE';
var xhr = function (url, method, data)
{
    url = window.api_host + url;
    var http = new XMLHttpRequest();
    data = data ? data : {};
    if (method == GET) {
        url += '?' + $.param(data);
    }
    http.open(method, url);
    // http.withCredentials = true;
    http.setRequestHeader('Content-Type', 'application/json');
    if (method == GET) {
        http.send();
    } else {
        http.send(JSON.stringify(data));
    }
    var defer = $.Deferred();
    http.onreadystatechange = function () {
        if (http.readyState == 4) {
            if (http.status == 200) {
                var response = JSON.parse(http.responseText);
                defer.resolve(response);
            } else {
                var res;
                if (http.responseText !== '') {
                    res = JSON.parse(http.responseText);
                }
                var errors = res && res.errors ? JSON.stringify(res.errors) : '服务器异常，请稍后再试或联系技术';
                alert(errors);
                defer.reject(res);
            }
        }
    };
    return defer.promise();
};
module.exports = {
    get: function (url, data) {
        return xhr(url, GET, data);
    },
    post: function (url, data) {
        return xhr(url, POST, data);
    },
    put: function (url, data) {
        return xhr(url, PUT, data);
    },
    del: function (url, data) {
        return xhr(url, DELETE, data);
    },
    GET: GET,
    POST: POST,
    PUT: PUT,
    DELETE: DELETE
};
