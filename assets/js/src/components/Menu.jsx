// Here is where the menu comes together
var Menu = React.createClass({
	render() {
		return (
		<div id="Menu" className={this.props.classes}>
			<header> <img src={this.props.banner} className="main-header-img img-responsive" /> </header>
			<Menutiles chapters={this.props.chapters} onUpdate={this.props.onUpdate} />
			<footer>
				<div className="row">
					<div className="col-md-4 col-xs-4">
						<a href="https://mms.is">
							<img src={this.props.footerImg} className="img-responsive img-footer" />
						</a>
					</div>
					<div className="col-md-4 col-md-offset-4 col-xs-4 col-xs-offset-4">
						<p className="vnr text-right">{this.props.vnr}</p>
					</div>
				</div>
			</footer>
		</div>
		)
	}
});