var React = require('react');
var NewsLetter = React.createClass({
    render: function () {
        return (
            <div id="fh5co-started">
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>订阅</h2>
                            <p>了解我们的最新产品，现在你可以订阅</p>
                        </div>
                    </div>
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2">
                            <form className="form-inline">
                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="email" className="sr-only">email</label>
                                        <input type="email" className="form-control" id="email" placeholder="邮件"/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <button type="submit" className="btn btn-default btn-block">订阅</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = NewsLetter;
