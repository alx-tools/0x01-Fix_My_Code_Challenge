var React = require('react/addons');
var AllPostStore = require('../stores/AllPostStore');
var AllPostActions = require('../actions/AllPostActions');
var PostPreview = require('./PostPreview.jsx');
var Pagination = require('./Pagination.jsx');
var config = require('../../config');
var PostListHeader = require('./PostListHeader.jsx');

var PostListView = React.createClass({

    pageNum: 1,
    itemsPerPage: config.itemsPerPage,

    contextTypes: {
        router: React.PropTypes.func
    },

    componentWillMount: function() {
        this.pageNum = parseInt(this.props.params.pageNum || AllPostStore.getState().pageNum);
        AllPostActions.getNumberOfPosts();
        AllPostActions.loadPage(this.pageNum);
        AllPostActions.loadPostListContent();
    },

    componentDidMount : function() {
        AllPostStore.listen(this.onChange);
    },

    componentWillUnmount : function() {
        AllPostStore.unlisten(this.onChange);
    },

    componentWillReceiveProps(nextProps) {
        if(!!nextProps.params.pageNum && nextProps.params.pageNum != this.pageNum) {
            this.pageNum = parseInt(nextProps.params.pageNum);
            AllPostActions.loadPage(this.pageNum);
        }
    },

    onChange : function(state){
        this.setState(state);
    },

    getInitialState : function(){
        var state = AllPostStore.getState();
        return state;
    },

    getNumberOfPages: function() {
        return Math.ceil(this.state.numberOfPosts / this.itemsPerPage);
    },

    render : function() {
        var posts = this.state.postsByPage[this.pageNum] || [];

        posts = posts.map(function(post){
            return (
                <PostPreview key={post.id} post={post} />
            )
        });

        return (
            <div>
                
                <PostListHeader header={this.state.postListContent.header} content={this.state.postListContent.content}/>

                <div className="post-list">
                    {posts}
                </div>

                <div className="pagination-wrapper">

                    <Pagination
                        numberOfPages={this.getNumberOfPages()}
                        maxButtons={config.maxPageButtons}
                        activePage={this.pageNum}
                        onSelect={this.handleSelect} />

                </div>
            </div>
        )
    }
});

module.exports = PostListView;