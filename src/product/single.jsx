var React = require('react');
var FlexSlider = require('../common/flexslider.jsx');
var Product = require('../common/product.jsx');
var animate = require('../toolers/animate');
var xhr = require('../toolers/xhr');
var helpers = require('../toolers/helpers');
var Index = React.createClass({
    getDefaultProps: function () {
        return {
            name: '新款投影仪',
            imgs: [
                'dist/images/product-single-1.jpg',
                'dist/images/product-single-2.jpg',
                'dist/images/product-single-3.jpg',
                'dist/images/product-single-4.jpg'
            ],
            detail: {
                shortname: '投影仪',
                content: ['2016新款商务办公家用投影机上市，现806有基础版和安卓版，安卓版支持1080P高清播放，内置安卓WIFI无线上网，可直接手机同屏，可下软件游戏，可连鼠标键盘，真正高清高亮满足您的需求。', '特别说明：806基础版没有WIFI，连接手机同屏等安卓版这么丰富的功能，仅只有投影功能。']
            },
            spec: [
                ['产地: 中国大陆', '平台类型: 无', '投放画面大小: 30寸~300寸'],
                ['机体尺寸（cm）: 33×25.7×10.5', '灯泡寿命: 30000小时', '分辨率(dpi): 1280x800dpi', '屏幕比例: 4:3 16:9', '非常棒']
            ],
            feedback: [
                {
                    comment: '清晰度不错，白天也能看的比较清楚，晚上更清晰一些。感觉性价比还是比较高的。',
                    name: '张三',
                    rating: 4
                },
                {
                    comment: '投影机效果杠杠的，比电视好多了，大屏幕效果就是好 ，真是太棒了，超喜欢的， 买完了发了朋友圈，身边朋友都要买了，玩游戏超爽了。操作也简单，可以多来源的播放，电视，网络，移动盘。清晰度够用，音效也不错。不伤眼，很好。总之还是值得拥有！不多说了，直接看效果图，真的很赞！',
                    name: '李四',
                    rating: 2
                }
            ]
        };
    },
    componentDidMount: function () {
        this.getData();
    },
    getData: async function () {
        var ret = await xhr.get('/product/detail/', {id: this.props.id});
        // let results = await Promise.all([xhr.get('/msg', null),xhr.get('/msg', null)]);
        console.log(ret);
        if (ret.result === false) {
            helpers.alert(ret.error_msg);
            return;
        }
        this.setState(ret.data, function () {
            animate.allRun();
        });
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
                                        this.props.imgs.map(function (data, index) {
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
                                        <h2>{this.props.name}</h2>
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
                                                <h2>{this.props.detail.shortname}</h2>
                                                {
                                                    this.props.detail.content.map(function (data, index) {
                                                        return <p key={index}>{data}</p>;
                                                    })
                                                }
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
                                                {
                                                    this.props.spec.map(function (data, index) {
                                                        var li = data.map(function (data2, index2) {
                                                            return <li key={index2}>{data2}</li>;
                                                        });
                                                        return <ul key={index}>{li}</ul>;
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="fh5co-tab-content tab-content" data-tab-content="3">
                                            <div className="col-md-10 col-md-offset-1">
                                                <h3>客户评价</h3>
                                                <div className="feed">
                                                    {
                                                        this.props.feedback.map(function (data, index) {
                                                            var rating = parseInt(data.rating);
                                                            rating = isNaN(rating) ? 0 : rating;
                                                            var stars = [];
                                                            for (var i = 0; i < rating; i++) {
                                                                stars.push(<i key={i} className="icon-star2"></i>);
                                                            }
                                                            return <div key={index}>
                                                                <blockquote>
                                                                    <p>{data.comment}</p>
                                                                </blockquote>
                                                                <h3>&mdash; {data.name}</h3>
                                                                <span className="rate">
                                                                    {stars}
                                                                </span>
                                                            </div>;
                                                        })
                                                    }
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
