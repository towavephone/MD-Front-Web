var React = require('react');
var Footer = React.createClass({
    render: function () {
        return (
            <footer id="fh5co-footer" role="contentinfo">
                <div className="container">
                    <div className="row row-pb-md">
                        <div className="col-md-4 fh5co-widget">
                            <h3>美登</h3>
                            <p>脚踏实地实实在在  筑建文化革新创造</p>
                            <p>伫立行业领先地位  开创引领全新格局</p>
                            <p>携手先登共享共赢  强势打造高端品牌</p>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                            <ul className="fh5co-footer-links">
                                <li><a href="#">关于</a></li>
                                <li><a href="#">帮助</a></li>
                                <li><a href="#">联系我们</a></li>
                                <li><a href="#">条款</a></li>
                                <li><a href="#">聚会</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                            <ul className="fh5co-footer-links">
                                <li><a href="#">公司介绍</a></li>
                                <li><a href="#">隐私</a></li>
                                <li><a href="#">见证</a></li>
                                <li><a href="#">手册</a></li>
                                <li><a href="#">获奖证书</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                            <ul className="fh5co-footer-links">
                                <li><a href="#">寻找设计师</a></li>
                                <li><a href="#">寻找开发人员</a></li>
                                <li><a href="#">团队</a></li>
                                <li><a href="#">广告</a></li>
                                <li><a href="#">接口</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row copyright">
                        <div className="col-md-12 text-center">
                            <p>
                                <small className="block">&copy;广东美登纸业有限公司. All Rights Reserved.</small>
                            </p>
                            <ul className="fh5co-social-icons">
                                <li><a href="#"><i className="icon-twitter"></i></a></li>
                                <li><a href="#"><i className="icon-facebook"></i></a></li>
                                <li><a href="#"><i className="icon-linkedin"></i></a></li>
                                <li><a href="#"><i className="icon-dribbble"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
});
module.exports = Footer;
