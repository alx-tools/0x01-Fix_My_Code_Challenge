var React = require('react/addons');
var config = require('../../config');
var Link = require('react-router').Link;

var Pagination = React.createClass({

    /**
     *
     * numberOfPages{this.getNumberOfPages()}
     * maxButtons={5}
     * activePage={this.state.pageNum}
     * onSelect={this.handleSelect}
     *
     */


    itemsPerPage: config.itemsPerPage,

    contextTypes: {
        router: React.PropTypes.func
    },

    _renderPageLinks: function() {
        var numberOfPages = this.props.numberOfPages;
        var activePage = this.props.activePage;
        var maxButtons = this.props.maxButtons;

        var links = [];
        var active = '';
        var prefix = 1 + '-';
        if(numberOfPages > maxButtons) {
            if(activePage <= maxButtons) {
                prefix = 2 + '-';

                //buttons on the left
                for(var i=1; i<=maxButtons; i++) {
                    active = '';
                    if(i == activePage) {
                        active = 'active';
                    }

                    links.push(
                        <li className={active} key={prefix + i}>
                            <Link to={'/page/' + i} role="button">{i}</Link>
                        </li>);
                }

                links.push( <li className="disabled" key={prefix + 'more'}>
                                <a role="button" href="">
                                    <span aria-label="More">…</span>
                                </a>
                            </li>);
                links.push( <li key={prefix + numberOfPages}>
                                <Link to={'/page/' + numberOfPages} role="button">{numberOfPages}</Link>
                            </li>);



            } else if ((numberOfPages - activePage) < maxButtons){
                prefix = 3 + '-';

                //buttons on the right
                links.push( <li key={prefix + 1}>
                                <Link to={'/page/1'} role="button">1</Link>
                            </li>);
                links.push( <li className="disabled" key={prefix + 'more'}>
                                <a role="button" href="">
                                    <span aria-label="More">…</span>
                                </a>
                            </li>);

                for(var i=(numberOfPages - maxButtons + 1); i<=numberOfPages; i++) {
                    active = '';
                    if(i == activePage) {
                        active = 'active';
                    }

                    links.push(
                        <li className={active} key={prefix + i}>
                            <Link to={'/page/' + i} role="button">{i}</Link>
                        </li>);
                }

            } else {
                prefix = 4 + '-';

                //buttons in the middle
                links.push( <li key={prefix + '1'}>
                                <Link to={'/page/1'} role="button">1</Link>
                            </li>);
                links.push( <li className="disabled" key={prefix + 'more-1'}>
                                <a role="button" href="">
                                    <span aria-label="More">…</span>
                                </a>
                            </li>);

                for(var i=(activePage - (Math.floor(maxButtons/2))); i<=activePage + (Math.floor(maxButtons/2)); i++) {
                    active = '';
                    if(i == activePage) {
                        active = 'active';
                    }

                    links.push(
                        <li className={active} key={prefix + i}>
                            <Link to={'/page/' + i} role="button">{i}</Link>
                        </li>);
                }

                links.push( <li className="disabled" key={prefix + 'more-2'}>
                                <a role="button" href="">
                                    <span aria-label="More">…</span>
                                </a>
                            </li>);
                links.push( <li key={prefix + numberOfPages}>
                                <Link to={'/page/' + numberOfPages} role="button">{numberOfPages}</Link>
                            </li>);
            }
        } else {
            for(var i=1; i<=numberOfPages; i++) {
                active = '';
                if(i == activePage) {
                    active = 'active';
                }

                links.push(
                    <li className={active} key={prefix + i}>
                        <Link to={'/page/' + i} role="button">{i}</Link>
                    </li>);
            }
        }

        return links;
    },

    render : function() {

        return (
            <ul className="pagination-container pagination">
                <li className={this.props.activePage == 1 ? 'disabled' : ''}>
                    <Link role="button" to={'/page/1'}>
                        <span aria-label="First">«</span>
                    </Link>
                </li>
                <li className={this.props.activePage == 1 ? 'disabled' : ''}>
                    <Link role="button" to={'/page/' +(this.props.activePage - 1)}>
                        <span aria-label="Previous">‹</span>
                    </Link>
                </li>
                {this._renderPageLinks()}
                <li className={this.props.activePage == this.props.numberOfPages ? 'disabled' : ''}>
                    <Link role="button" to={'/page/' + (this.props.activePage + 1)}>
                        <span aria-label="Next">›</span>
                    </Link>
                </li>
                <li className={this.props.activePage == this.props.numberOfPages ? 'disabled' : ''}>
                    <Link role="button" to={'/page/' +this.props.numberOfPages}>
                        <span aria-label="Last">»</span>
                    </Link>
                </li>
            </ul>
        )
    }
});

module.exports = Pagination;