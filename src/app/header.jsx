var React = require('react');
var xhr = require('../toolers/xhr');
var HeadNav = require('../common/head-nav.jsx');
var Header = React.createClass({
    getDefaultProps: function () {
        return {
            tabs_url: [
                {
                    url: '#about/index',
                    name: '公司介绍',
                    dropdown: [
                        {
                            url: '#about/index',
                            name: '公司介绍'
                        }
                    ]
                },
                {
                    url: '#product/index',
                    name: '产品展示'
                },
                {
                    url: '#service/index',
                    name: '服务中心'
                },
                {
                    url: '#contact/index',
                    name: '联系我们',
                    dropdown: [
                        {
                            url: '#about/index',
                            name: '公司介绍'
                        },
                        {
                            url: '#about/index',
                            name: '公司介绍'
                        },
                        {
                            url: '#about/index',
                            name: '公司介绍'
                        },
                        {
                            url: '#about/index',
                            name: '公司介绍'
                        },
                        {
                            url: '#about/index',
                            name: '公司介绍'
                        }
                    ]
                }
            ]
        };
    },
    click: function () {
        this.props.jump('skus', null);
    },
    render: function () {
        return (
            <nav className="fh5co-nav" role="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-md-1 col-xs-2">
                            <img src="dist/images/美登图标.png" className="img-responsive" style={{width: '55px'}}/>
                        </div>
                        <div className="col-md-3 col-xs-5">
                            <div id="fh5co-logo"><a href="index.html#app/index">广东美登纸业有限公司</a></div>
                        </div>
                        <div className="col-md-5 col-xs-3 text-center menu-1">
                            <HeadNav tabs_url={this.props.tabs_url} active_tab_url={location.hash}/>
                        </div>
                        <div className="col-md-3 col-xs-2 text-right hidden-xs menu-2">
                            <ul className="col-md-9">
                                <li className="search">
                                    <div className="input-group">
                                        <input type="text" placeholder="搜索.."/>
                                        <span className="input-group-btn">
                                            <button className="btn btn-primary" type="button"><i className="icon-search"></i></button>
                                        </span>
                                    </div>
                                </li>
                                <li className="shopping-cart"><a href="#" className="cart"><span><small>0</small><i className="icon-shopping-cart"></i></span></a></li>
                            </ul>
                            <div className="col-md-3" id="google_translate_element"/>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
});
module.exports = Header;
