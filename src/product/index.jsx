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
                    img: 'dist/images/MD-B1.jpg',
                    name: '扩散速渗型（卫生巾芯体）',
                    spec: 'MD-B1'
                },
                {
                    img: 'dist/images/MD-B2.jpg',
                    name: '速渗型（尿片芯体）',
                    spec: 'MD-B2'
                },
                {
                    img: 'dist/images/MD-B3.jpg',
                    name: '扩散干爽型（尿库芯体）',
                    spec: 'MD-B3'
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
