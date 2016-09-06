var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

ReactDOM.render((
  <Router>
    <Route path=":klb" component={Klb}>
    	<Route path=":klb/:chapter" component={Chapter}/>
    </Route>
  </Router>
), document.getElementById('Target'))