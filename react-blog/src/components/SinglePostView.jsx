var React = require('react/addons');
var SinglePostStore = require('../stores/SinglePostStore');
var Glyphicon = require('react-bootstrap').Glyphicon;
var SinglePostActions = require('../actions/SinglePostActions');
var AllPostActions = require('../actions/AllPostActions');
var Link = require('react-router').Link;
var marked = require('marked');
var AuthorMixin = require('../mixins/AuthorMixin.jsx');
var JsxIncludes = require('./JsxIncludes');

var SinglePostView = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    mixins: [AuthorMixin],

    componentWillMount: function() {
        var self = this;
        SinglePostActions.loadSinglePost(this.props.params.id,function(){
            self.setState(SinglePostStore.getState());
        });
    },

    componentDidMount : function() {
        SinglePostStore.listen(this.onChange);
    },

    componentWillUnmount : function() {
        SinglePostStore.unlisten(this.onChange);
        SinglePostActions.reset();
    },

    onChange : function(state){
        this.setState(state);
    },

    getInitialState : function(){
        return SinglePostStore.getState();
    },

    render : function() {
        if(this.state.currentPost == null) {
            return (<div></div>);
        }

        var includes = this.state.includes || [];

        var htmlIncludes = [], mdIncludes = [], jsxIncludes = [];
        if(includes.length > 0) {
            var include;
            for(var i=0; i<includes.length; i++) {
                include = includes[i];
                switch(include.type) {
                    case 'html':
                        htmlIncludes.push(include.value);
                        break;
                    case 'md':
                        mdIncludes.push(include.value);
                        break;
                    case 'jsx':
                        var Template = JsxIncludes[include.path];
                        jsxIncludes.push(<Template key={include.path}/>);
                        break;
                }
            }
        }

        return (
            <div className="full-post">
                <div>
                    <Link to={`/`}><Glyphicon glyph="arrow-left" />&nbsp;Back</Link>
                </div>
                <h1 className="post-title">{this.state.currentPost.title}</h1>
                <div className="author-details">
                    {this.getAuthorDetails(this.state.currentPost)}
                </div>
                <div className="post-content">
                    <div dangerouslySetInnerHTML={ {__html: this.state.currentPost.description || ''} }></div>
                    <div dangerouslySetInnerHTML={ {__html: htmlIncludes.join('')} }></div>
                    <div dangerouslySetInnerHTML={ {__html: marked( mdIncludes.join('') )} }></div>
                    {jsxIncludes}
                </div>
            </div>
        )
    }
});

module.exports = SinglePostView;