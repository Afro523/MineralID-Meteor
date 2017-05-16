//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';

import MinBanner from '../MinBanner';
import UvCard from './UvCard';


import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class FluorInfo extends Component {
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
				<div className='container' style={{marginBottom:'10px'}}>

					<h3 style={{paddingTop:'20px', textAlign:'center'}}>Fluorescence</h3>
					<p style={{textAlign:'center'}}><i>The way a mineral reacts to UV light</i></p>

					<b> Summary: </b>
					<Divider/>
					<p>
						Fluorescence is the emission of light by a substance that has absorbed light or other electromagnetic radiation.
						<br/>
						<br/>
						Most minerals do not fluoresce when pure.
						It takes certain impurities in certain quantities to make the mineral fluoresce.
						Such impurities are called "activators". Different activators can make the same mineral fluoresce
						in different colors. Different minerals require different activators, and in different quantities.
						<br/>
						<br/>
						Many types of calcite and amber will fluoresce under shortwave UV,
						longwave UV and visible light. Rubies, emeralds, and diamonds exhibit red fluorescence under long-wave UV,
						blue and sometimes green light; diamonds also emit light under X-ray radiation.
					</p>
					<b> How It Works: </b>
					<Divider/>
					<p>
						The best way to observe fluorescence is to shine a ultraviolet light on the specimen.
						Ultraviolet lights are also commonly known as UV-lights or blacklights.
					</p>

					<b> Examples: </b>
					<Divider style={{marginBottom:'10px'}}/>
					<div>
						<UvCard
							plainPicture={'willPlain.jpg'}
							plainDescription={'Calcite and Willemite Plain / Normal Light'}
							uvPicture={'willShort.jpg'}
							uvDescription={'Red/orange Calcite, green Willemite and blue/white Hydrozincite'}
						/>
						<UvCard
							plainPicture={'norPlain.jpg'}
							plainDescription={'Norbergite Plain / Normal Light'}
							uvPicture={'norShort.jpg'}
							uvDescription={'Yellow Norbergite accented with intensely blue Diopside'}
						/>
						<UvCard
							plainPicture={'fapPlain.jpg'}
							plainDescription={'Fluorapatite Plain / Normal Light'}
							uvPicture={'fapShort.jpg'}
							uvDescription={'Lemon yellow Fluorapatite'}
						/>
					</div>
				</div>
			</div>
		);
	}
}

FluorInfo.propTypes ={

};

FluorInfo.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
