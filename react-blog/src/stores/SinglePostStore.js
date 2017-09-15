var alt = require('../alt');
var SinglePostActions = require('../actions/SinglePostActions');

class SinglePostStore{
    constructor(){
        var self = this;
        this.bindListeners({
            handleUpdateCurrentPost: SinglePostActions.UPDATE_CURRENT_POST,
            handleUpdateIncludes: SinglePostActions.UPDATE_INCLUDES,
            handleReset: SinglePostActions.RESET
        });
        this.on('init', function(){
            self._reset();
            self.stateById = {};
        });
    }

    _reset() {
        this.currentPost = null;
        this.includes = [];
    }

    handleUpdateCurrentPost(post){
        this.id = post.id;
        this.currentPost = post;
        this.stateById[this.id] = this.stateById[this.id] || {};
        this.stateById[this.id].post = post;
    }

    handleUpdateIncludes(includes) {
        this.includes = includes;
        this.stateById[this.id] = this.stateById[this.id] || {};
        this.stateById[this.id].includes = includes;
    }

    handleReset() {
        this._reset();
    }
}

module.exports = alt.createStore(SinglePostStore, 'SinglePostStore');