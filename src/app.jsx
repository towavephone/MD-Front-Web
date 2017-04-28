var React = require('react');
var ReactDOM = require('react-dom');
// var xhr = require('./toolers/xhr');
// var auth = require('./toolers/auth');
// var browl = require('bootstrap-growl-ifightcrime');
// app
var Header = require('./app/header.jsx');
var FlexSlider = require('./common/flexslider.jsx');
// var LeftSide = require('./app/leftside.jsx');
// var RightSide = require('./app/rightside.jsx');
// var Footer = require('./app/footer.jsx');
// var Login = require('./app/login.jsx');
// var helpers = require('./toolers/helpers');

var App = React.createClass({
    getDefaultProps: function () {
        return {
            images: [
                'dist/images/首页.png',
                'dist/images/首页2.png',
                'dist/images/首页3.png',
                'dist/images/首页4.png'
            ]
        };
    },
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
        // var run = 'document.getElementsByClassName("main-sidebar")[0].style.height=document.documentElement.scrollHeight+"px"';
        // this.isMounted ? setInterval(run, 500) : 0;
    },
    componentDidUpdate: function () {
        scroll(0, 0);
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
    initContent: function () {
        if (!this.state.url) return null;
        // if (this.state.url.slice(0, 6) === 'goods/') {
        //     require.ensure([], function (require) {
        //         var content = require('./goods/' + this.state.url.slice(6));
        //         this.setState({content: content});
        //     }.bind(this));
        // }
        // if (this.state.url.slice(0, 6) === 'order/') {
        //     require.ensure([], function (require) {
        //         var content = require('./order/' + this.state.url.slice(6));
        //         this.setState({content: content});
        //     }.bind(this));
        // }
        // if (this.state.url.slice(0, 11) === 'after_sale/') {
        //     require.ensure([], function (require) {
        //         var content = require('./after_sale/' + this.state.url.slice(11));
        //         this.setState({content: content});
        //     }.bind(this));
        // }
        // if (this.state.url.slice(0, 7) === 'coupon/') {
        //     require.ensure([], function (require) {
        //         var content = require('./coupon/' + this.state.url.slice(7));
        //         this.setState({content: content});
        //     }.bind(this));
        // }
        // if (this.state.url.slice(0, 5) === 'data/') {
        //     require.ensure([], function (require) {
        //         var content = require('./data/' + this.state.url.slice(5));
        //         this.setState({content: content});
        //     }.bind(this));
        // }
        // if (this.state.url.slice(0, 5) === 'mall/') {
        //     require.ensure([], function (require) {
        //         var content = require('./mall/' + this.state.url.slice(5));
        //         this.setState({content: content});
        //     }.bind(this));
        // }
        // if (this.state.url.slice(0, 9) === 'shipment/') {
        //     require.ensure([], function (require) {
        //         var content = require('./shipment/' + this.state.url.slice(9));
        //         this.setState({content: content});
        //     }.bind(this));
        // }
        // if (this.state.url.slice(0, 7) === 'system/') {
        //     require.ensure([], function (require) {
        //         var content = require('./system/' + this.state.url.slice(7));
        //         this.setState({content: content});
        //     }.bind(this));
        // }
        // if (this.state.url.slice(0, 10) === 'competion/') {
        //     require.ensure([], function (require) {
        //         var content = require('./competion/' + this.state.url.slice(10));
        //         this.setState({content: content});
        //     }.bind(this));
        // }
        // if (this.state.url.slice(0, 10) === 'component/') {
        //     require.ensure([], function (require) {
        //         var content = require('./component/' + this.state.url.slice(10));
        //         this.setState({content: content});
        //     }.bind(this));
        // }
        // if (this.state.url.slice(0, 7) === 'weixin/') {
        //     require.ensure([], function (require) {
        //         var content = require('./weixin/' + this.state.url.slice(7));
        //         this.setState({content: content});
        //     }.bind(this));
        // }
        // if (this.state.url.slice(0, 8) === 'example/') {
        //     require.ensure([], function (require) {
        //         var content = require('./example/' + this.state.url.slice(8));
        //         this.setState({content: content});
        //     }.bind(this));
        // }
        // if (this.state.url.slice(0, 9) === 'activity/') {
        //     require.ensure([], function (require) {
        //         var content = require('./activity/' + this.state.url.slice(9));
        //         this.setState({content: content});
        //     }.bind(this));
        // }
        // // 罚款管理
        // if (this.state.url.slice(0, 5) === 'fine/') {
        //     require.ensure([], function (require) {
        //         var content = require('./fine/' + this.state.url.slice(5));
        //         this.setState({content: content});
        //     }.bind(this));
        // }
    },
    getContent: function () {
        if (this.state.content) {
            return <this.state.content {...this.state.data} jump={this.jump} alert={this.alert} setCache={this.setCache} cache={this.state.cache}/>;
        }
        return null;
    },
    render: function () {
        var url = this.state.url;
        if (!url) {
            url = location.hash.split('?')[0].substring(1);
            var data = location.hash.split('?')[1] ? location.hash.split('?')[1].split('&') : null;
            this.state.data = {};
            for (var i in data) {
                this.state.data[data[i].split('=')[0]] = data[i].split('=')[1];
            }
        }
        this.state.url = url;
        return <div>
                <div className="fh5co-loader"/>
                <div id="page">
                    <Header/>
                    <FlexSlider images={this.props.images}/>
                    <div id="fh5co-product">
                        <div className="container">
                            <div className="row animate-box">
                                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                    <h2>产品</h2>
                                    <p>脚踏实地实实在在，筑建文化革新创造</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 text-center animate-box">
                                    <div className="product">
                                        <div className="product-grid" style={{backgroundImage: 'url(dist/images/product-1.jpg)'}}>
                                            <div className="inner">
                                                <p>
                                                    <a href="single.html" className="icon"><i className="icon-shopping-cart"></i></a>
                                                    <a href="single.html" className="icon"><i className="icon-eye"></i></a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <h3><a href="single.html">Hauteville Concrete Rocking Chair</a></h3>
                                            <span className="price">$350</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center animate-box">
                                    <div className="product">
                                        <div className="product-grid" style={{backgroundImage: 'url(dist/images/product-2.jpg)'}}>
                                            <span className="sale">Sale</span>
                                            <div className="inner">
                                                <p>
                                                    <a href="single.html" className="icon"><i className="icon-shopping-cart"></i></a>
                                                    <a href="single.html" className="icon"><i className="icon-eye"></i></a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <h3><a href="single.html">Pavilion Speaker</a></h3>
                                            <span className="price">$600</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center animate-box">
                                    <div className="product">
                                        <div className="product-grid" style={{backgroundImage: 'url(dist/images/product-3.jpg)'}}>
                                            <div className="inner">
                                                <p>
                                                    <a href="single.html" className="icon"><i className="icon-shopping-cart"></i></a>
                                                    <a href="single.html" className="icon"><i className="icon-eye"></i></a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <h3><a href="single.html">Ligomancer</a></h3>
                                            <span className="price">$780</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="copyrights">Collect from <a href="http://www.cssmoban.com/" title="网站模板">网站模板</a></div>
                            <div className="row">
                                <div className="col-md-4 text-center animate-box">
                                    <div className="product">
                                        <div className="product-grid" style={{backgroundImage: 'url(dist/images/product-4.jpg)'}}>
                                            <div className="inner">
                                                <p>
                                                    <a href="single.html" className="icon"><i className="icon-shopping-cart"></i></a>
                                                    <a href="single.html" className="icon"><i className="icon-eye"></i></a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <h3><a href="single.html">Alato Cabinet</a></h3>
                                            <span className="price">$800</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center animate-box">
                                    <div className="product">
                                        <div className="product-grid" style={{backgroundImage: 'url(dist/images/product-5.jpg)'}}>
                                            <div className="inner">
                                                <p>
                                                    <a href="single.html" className="icon"><i className="icon-shopping-cart"></i></a>
                                                    <a href="single.html" className="icon"><i className="icon-eye"></i></a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <h3><a href="single.html">Earing Wireless</a></h3>
                                            <span className="price">$100</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center animate-box">
                                    <div className="product">
                                        <div className="product-grid" style={{backgroundImage: 'url(dist/images/product-6.jpg)'}}>
                                            <div className="inner">
                                                <p>
                                                    <a href="single.html" className="icon"><i className="icon-shopping-cart"></i></a>
                                                    <a href="single.html" className="icon"><i className="icon-eye"></i></a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <h3><a href="single.html">Sculptural Coffee Table</a></h3>
                                            <span className="price">$960</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <div id="fh5co-testimonial" className="fh5co-bg-section">
                    <div className="container">
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <span>见证</span>
                                <h2>快乐的团队</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="row animate-box">
                                    <div className="owl-carousel owl-carousel-fullwidth">
                                        <div className="item">
                                            <div className="testimony-slide active text-center">
                                                <figure>
                                                    <img src="dist/images/李敬.jpg" alt="user"/>
                                                </figure>
                                                <span>Jean Doe, via <a href="#" className="twitter">Twitter</a></span>
                                                <blockquote>
                                                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimony-slide active text-center">
                                                <figure>
                                                    <img src="dist/images/唐燕.jpg" alt="user"/>
                                                </figure>
                                                <span>John Doe, via <a href="#" className="twitter">Twitter</a></span>
                                                <blockquote>
                                                    <p>&ldquo;Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                                                </blockquote>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimony-slide active text-center">
                                                <figure>
                                                    <img src="dist/images/任红英.jpg" alt="user"/>
                                                </figure>
                                                <span>John Doe, via <a href="#" className="twitter">Twitter</a></span>
                                                <blockquote>
                                                    <p>&ldquo;Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="fh5co-counter" className="fh5co-bg fh5co-counter" style={{backgroundImage: 'url(dist/images/img_bg_5.jpg)'}}>
                    <div className="container">
                        <div className="row">
                            <div className="display-t">
                                <div className="display-tc">
                                    <div className="col-md-3 col-sm-6 animate-box">
                                        <div className="feature-center">
                                            <span className="icon">
                                                <i className="icon-eye"></i>
                                            </span>

                                            <span className="counter js-counter" data-from="0" data-to="22070" data-speed="5000" data-refresh-interval="50">1</span>
                                            <span className="counter-label">Creativity Fuel</span>

                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 animate-box">
                                        <div className="feature-center">
                                            <span className="icon">
                                                <i className="icon-shopping-cart"></i>
                                            </span>

                                            <span className="counter js-counter" data-from="0" data-to="450" data-speed="5000" data-refresh-interval="50">1</span>
                                            <span className="counter-label">Happy Clients</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 animate-box">
                                        <div className="feature-center">
                                            <span className="icon">
                                                <i className="icon-shop"></i>
                                            </span>
                                            <span className="counter js-counter" data-from="0" data-to="700" data-speed="5000" data-refresh-interval="50">1</span>
                                            <span className="counter-label">All Products</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 animate-box">
                                        <div className="feature-center">
                                            <span className="icon">
                                                <i className="icon-clock"></i>
                                            </span>

                                            <span className="counter js-counter" data-from="0" data-to="5605" data-speed="5000" data-refresh-interval="50">1</span>
                                            <span className="counter-label">Hours Spent</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="fh5co-started">
                    <div className="container">
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h2>Newsletter</h2>
                                <p>Just stay tune for our latest Product. Now you can subscribe</p>
                            </div>
                        </div>
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2">
                                <form className="form-inline">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="email" className="sr-only">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <button type="submit" className="btn btn-default btn-block">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                    <footer id="fh5co-footer" role="contentinfo">
                        <div className="container">
                            <div className="row row-pb-md">
                                <div className="col-md-4 fh5co-widget">
                                    <h3>Shop.</h3>
                                    <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
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
                                        <small className="block">&copy; 2016 Free HTML5. All Rights Reserved.</small>
                                        <small className="block">More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></small>
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
                </div>

                <div className="gototop js-top">
                    <a href="#" className="js-gotop">
                        <i className="icon-arrow-up"></i>
                    </a>
                </div>
            </div>;
    }
});
var AppDom = ReactDOM.render(<App/>, document.getElementById('app'));
window.addEventListener('hashchange', function (e) {
    if (AppDom.state.url != location.hash.substr(1).split('?')[0]) {
        var url = location.hash.split('?')[0].substring(1);
        var params = location.hash.split('?')[1] ? location.hash.split('?')[1].split('&') : null;
        var data = {};
        for (var i in params) {
            data[params[i].split('=')[0]] = params[i].split('=')[1];
        }
        AppDom.setState({url: url, data: data});
        AppDom.initContent();
    }
}.bind(this));
// window.onerror = function (msg) {
//     helpers.alert(msg.replace('Uncaught ', ''));
// };
