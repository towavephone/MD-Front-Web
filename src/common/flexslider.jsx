var React = require('react');
var FlexSlider = React.createClass({
    render: function () {
        if (!Array.isArray(this.props.datas)) {
            return <div/>;
        }
        return (
            <aside id="fh5co-hero" className="js-fullheight">
                <div className="flexslider js-fullheight">
                    <ul className="slides">
                        {
                            this.props.datas.map(function (data, index) {
                                return <li key={index} style={{backgroundImage: 'url(' + data + ')'}}></li>;
                            })
                        }
                    </ul>
                </div>
            </aside>
        );
    }
});
module.exports = FlexSlider;
