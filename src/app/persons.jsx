var React = require('react');
var Persons = React.createClass({
    render: function () {
        if (!Array.isArray(this.props.datas)) {
            return <div/>;
        }
        return (
            <div id="fh5co-testimonial" className="fh5co-bg-section">
                    <div className="container">
                        <div className="row animate-box">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <span>见证</span>
                                <h2>快乐的客户</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="row animate-box">
                                    <div className="owl-carousel owl-carousel-fullwidth">
                                        {
                                            this.props.datas.map(function (data, index) {
                                                return <div key={index} className="item">
                                                    <div className="testimony-slide active text-center">
                                                        <figure>
                                                            <img src={data.img} alt="user"/>
                                                        </figure>
                                                        <span>{data.name}<a href="#" className="twitter">{data.role}</a></span>
                                                        <blockquote>
                                                            <p>&ldquo;{data.wisdom}&rdquo;</p>
                                                        </blockquote>
                                                    </div>
                                                </div>;
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
});
module.exports = Persons;
