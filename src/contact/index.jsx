var React = require('react');
var map = require('../../dist/js/baidu_map.js');
var Index = React.createClass({
    getDefaultProps: function () {
        return {};
    },
    componentDidMount: function () {
        map.loadJScript();
        // google_map_api.init();
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
                                        <h1>Contact Us</h1>
                                        <h2>Free html5 templates Made by <a href="http://freehtml5.co" target="_blank">freehtml5.co</a></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="fh5co-contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-md-push-1 animate-box">
                                <div className="fh5co-contact-info">
                                    <h3>Contact Information</h3>
                                    <ul>
                                        <li className="address">198 West 21th Street, <br/> Suite 721 New York NY 10016</li>
                                        <li className="phone"><a href="tel://1234567920">+ 1235 2355 98</a></li>
                                        <li className="email"><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
                                        <li className="url"><a href="http://gettemplates.co">gettemplates.co</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box">
                                <h3>Get In Touch</h3>
                                <form action="#">
                                    <div className="row form-group">
                                        <div className="col-md-6">
                                            <label htmlFor="fname">First Name</label>
                                            <input type="text" id="fname" className="form-control" placeholder="Your firstname"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="lname">Last Name</label>
                                            <input type="text" id="lname" className="form-control" placeholder="Your lastname"/>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" id="email" className="form-control" placeholder="Your email address"/>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" id="subject" className="form-control" placeholder="Your subject of this message"/>
                                        </div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label htmlFor="message">Message</label>
                                            <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Say something about us"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Send Message" className="btn btn-primary"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="map"></div>
            </div>
        );
    }
});
module.exports = Index;
