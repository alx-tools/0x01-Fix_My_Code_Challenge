var React = require('react/addons');
var Tabs = require('react-bootstrap').Tabs;
var Tab = require('react-bootstrap').Tab;
var Tooltip = require('react-bootstrap').Tooltip;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var ButtonGroup = require('react-bootstrap').ButtonGroup;
var Glyphicon = require('react-bootstrap').Glyphicon;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Button = require('react-bootstrap').Button;
var Navbar = require('react-bootstrap').Navbar;
var NavBrand = require('react-bootstrap').NavBrand;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;

const ControlledTabs = React.createClass({
    getInitialState() {
        return {
            key: 1
        };
    },

    handleSelect(key) {
        alert('selected ' + key);
        this.setState({key});
    },

    render() {
        return (
            <Tabs activeKey={this.state.key} onSelect={this.handleSelect}>
                <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
                <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
            </Tabs>
        );
    }
});

const tooltip = (
    <Tooltip><strong>Holy guacamole!</strong> Check this info.</Tooltip>
);

var ReasonsToUseReact = React.createClass({

    render : function() {

        return (
            <div>
                <p>This is an example to show a blog post that uses other React components. Please see the Readme for information on how to generate component documentation for React Bootstrap. You may use React Bootstrap or your own custom components.</p>

                <h3>Tabs</h3>
                <ControlledTabs />

                <h3>Tooltips</h3>
                <ButtonToolbar>
                    <OverlayTrigger placement="left" overlay={tooltip}>
                        <Button bsStyle="default">Holy guacamole!</Button>
                    </OverlayTrigger>

                    <OverlayTrigger placement="top" overlay={tooltip}>
                        <Button bsStyle="default">Holy guacamole!</Button>
                    </OverlayTrigger>

                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <Button bsStyle="default">Holy guacamole!</Button>
                    </OverlayTrigger>

                    <OverlayTrigger placement="right" overlay={tooltip}>
                        <Button bsStyle="default">Holy guacamole!</Button>
                    </OverlayTrigger>
                </ButtonToolbar>

                <h3>Navbar</h3>
                <Navbar>
                    <NavBrand><a href="#">React-Bootstrap</a></NavBrand>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="nav-brand-dropdown">
                            <MenuItem eventKey="1">Action</MenuItem>
                            <MenuItem eventKey="2">Another action</MenuItem>
                            <MenuItem eventKey="3">Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="4">Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>

                <h3>Glyphicons</h3>
                <div>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button><Glyphicon glyph="align-left" /></Button>
                            <Button><Glyphicon glyph="align-center" /></Button>
                            <Button><Glyphicon glyph="align-right" /></Button>
                            <Button><Glyphicon glyph="align-justify" /></Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button bsSize="large"><Glyphicon glyph="star" /> Star</Button>
                            <Button><Glyphicon glyph="star" /> Star</Button>
                            <Button bsSize="small"><Glyphicon glyph="star" /> Star</Button>
                            <Button bsSize="xsmall"><Glyphicon glyph="star" /> Star</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>

            </div>
        )
    }
});

module.exports = ReasonsToUseReact;