var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./app/header');
var NewsLetter = require('./app/newsletter');
var Footer = require('./app/footer');
var helpers = require('./toolers/helpers');
var animate = require('./toolers/animate');
var Index = require('./app/index.jsx');
var App = React.createClass({
    getDefaultProps: function () {
        return {pages: ['app', 'product', 'about', 'contact']};
    },
    getInitialState: function () {
        return {content: null};
    },
    componentDidMount: function () {
        this.initContent();
        // 一次性的绑定，不能多次绑定，否则会出现抖动问题
        animate.setEvent();
        window.addEventListener('hashchange', function (e) {
            if (this.state.url != location.hash.substr(1).split('?')[0]) {
                animate.showLoader();
                this.initContent();
            }
        }.bind(this));
        window.onerror = function (msg) {
            helpers.alert(msg.replace('Uncaught ', ''));
        };
    },
    alert: function (msg) {
        $.bootstrapGrowl(msg, {
            ele: 'body',
            type: 'info',
            offset: {from: 'top', amount: 20},
            align: 'left',
            width: 'auto',
            delay: 4000,
            allow_dismiss: true,
            stackup_spacing: 10
        });
    },
    jump: function (url, data, open_new) {
        var hash = url + '?';
        for (var key in data) {
            hash += (hash == url + '?' ? '' : '&') + key + '=' + data[key];
        }
        if (open_new) {
            window.open('#' + hash, '_blank');
        } else {
            this.setState(
                {url: url, data: data},
                function () {
                    this.initContent();
                    location.hash = hash;
                }.bind(this)
            );
        }
    },
    openModal: function (modal) {
        this.setState({modal: modal});
    },
    setCache: function (obj) {
        this.state.cache[Object.keys(obj)[0]] = obj[Object.keys(obj)[0]];
    },
    getHashInfo: function () {
        var url = location.hash.split('?')[0].substring(1);
        var params = location.hash.split('?')[1] ? location.hash.split('?')[1].split('&') : null;
        var data = {};
        for (var i in params) {
            data[params[i].split('=')[0]] = params[i].split('=')[1];
        }
        return {data: data, url: url};
    },
    initContent: function () {
        var {url, data} = this.getHashInfo();
        var pages = this.props.pages;
        var flag = true;
        for (var i in pages) {
            var page = pages[i];
            var length = page.length;
            if (url.slice(0, length) === page) {
                require.ensure([], function (require) {
                    flag = false;
                    var content = require('./' + page + url.slice(length));
                    this.setState({content: content, data: data, url: url}, function () {
                        animate.allRun();
                    });
                }.bind(this));
                break;
            }
        }
        if (flag) {
            this.setState({content: null}, function () {
                animate.allRun();
            });
        }
    },
    render: function () {
        var content = null;
        if (this.state.content) {
            content = <this.state.content {...this.state.data}
                    jump={this.jump}
                    alert={this.alert}
                    setCache={this.setCache}
                    cache={this.state.cache}/>;
        }
        return <div>
            <div className="fh5co-loader"/>
            <div className="gototop js-top">
                <a href="#" className="js-gotop">
                    <i className="icon-arrow-up"></i>
                </a>
            </div>
            <Header jump={this.jump}/>
            {content}
            <NewsLetter/>
            <Footer/>
        </div>;
    }
});
ReactDOM.render(<App/>, document.getElementById('app'));
