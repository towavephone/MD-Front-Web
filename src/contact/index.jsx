var React = require('react');
var map = require('../../dist/js/baidu_map.js');
var animate = require('../toolers/animate');
var helpers = require('../toolers/helpers');
var validator = helpers.validator;
var xhr = require('../toolers/xhr');
var Input = React.createClass({
    render: function () {
        if (this.props.error === null) {
            return <div className="form-group">
                {this.props.children}
            </div>;
        }
        if (this.props.error === undefined || this.props.error.length === 0) {
            return <div className="form-group has-success has-feedback">
                {this.props.children}
                <span className="glyphicon glyphicon-ok form-control-feedback"></span>
            </div>;
        }
        return <div className="form-group has-error has-feedback">
            {this.props.children}
            <span className="glyphicon glyphicon-remove form-control-feedback"></span>
            {
                this.props.error.map(function (data, index) {
                    return <span key={index} id="helpBlock" className="help-block">{data}</span>;
                })
            }
        </div>;
    }
});
var Index = React.createClass({
    getInitialState: function () {
        return {
            name: '',
            email: '',
            subject: '',
            message: '',
            errors: {name: null, email: null, subject: null, message: null}
        };
    },
    getDefaultProps: function () {
        return {};
    },
    componentDidMount: function () {
        map.loadJScript();
        animate.allRun();
        validator.config = {
            name: {
                types: ['isRightLength'],
                params: {isRightLength: {min: 2, max: 20}},
                name: '姓名'
            },
            email: {
                types: ['isRightLength', 'isEmail'],
                params: {isRightLength: {min: 5, max: 20}},
                name: '邮箱'
            },
            subject: {
                types: ['isRightLength'],
                params: {isRightLength: {min: 1, max: 30}},
                name: '主题'
            },
            message: {
                types: ['isNonEmpty'],
                name: '留言'
            }
        };
    },
    setValue: function (e) {
        var data = helpers.setValue(e);
        var id = e.target.id;
        this.state[id] = e.target.value;
        var params = helpers.getParams(this.state);
        console.log(params);
        validator.validate(params);
        this.state.errors[id] = validator.messages[id];
        data.errors = this.state.errors;
        this.setState(data);
    },
    submit: function () {
        var params = helpers.getParams(this.state, ['errors', 'isDisabled']);
        console.log(params);
        validator.validate(params);
        this.setState({errors: validator.messages});
        console.log(validator.messages);
        if (validator.hasErrors()) {
            helpers.alert('请按要求填写相关内容');
            return;
        }
        this.postData(params);
    },
    postData: async function (params) {
        var ret = await xhr.post('/msg/add', params);
        // let results = await Promise.all([xhr.get('/msg', null),xhr.get('/msg', null)]);
        console.log(ret);
        if (ret.result === false) {
            helpers.alert(ret.error_msg);
            return;
        }
        helpers.alert('插入成功');
    },
    render: function () {
        return (
            <div>
                <header id="fh5co-header" className="fh5co-cover fh5co-cover-sm" role="banner" style={{backgroundImage: 'url(dist/images/img_bg_2.jpg)'}}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center">
                                <div className="display-t">
                                    <div className="display-tc animate-box" data-animate-effect="fadeIn">
                                        <h1>联系我们</h1>
                                        <h2>请留下你们的宝贵意见或建议</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="fh5co-contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-md-push-1 animate-box">
                                <div className="fh5co-contact-info">
                                    <h3>关于我们</h3>
                                    <ul>
                                        <li className="address"><a href="javascript:void(0)">地址：中国广东佛山市三水区<br/>乐平工业区齐力大道南9号</a></li>
                                        <li className="phone"><a href="tel:0757-87388816">电话：0757-87388816</a></li>
                                        <li className="qq"><a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=651207923&website=www.oicqzone.com">QQ：651207923</a></li>
                                        <li className="email"><a href="javascript:void(0)">邮箱：ty27149@163.com</a></li>
                                        <li className="fax"><a href="javascript:void(0)">传真：0757-87388816</a></li>
                                        <li className="url"><a href="http://www.fsmeideng.com">网站：fsmeideng.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box">
                                <h3>留言</h3>
                                <Input error={this.state.errors.name}>
                                    <label htmlFor="name" className="control-label">姓名</label>
                                    <input className="form-control input-lg" type="text" id="name" value={this.state.name} placeholder="请输入你的姓名" onChange={this.setValue}/>
                                </Input>
                                <Input error={this.state.errors.email}>
                                    <label htmlFor="email" className="control-label">邮箱</label>
                                    <input type="text" className="form-control input-lg" id="email" value={this.state.email} placeholder="请输入你的邮箱" onChange={this.setValue}/>
                                </Input>
                                <Input error={this.state.errors.subject}>
                                    <label htmlFor="subject" className="control-label">主题</label>
                                    <input type="text" className="form-control input-lg" id="subject" value={this.state.subject} placeholder="请输入留言的主题" onChange={this.setValue}/>
                                </Input>
                                <Input error={this.state.errors.message}>
                                    <label htmlFor="message" className="control-label">留言</label>
                                    <textarea name="message" id="message" maxLength={500} value={this.state.message} cols="30" rows="10" className="form-control" placeholder="对我们说些悄悄话吧" onChange={this.setValue}></textarea>
                                </Input>
                                <div className="form-group">
                                    <button className="btn btn-primary col-md-4" onClick={this.submit}>发送</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="map"></div>
            </div>
        );
    }
});
module.exports = Index;
