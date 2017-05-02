var React = require('react');
var FlexSlider = require('../common/flexslider.jsx');
var Product = require('../common/product.jsx');
var Index = React.createClass({
    getDefaultProps: function () {
        return {
            images: [
                'dist/images/产品介绍.png',
                'dist/images/产品介绍2.png'
            ],
            products: [
                {
                    img: 'dist/images/product-3.jpg',
                    name: '无尘纸',
                    spec: '400*100'
                },
                {
                    img: 'dist/images/product-4.jpg',
                    name: '无纺布',
                    spec: '40*20'
                },
                {
                    img: 'dist/images/product-5.jpg',
                    name: '高分子',
                    spec: '400*40'
                }
            ]
        };
    },
    render: function () {
        return (
            <div>
                <FlexSlider datas={this.props.images}/>
                <Product datas={this.props.products}/>
            </div>
        );
    }
});
module.exports = Index;
