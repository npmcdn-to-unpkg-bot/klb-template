var Tab = ReactBootstrap.Tab;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;

var Chapter = React.createClass({
    displayName: 'Chapter',
    getInitialState(){
        return {
            classes: "hidden",
            key: "p1"
        };
    },
    handleSelect(key) {
        // We want different behaviour for the menubutton so we check for it
        if (key == "menubutt") {
            // Set the active tab to the first one
            this.setState({key: "p1"});
            // Trigger the hiding of the chapter
            this.props.onMenuIconClick(this.props.chapter, false);
        }
        else {
            this.setState({key: key});
        }
    },
    renderTabs() {
        // Construct all the tabs using the Tab component from ReactBootstrap
        var tabs = [];
        var tabpanes = [];
        // Go through all chapter parts
        this.props.chapter.parts.forEach(function(part) {
            // If its a simple tab, add tab and content
            if (part.type == "tab") {
                // Add tab
                tabs.push(<NavItem eventKey={part.id}>{part.title}</NavItem>);
                // Add tab pane
                tabpanes.push(
                    <Tab.Pane eventKey={part.id}>
                        <ChapterContents contents={part.contents} />
                    </Tab.Pane>);
            }
            // If it's a dropdown, add dropdown, menu items and item tab panes
            else if (part.type == "dropdown") {
                var items = [];
                // Loop through the items
                part.items.forEach(function(item) {
                    items.push(<MenuItem eventKey={item.id}>{item.title}</MenuItem>);
                    tabpanes.push(
                        <Tab.Pane eventKey={item.id}>
                            <ChapterContents contents={item.contents} />
                        </Tab.Pane>);
                });
                // Push the dropdown tab to the tab array
                tabs.push(
                    <NavDropdown eventKey={part.id} title={part.title} id="nav-dropdown-within-tab">
                        {items}
                    </NavDropdown>
                );
            }
        });

        // Create the MenuButton from our component
        var menuButt = <span className="glyphicon glyphicon-th-large menuicon no-space" aria-hidden="true"></span>;
        // Push the menu button onto the tab list
        tabs.push(<NavItem eventKey="menubutt" className="menubutt">{menuButt}</NavItem>);
        return (
            <div>
                <Nav bsStyle="tabs">
                    {tabs}
                </Nav>
                <Tab.Content animation >
                    {tabpanes}
                </Tab.Content>
            </div>
        )
    },
    render() {
        return (
            <div id="Chapter" className={this.props.classes}>
                <div id="Chapter-banner">
                    <img src={this.props.chapter.banner} className='header-img'/>
                </div>
                <Tab.Container activeKey={this.state.key} onSelect={this.handleSelect} id="tabs" className="tabs">
                    {this.renderTabs()}
                </Tab.Container>
                <div id="about"></div>
            </div>
        );
    }
});