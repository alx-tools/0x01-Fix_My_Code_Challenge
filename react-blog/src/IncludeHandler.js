var request = require('superagent'),
    config = require('../config');

var IncludeHandler = (function() {

    
    var _handleInclude = function(type, path, cb) {

        var executeCallback = function(data) {
            if(typeof cb != 'undefined') {
                cb(type, data, path);
            }
        };

        switch(type) {
            case 'html':
            case 'md':

                request
                    .get(config.baseUrl+path)
                    .end(function(err, res){
                        executeCallback(res.text);
                    });
                break;

            default:
                executeCallback(null);
                break;
        }
    };
    
    return {
        handleInclude: _handleInclude
    };

})();

module.exports = IncludeHandler;