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
                <header id="fh5co-header" className="fh5co-cover fh5co-cover-sm" role="banner" style={{backgroundImage: 'url(dist/images/img_bg_2.jpg)'}}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center">
                                <div className="display-t">
                                    <div className="display-tc animate-box" data-animate-effect="fadeIn">
                                        <h1>Product Details</h1>
                                        <h2>Free html5 templates Made by <a href="http://freehtml5.co" target="_blank">freehtml5.co</a></h2>
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
                                    <div className="item">
                                        <div className="active text-center">
                                            <figure>
                                                <img src="dist/images/product-single-1.jpg" alt="user"/>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="active text-center">
                                            <figure>
                                                <img src="dist/images/product-single-2.jpg" alt="user"/>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="active text-center">
                                            <figure>
                                                <img src="dist/images/product-single-3.jpg" alt="user"/>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="active text-center">
                                            <figure>
                                                <img src="dist/images/product-single-4.jpg" alt="user"/>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="active text-center">
                                            <figure>
                                                <img src="dist/images/product-single-5.jpg" alt="user"/>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="row animate-box">
                                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                        <h2>Hauteville Rocking Chair</h2>
                                        <p>
                                            <a href="#" className="btn btn-primary btn-outline btn-lg">Add to Cart</a>
                                            <a href="#" className="btn btn-primary btn-outline btn-lg">Compare</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="fh5co-tabs animate-box">
                                    <ul className="fh5co-tab-nav">
                                        <li className="active"><a href="#" data-tab="1"><span className="icon visible-xs"><i className="icon-file"></i></span><span className="hidden-xs">Product Details</span></a></li>
                                        <li><a href="#" data-tab="2"><span className="icon visible-xs"><i className="icon-bar-graph"></i></span><span className="hidden-xs">Specification</span></a></li>
                                        <li><a href="#" data-tab="3"><span className="icon visible-xs"><i className="icon-star"></i></span><span className="hidden-xs">Feedback &amp; Ratings</span></a></li>
                                    </ul>
                                    <div className="fh5co-tab-content-wrap">
                                        <div className="fh5co-tab-content tab-content active" data-tab-content="1">
                                            <div className="col-md-10 col-md-offset-1">
                                                <span className="price">SRP: $350</span>
                                                <h2>Hauteville Rocking Chair</h2>
                                                <p>Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam officiis est.</p>

                                                <p>Ullam dolorum iure dolore dicta fuga ipsa velit veritatis molestias totam fugiat soluta accusantium omnis quod similique placeat at. Dolorum ducimus libero fuga molestiae asperiores obcaecati corporis sint illo facilis.</p>

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
                                                <h3>Product Specification</h3>
                                                <ul>
                                                    <li>Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni quas eius</li>
                                                    <li>adipisci dignissimos consectetur magni quas eius nobis reprehenderit soluta eligendi</li>
                                                    <li>Veritatis tenetur odio delectus quibusdam officiis est.</li>
                                                    <li>Magni quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam officiis est.</li>
                                                </ul>
                                                <ul>
                                                    <li>Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni quas eius</li>
                                                    <li>adipisci dignissimos consectetur magni quas eius nobis reprehenderit soluta eligendi</li>
                                                    <li>Veritatis tenetur odio delectus quibusdam officiis est.</li>
                                                    <li>Magni quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam officiis est.</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="fh5co-tab-content tab-content" data-tab-content="3">
                                            <div className="col-md-10 col-md-offset-1">
                                                <h3>Happy Buyers</h3>
                                                <div className="feed">
                                                    <div>
                                                        <blockquote>
                                                            <p>Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam officiis est.</p>
                                                        </blockquote>
                                                        <h3>&mdash; Louie Knight</h3>
                                                        <span className="rate">
                                                            <i className="icon-star2"></i>
                                                            <i className="icon-star2"></i>
                                                            <i className="icon-star2"></i>
                                                            <i className="icon-star2"></i>
                                                            <i className="icon-star2"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <blockquote>
                                                            <p>Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam officiis est.</p>
                                                        </blockquote>
                                                        <h3>&mdash; Joefrey Gwapo</h3>
                                                        <span className="rate">
                                                            <i className="icon-star2"></i>
                                                            <i className="icon-star2"></i>
                                                            <i className="icon-star2"></i>
                                                            <i className="icon-star2"></i>
                                                            <i className="icon-star2"></i>
                                                        </span>
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
            </div>
        );
    }
});
module.exports = Index;
