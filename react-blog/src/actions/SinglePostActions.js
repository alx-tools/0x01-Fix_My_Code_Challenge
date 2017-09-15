var alt = require('../alt');
var request = require('superagent');
var config = require('../../config');
var IncludeHandler = require('../IncludeHandler');

class SinglePostActions {

    loadSinglePost(id,cb){
        var self = this;

        var SinglePostStore = require('../stores/SinglePostStore');
        var state = SinglePostStore.getState();
        if(!!state.stateById[id]) {
            this.actions.updateCurrentPost(state.stateById[id].post);
            this.actions.updateIncludes(state.stateById[id].includes);
            if(cb){
                cb();
            }
        } else {
            if(typeof window != 'undefined' && typeof window.NProgress != 'undefined') {
                NProgress.start();
            }

            request.get(config.baseUrl+'/ajax/post/'+id,function(err,response){
                var post = response.body;
                var includes = post.includes || [], loadedIncludes = [];
                var includeNum  = includes.length;
                
                var finish = function() {
                    self.actions.updateCurrentPost(post);
                    self.actions.updateIncludes(loadedIncludes);
                    setTimeout(function(){
                        if(typeof NProgress != 'undefined') {
                            NProgress.done();
                        }
                    },500);
                    if(cb){
                        cb();
                    }
                };

                if(includeNum > 0) {

                    var includeCallback = function(type, data, path) {
                        loadedIncludes.push({
                            type: type,
                            value: data,
                            path: path
                        });

                        includeNum --;
                        if(includeNum == 0) {
                            finish();
                        }
                    };

                    var type, path;
                    for(const i=0; i<includes.length; i++) {
                        type = includes[i].type;
                        path = includes[i].path;
                        IncludeHandler.handleInclude(type, path, includeCallback);
                    }
                } else {
                    finish();
                }
            });   
        }
    }

    updateCurrentPost(post){
        this.dispatch(post);
    }
    
    updateIncludes(includes) {
        this.dispatch(includes);
    }
    
    reset() {
        this.dispatch();
    }
}


module.exports = alt.createActions(SinglePostActions);