// Collecting the menu tiles together
var Menutiles = React.createClass({
	render() {
		var onUpdate = this.props.onUpdate;
		var tiles = this.props.chapters.map(function(chapter) {
			return (
				<Menutile
					key={chapter.chapter}
					chid={chapter.chapter}
					thumb={chapter.thumb}
					title={chapter.title}
					chapter={chapter} 
					onUpdate={onUpdate} />
			)
		});
		return (
			<div id="Menu-tile-container" className="flex">
				{tiles}
			</div>
		)
	}
});