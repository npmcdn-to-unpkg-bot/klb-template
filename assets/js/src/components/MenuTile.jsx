// This is a menu tile which acts as a button that reveals the relevent chapter
var Menutile = React.createClass({
	getInitialState(){
        return {
            classes: "col-md-2 col-sm-4 col-xs-6 no-space menutile animated"
        };
    },
	mouseEnter() {
		this.setState(
			{classes: 'col-md-2 col-sm-4 col-xs-6 no-space menutile animated pulse'
		});
	},
	mouseLeave() {
		this.setState({
			classes: 'col-md-2 col-sm-4 col-xs-6 no-space menutile animated'
		});
	},
	handleClick() {
		this.props.onUpdate(this.props.chapter, true);
	},
	render() {
		return (
			<div
				id={this.props.chapter.chapter}
				className={this.state.classes}
				onMouseEnter={this.mouseEnter}
				onMouseLeave={this.mouseLeave}
				onClick={this.handleClick}>
				<img src={this.props.chapter.thumb} className="tile-img img-circle" />
				<p className="text-uppercase text-center tile-title">{this.props.chapter.title}</p>
			</div>
		)
	}
});