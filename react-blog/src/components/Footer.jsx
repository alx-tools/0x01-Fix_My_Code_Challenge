var React = require('react/addons');

var Link = require('react-router').Link;

var Footer = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render : function() {
        return (
            <div className="footer">
                <a className="footer-powered-by" href="https://github.com/jrossi227/react-blog">Powered By React Blog</a>
                <Link to={`/`}>Home</Link>
            </div>
        )
    }
});

module.exports = Footer;