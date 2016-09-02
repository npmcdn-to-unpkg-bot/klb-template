// Here is where it all comes together, the main container
var Container = React.createClass({
    displayName: 'Container',
    getInitialState() {
        var chapter = this.props.data.chapters[0];
        return {
            selected: chapter,
            menuClasses: "animated bounceInDown",
            chapterClasses: "hidden"
        };
    },
    onUpdate(chapter, show) {
        // Trigger the hiding/showing animations when chapter is selected/exited
        if (show) {
            this.setState({
                menuClasses: "hidden",
                chapterClasses: "shadow animated bounceInUp"
            });
        }
        else {
            this.setState({
                menuClasses: "animated bounceInDown",
                chapterClasses: "hidden"
            });
        }
        this.setState({
            selected: chapter,
            chapterShow: show
        });
    },
    render() {
        var style = {
          backgroundImage: 'url(' + this.props.data.backgroundImg + ')',
        };
        return (
            <div className="outer" style={style} >
                <div id="Container" className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 col-sm-12 col-xs-12">
                    <Menu
                        banner={this.props.data.headerImg}
                        chapters={this.props.data.chapters}
                        footerImg={this.props.data.footerImg}
                        vnr={this.props.data.vnr}
                        classes={this.state.menuClasses}
                        onUpdate={this.onUpdate} />
                    <Chapter
                        chapter={this.state.selected}
                        classes={this.state.chapterClasses}
                        onMenuIconClick={this.onUpdate} />
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Container data={data} />,
    document.getElementById('Target')
);