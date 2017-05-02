var React = require('react');
var Counter = React.createClass({
    render: function () {
        if (!Array.isArray(this.props.datas)) {
            return <div/>;
        }
        return (
            <div id="fh5co-counter" className="fh5co-bg fh5co-counter" style={{backgroundImage: 'url(dist/images/img_bg_5.jpg)'}}>
                    <div className="container">
                        <div className="row">
                            <div className="display-t">
                                <div className="display-tc">
                                    {
                                        this.props.datas.map(function (data, index) {
                                            return <div key={index} className="col-md-3 col-sm-6 animate-box">
                                                <div className="feature-center">
                                                    <span className="icon">
                                                        <i className={data.icon}></i>
                                                    </span>
                                                    <span className="counter js-counter" data-from="0" data-to={data.maxNum} data-speed="5000" data-refresh-interval="50">1</span>
                                                    <span className="counter-label">{data.key}</span>
                                                </div>
                                            </div>;
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
});
module.exports = Counter;
