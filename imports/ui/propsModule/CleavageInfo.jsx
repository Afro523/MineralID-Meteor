//React
import React, {Component} from 'react';
import Divider from 'material-ui/Divider';

import MinBanner from '../MinBanner';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export default class CleavageInfo extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	render() {
		return (
			<div>
				<MinBanner/>
				<div className='container'>

					<h3 style={{textAlign:'center', paddingTop:'20px'}}>Cleavage</h3>
					<p style={{textAlign:'center'}}><i>The distinct angles of a mineral</i></p>
					<b> Summary: </b>
					<Divider/>
					<p>
						Cleavage refers to the way some minerals break along certain lines of weakness in their structure.
						They are described in terms of their quality how smoothly the mineral breaks and their difficulty how easy, or how hard, it is to produce the cleavage.  The quality of cleavages are perfect, imperfect, distinct, good, fair, and poor.
						The difficulty is described as easy, hard, and difficult to produce.
						<br/>
						For instance, the micas have a perfect cleavage in one direction that is easy to produce.
						Calcite has a perfect cleavage in three directions that is also easy to produce;
						the feldspars have a perfect cleavage in one direction that is easy to produce and a good cleavage in another direction that is hard to produce;
					</p>

					<b>Everyday Examples: </b>
					<Divider/>
					<p>

					</p>

					<b> How It Works: </b>
					<Divider/>
					<p>
						Minerals that have "perfect" cleavage almost always break in a preferred direction. Minerals that have "good" cleavage will sometimes break in a particular direction, and other times, they may not.
					</p>
				</div>
			</div>
		);
	}
}

CleavageInfo.propTypes ={

};

CleavageInfo.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
