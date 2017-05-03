var React = require('react');
var Staffs = React.createClass({
    render: function () {
        if (!Array.isArray(this.props.datas)) {
            return <div/>;
        }
        return (
            <div className="row">
                {
                    this.props.datas.map(function (data, index) {
                        return <div key={index} className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeIn">
                            <div className="fh5co-staff">
                                <img src={data.img} alt="Free HTML5 Templates by gettemplates.co"/>
                                <h3>{data.name}</h3>
                                <strong className="role">{data.role}</strong>
                                <p>{data.wisdom}</p>
                                <ul className="fh5co-social-icons">
                                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                                    <li><a href="#"><i className="icon-dribbble"></i></a></li>
                                    <li><a href="#"><i className="icon-github"></i></a></li>
                                </ul>
                            </div>
                        </div>;
                    })
                }
            </div>
        );
    }
});
module.exports = Staffs;
