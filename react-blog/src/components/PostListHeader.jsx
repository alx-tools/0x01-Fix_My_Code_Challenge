var React = require('react/addons');

var PostListHeader = React.createClass({

    _getHeader: function() {
        var headerItems = [];
        if(this.props.header && this.props.header != '') {
            headerItems.push(<div className="header" key="1">
                                <h1>{this.props.header}</h1>
                            </div>);
        }

        return  headerItems;
    },

    _getContent: function() {
        var contentItems = [];
        if(this.props.content && this.props.content != '') {
            contentItems.push(<div className="content" key="1">
                                <div dangerouslySetInnerHTML={ {__html: this.props.content} }></div>
                              </div>);
        }

        return contentItems;
    },

    render: function() {
        return (<div>
                    {this._getHeader()}
                    {this._getContent()}
                </div>
        );
    }
});

module.exports = PostListHeader;