var React = require('react');
var FlexSlider = require('../common/flexslider.jsx');
var Product = require('../common/product.jsx');
var animate = require('../toolers/animate');
var xhr = require('../toolers/xhr');
var helpers = require('../toolers/helpers');
var Index = React.createClass({
    getInitialState: function () {
        return {
            name: '',
            imgs: [],
            detail: null,
            spec: [],
            feedback: []
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
        if (ret.data.length !== 1) {
            console.log('data', ret.data);
            helpers.alert('数据不存在，请联系管理员');
            return;
        }
        var data = ret.data[0];
        var {name, imgs, detail, spec, feedback} = data;
        name = name ? name : '';
        imgs = imgs ? JSON.parse(imgs) : [];
        detail = detail ? JSON.parse(detail) : null;
        spec = spec ? JSON.parse(spec) : [];
        feedback = feedback ? JSON.parse(feedback) : [];
        this.setState({name, imgs, detail, spec, feedback}, function () {
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
                                        Array.isArray(this.state.imgs) ? this.state.imgs.map(function (data, index) {
                                            return <div className="item" key={index}>
                                                <div className="active text-center">
                                                    <figure>
                                                        <img src={data}/>
                                                    </figure>
                                                </div>
                                            </div>;
                                        }) : <div/>
                                    }
                                </div>
                                <div className="row animate-box">
                                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                        <h2>{this.state.name}</h2>
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
                                                <h2>{this.state.detail && this.state.detail.shortname ? this.state.detail.shortname : ''}</h2>
                                                {
                                                    this.state.detail && Array.isArray(this.state.detail.content) ? this.state.detail.content.map(function (data, index) {
                                                        return <p key={index}>{data}</p>;
                                                    }) : <div/>
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
                                                    Array.isArray(this.state.spec) ? this.state.spec.map(function (data, index) {
                                                        var li = data.map(function (data2, index2) {
                                                            return <li key={index2}>{data2}</li>;
                                                        });
                                                        return <ul key={index}>{li}</ul>;
                                                    }) : <div/>
                                                }
                                            </div>
                                        </div>
                                        <div className="fh5co-tab-content tab-content" data-tab-content="3">
                                            <div className="col-md-10 col-md-offset-1">
                                                <h3>客户评价</h3>
                                                <div className="feed">
                                                    {
                                                        Array.isArray(this.state.spec) ? this.state.feedback.map(function (data, index) {
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
                                                        }) : <div/>
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
