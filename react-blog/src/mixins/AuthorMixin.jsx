var React = require('react/addons');

var AuthorMixin = {
    getAuthorDetails: function(post) {
        var details = [];
        if(post.author.photo && post.author.photo != '') {
            details.push(<img key="author-photo" src={post.author.photo} className="author-photo"/>);
        } else {
            details.push(<div key="author-photo" className="author-photo-placeholder"/>);
        }
        if(post.author.name && post.author.name != '') {
            details.push(<span key="author-name" className="author-name">{post.author.name}</span>);
        }
        return details;
    }
};

module.exports = AuthorMixin;