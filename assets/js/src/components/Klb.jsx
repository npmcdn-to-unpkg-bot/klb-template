// Here is where it all comes together, the main container
var Klb = React.createClass({
    displayName: 'Klb',
    getInitialState() {
        var klb = data[this.props.params.klb];
        var chapter = klb.chapters[0];
        return {
            klb: klb,
            selected: chapter,
            menuClasses: "shadow animated bounceInDown",
            chapterClasses: "hidden"
        };
    },
    componentDidMount() {
        document.title = this.state.klb.title;
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
                menuClasses: "shadow animated bounceInDown",
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
          backgroundImage: 'url(' + this.state.klb.backgroundImg + ')',
        };
        return (
            <div className="outer" style={style} >
                <div id="Klb" className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 col-sm-12 col-xs-12">
                    <Menu
                        banner={this.state.klb.headerImg}
                        chapters={this.state.klb.chapters}
                        footerImg={this.state.klb.footerImg}
                        vnr={this.state.klb.vnr}
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
