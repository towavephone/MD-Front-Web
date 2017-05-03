var React = require('react');
var map = require('../../dist/js/baidu_map.js');
var Index = React.createClass({
    getDefaultProps: function () {
        return {};
    },
    componentDidMount: function () {
        map.loadJScript();
        // google_map_api.init();
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
                                        <li className="address">广东省佛山市三水区乐平镇<br/>三水工业园区C区9号</li>
                                        <li className="phone"><a href="tel://18038762080">+ 18038762080</a></li>
                                        <li className="email"><a href="mailto:info@yoursite.com">634407147@qq.com</a></li>
                                        <li className="url"><a href="http://www.fsmeideng.com">fsmeideng.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box">
                                <h3>留言</h3>
                                <form action="#">
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label htmlFor="name">姓名</label>
                                            <input type="text" id="name" className="form-control" placeholder="请输入你的姓名"/>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label htmlFor="email">邮箱</label>
                                            <input type="text" id="email" className="form-control" placeholder="请输入你的邮箱"/>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label htmlFor="subject">主题</label>
                                            <input type="text" id="subject" className="form-control" placeholder="请输入留言的主题"/>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label htmlFor="message">留言</label>
                                            <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="对我们说些悄悄话吧"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary col-md-4">发送</button>
                                    </div>
                                </form>
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
