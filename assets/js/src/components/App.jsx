var Link = ReactRouter.Link;

var App = React.createClass({
    displayName: 'App',
    render() {
        return (
        	<div>
	        	<h1>Kennsluleiðbeiningar</h1>
	        	<ul>
	        		<li>
		        		<Link to="/a_ferd_um_samfelagid">Á ferð um samfélagið</Link>
		        	</li>
	        	</ul>
	        	{this.props.children}
	        </div>
        );
    }
});