var React = require('react');
var FlexSlider = require('../common/flexslider.jsx');
var Product = require('../common/product.jsx');
var Index = React.createClass({
    getDefaultProps: function () {
        return {
            productItems: [
                'dist/images/product-single-1.jpg',
                'dist/images/product-single-2.jpg',
                'dist/images/product-single-3.jpg',
                'dist/images/product-single-4.jpg'
            ]
        };
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
                                        <h1>产品细节</h1>
                                        <h2>欢迎订购我司产品</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="fh5co-product">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 animate-box">
                                <div className="owl-carousel owl-carousel-fullwidth product-carousel">
                                    {
                                        this.props.productItems.map(function (data, index) {
                                            return <div className="item" key={index}>
                                                <div className="active text-center">
                                                    <figure>
                                                        <img src={data}/>
                                                    </figure>
                                                </div>
                                            </div>;
                                        })
                                    }
                                </div>
                                <div className="row animate-box">
                                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                        <h2>便携式投影仪家用高清</h2>
                                        <p>
                                            <a href="#" className="btn btn-primary btn-outline btn-lg">加入购物车</a>
                                            <a href="#" className="btn btn-primary btn-outline btn-lg">比较</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="fh5co-tabs animate-box">
                                    <ul className="fh5co-tab-nav">
                                        <li className="active"><a href="#" data-tab="1"><span className="icon visible-xs"><i className="icon-file"></i></span><span className="hidden-xs">产品细节</span></a></li>
                                        <li><a href="#" data-tab="2"><span className="icon visible-xs"><i className="icon-bar-graph"></i></span><span className="hidden-xs">产品规格</span></a></li>
                                        <li><a href="#" data-tab="3"><span className="icon visible-xs"><i className="icon-star"></i></span><span className="hidden-xs">反馈 &amp; 评分</span></a></li>
                                    </ul>
                                    <div className="fh5co-tab-content-wrap">
                                        <div className="fh5co-tab-content tab-content active" data-tab-content="1">
                                            <div className="col-md-10 col-md-offset-1">
                                                <span className="price">SRP: $350</span>
                                                <h2>便携式投影仪</h2>
                                                <p>2016新款商务办公家用投影机上市，现806有基础版和安卓版，安卓版支持1080P高清播放，内置安卓WIFI无线上网，可直接手机同屏，可下软件游戏，可连鼠标键盘，真正高清高亮满足您的需求。</p>

                                                <p>特别说明：806基础版没有WIFI，连接手机同屏等安卓版这么丰富的功能，仅只有投影功能。</p>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h2 className="uppercase">Keep it simple</h2>
                                                        <p>Ullam dolorum iure dolore dicta fuga ipsa velit veritatis</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h2 className="uppercase">Less is more</h2>
                                                        <p>Ullam dolorum iure dolore dicta fuga ipsa velit veritatis</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="fh5co-tab-content tab-content" data-tab-content="2">
                                            <div className="col-md-10 col-md-offset-1">
                                                <h3>产品详情</h3>
                                                <ul>
                                                    <li>CCC证书编号: 2014010903689231</li>
                                                    <li>产地: 中国大陆</li>
                                                    <li>平台类型: 无</li>
                                                    <li>投放画面大小: 30寸~300寸</li>
                                                </ul>
                                                <ul>
                                                    <li>机体尺寸（cm）: 33×25.7×10.5</li>
                                                    <li>灯泡寿命: 30000小时</li>
                                                    <li>分辨率(dpi): 1280x800dpi</li>
                                                    <li>屏幕比例: 4:3 16:9</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="fh5co-tab-content tab-content" data-tab-content="3">
                                            <div className="col-md-10 col-md-offset-1">
                                                <h3>客户评价</h3>
                                                <div className="feed">
                                                    <div>
                                                        <blockquote>
                                                            <p>清晰度不错，白天也能看的比较清楚，晚上更清晰一些。感觉性价比还是比较高的。</p>
                                                        </blockquote>
                                                        <h3>&mdash; 张三</h3>
                                                        <span className="rate">
                                                            <i className="icon-star2"></i>
                                                            <i className="icon-star2"></i>
                                                            <i className="icon-star2"></i>
                                                            <i className="icon-star2"></i>
                                                            <i className="icon-star2"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <blockquote>
                                                            <p>投影机效果杠杠的，比电视好多了，大屏幕效果就是好 ，真是太棒了，超喜欢的， 买完了发了朋友圈，身边朋友都要买了，玩游戏超爽了。操作也简单，可以多来源的播放，电视，网络，移动盘。清晰度够用，音效也不错。不伤眼，很好。总之还是值得拥有！不多说了，直接看效果图，真的很赞！</p>
                                                        </blockquote>
                                                        <h3>&mdash; 李四</h3>
                                                        <span className="rate">
                                                            <i className="icon-star2"></i>
                                                            <i className="icon-star2"></i>
                                                            <i className="icon-star2"></i>
                                                            <i className="icon-star2"></i>
                                                            <i className="icon-star2"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Index;
