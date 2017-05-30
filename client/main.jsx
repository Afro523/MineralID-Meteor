import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, browserHistory} from 'react-router';

import App from '../imports/ui/App';
import ListPage from '../imports/ui/listModule/ListPage';
import ListPage2 from '../imports/ui/listModule/ListPage2';
import IdPage from '../imports/ui/idModule/IdPage';
import PropsPage from '../imports/ui/propsModule/PropsPage';
import LusterInfo from '../imports/ui/propsModule/LusterInfo';
import HardnessInfo from '../imports/ui/propsModule/HardnessInfo';
import CrystalSystemInfo from '../imports/ui/propsModule/CrystalSystemInfo';
import CrystalHabitInfo from '../imports/ui/propsModule/CrystalHabitInfo';
import CleavageInfo from '../imports/ui/propsModule/CleavageInfo';
import StreakInfo from '../imports/ui/propsModule/StreakInfo';
import FractureInfo from '../imports/ui/propsModule/FractureInfo';
import FluorInfo from '../imports/ui/propsModule/FluorInfo';

injectTapEventPlugin();

Meteor.startup(() => {
	if (Meteor.isCordova) Meteor.subscribe('minerals');
	render((
		<Router history={browserHistory}>
			<Route path="/" component={App}/>
			<Route path="/list" component={ListPage}/>
			<Route path="/list2" component={ListPage2}/>
			<Route path="/id" component={IdPage}/>
			<Route path="/props" component={PropsPage}/>
			<Route path="/props/luster" component={LusterInfo}/>
			<Route path="/props/hardness" component={HardnessInfo}/>
			<Route path="/props/crystalsystem" component={CrystalSystemInfo}/>
			<Route path="/props/crystalhabit" component={CrystalHabitInfo}/>
			<Route path="/props/cleavage" component={CleavageInfo}/>
			<Route path="/props/streak" component={StreakInfo}/>
			<Route path="/props/fracture" component={FractureInfo}/>
			<Route path="/props/fluorescence" component={FluorInfo}/>
		</Router>
	), document.getElementById('render-target'));
});
