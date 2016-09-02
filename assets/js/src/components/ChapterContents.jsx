
var ChapterContents = React.createClass({
    displayName: 'ChapterContents',
    render() {
        return (
            <div className="chapterpart" dangerouslySetInnerHTML={{__html: this.props.contents}}></div>
        );
    }
});