import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, browserHistory} from 'react-router';

import App from '../imports/ui/App';
import MinList from '../imports/ui/MinList';

injectTapEventPlugin();

Meteor.startup(() => {
	render((
		<Router history={browserHistory}>
			<Route path="/" component={App}/>
			<Route path="/minList" component={MinList}/>
		</Router>
	), document.getElementById('render-target'));
});
