import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, browserHistory} from 'react-router';

import App from '../imports/ui/App';
import ListPage from '../imports/ui/listModule/ListPage';

injectTapEventPlugin();

Meteor.startup(() => {
	render((
		<Router history={browserHistory}>
			<Route path="/" component={App}/>
			<Route path="/list" component={ListPage}/>
		</Router>
	), document.getElementById('render-target'));
});
