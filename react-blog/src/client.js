
var Iso = require('iso');
var Router = require('react-router');
var React = require('react/addons');
var routes = require('./routes.jsx');
var alt = require('./alt');
var Analytics = require('./analytics');

Iso.bootstrap(function (state, meta, container) {
    alt.bootstrap(state);
    Router.run(routes, Router.HistoryLocation, function (Handler, state) {
        Analytics.pageView(state.path);

        var node = React.createElement(Handler);
        React.render(node, container);
    });
});
