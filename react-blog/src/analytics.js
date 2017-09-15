var ReactGA = require('react-ga');
var config = require('../config');

var gaId  = config.googleAnalyticsId;
if (typeof window !== 'undefined' && gaId && gaId.length > 0) {
    ReactGA.initialize(gaId);
} else {
    gaId = null;
}

var analytics = {
    pageView: function(page) {
        if (!gaId) {
            return;
        }
        if (!page) {
            page = window.location.pathname;
        }

        ReactGA.set({page: page});
        ReactGA.pageview(page);
    }
};

module.exports = analytics;