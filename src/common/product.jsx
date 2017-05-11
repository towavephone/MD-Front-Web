var React = require('react');
var Product = React.createClass({
    render: function () {
        if (!Array.isArray(this.props.datas)) {
            return <div/>;
        }
        return (
            <div id="fh5co-product">
                        <div className="container">
                            <div className="row animate-box">
                                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                    <h2>产品</h2>
                                    <p>超薄 超柔 超吸收 快吸 快干 不反渗</p>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    this.props.datas.map(function (data, index) {
                                        return <div key={index} className="col-md-4 text-center animate-box">
                                            <div className="product">
                                                <div className="product-grid" style={{backgroundImage: 'url(' + data.img + ')'}}>
                                                    <div className="inner">
                                                        <p>
                                                            <a href="#" className="icon"><i className="icon-shopping-cart"></i></a>
                                                            <a href={'#product/single?id=' + data.id} className="icon"><i className="icon-eye"></i></a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="desc">
                                                    <h3><a href={'#product/single?id=' + data.id}>{data.name}</a></h3>
                                                    <span className="price">{data.spec}</span>
                                                </div>
                                            </div>
                                        </div>;
                                    })
                                }
                            </div>
                        </div>
                    </div>
        );
    }
});
module.exports = Product;
