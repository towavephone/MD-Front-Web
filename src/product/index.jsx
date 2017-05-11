var React = require('react');
var FlexSlider = require('../common/flexslider.jsx');
var Product = require('../common/product.jsx');
var xhr = require('../toolers/xhr');
var helpers = require('../toolers/helpers');
var animate = require('../toolers/animate');
var Index = React.createClass({
    getInitialState: function () {
        return {products: []};
    },
    getDefaultProps: function () {
        return {
            images: [
                'dist/images/产品介绍.png',
                'dist/images/产品介绍2.png'
            ]
        };
    },
    componentDidMount: function () {
        this.getData();
    },
    getData: async function () {
        var ret = await xhr.get('/product', null);
        // let results = await Promise.all([xhr.get('/msg', null),xhr.get('/msg', null)]);
        console.log(ret);
        if (ret.result === false) {
            helpers.alert(ret.error_msg);
            return;
        }
        this.setState({products: ret.data}, function () {
            animate.allRun();
        });
    },
    render: function () {
        return (
            <div>
                <FlexSlider datas={this.props.images}/>
                <Product datas={this.state.products}/>
            </div>
        );
    }
});
module.exports = Index;
