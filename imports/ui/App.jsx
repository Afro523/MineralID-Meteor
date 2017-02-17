import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
//MUi stuff
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

//import {Link} from 'react-router';
import MinList from './listModule/MinList';
const minerals = [{
	'_id': 0,
	'minName': 'Acanthite',
	'summary': 'Named after the Greek word "acanthi", meaning “thorn,” in reference to the mineral’s common crystal habit. Acanthite is a common mineral that occurs in medium- to low-temperature hydrothermal sulfide veins and in secondary enrichment zones. It can be found in association with silver, pyrargyrite, proustite, polybasite, stephanite, aguilarite, galena, chalcopyrite, sphalerite, calcite, and quartz. A widespread mineral, but fine crystals can be found in localities in the Czech Republic, Germany, Mexico, the United States, Canada, and Chile. Found in silver rich deposits as lead grey to black tarnished, soft, metallic pseudocubic crystals or elongatic prismatic crystals with rounded corners commonly associated with Silver. Sectile and easily cut by a knife.',
	'formula': 'Ag2S',
	'crystalSystem': 'Monoclinic',
	'crystalHabit': 'Blocky, Skeletal, Arborescent',
	'cleavage': 'poor to none',
	'luster': 'Metallic',
	'color': 'lead gray, gray, iron black',
	'streak': 'shining black',
	'classType': 'Monoclinic - Prismatic',
	'fracture': 'Sectile',
	'hardness': '2-2.5'
},
{
	'_id': 1,
	'minName': 'Adamite',
	'summary': 'Named to honor French mineralogist Gilbert-Joseph Adam who supplied the first samples. Adamite is an uncommon secondary mineral that can be found in oxidized zinc and arsenic bearing hydrothermal deposits. Well studied material and fine specimens come from localities in Chile, Mexico, the United States, France, Germany, England, Greece, Namibia, and Australia. Adamite can fluoresce and phosphoresce a lemon-yellow under long- and short-wave ultraviolet light. Often as formless glassy crystalline crusts in zinc rich load deposits with slight yellow tinge. Typically translucent, vitreous or glassy yellow to yellowish green fanlike crystals (Mina Ojuela). Colored by impurities, especially Copper, when green or Manganese when purple. ',
	'formula': 'Zn2AsO4(OH)',
	'crystalSystem': 'Orthorhombic',
	'crystalHabit': 'Tabular, Druse, Encrustations',
	'cleavage': 'One Good',
	'luster': 'Vitreous - Resinous',
	'color': 'yellow, green, violet, pink, yellowish green',
	'streak': 'white',
	'classType': 'Orthorhombic - Dipyramidal',
	'fracture': 'Brittle',
	'hardness': '3.5'
},
{
	'_id': 2,
	'minName': 'Adamsite-(Y)',
	'summary': 'Named for Professor Frank Dawson Adams of McGill University in Montreal, Canada, who was a geologist and petrologist who studied the Monteregian Hills, one of which is Mont Saint-Hilaire where the mineral finds its type locality at the Poudrette quarry. There are only two other localities for Adamisite-Y at Hundholmen in Nordland, Norway, and at the Shomiokitovoe pegmatite in the Lovozero massif on the Kola Peninsula in Russia. Adamsite-Y should not be confused by name with Adamsite, which is a variety of muscovite. Snow white fibrous crystals. A rare late-stage, low-temperature hydrothermal mineral in an alkalic pegmatite dike associated with an intrusive alkalic gabbro-syenite complex.',
	'formula': 'NaY(CO3)2·6H2O',
	'crystalSystem': 'Triclinic',
	'crystalHabit': 'Spherical, Radial, Aggregates',
	'cleavage': 'Perfect, Good, Good',
	'luster': 'Vitreous - Pearly',
	'color': 'colorless, white, pale pink, pale purple',
	'streak': 'white',
	'classType': 'Triclinic - Pinacoidal',
	'fracture': 'Brittle',
	'hardness': '3'
}];
// App component - represents the whole app
export default class App extends Component {

	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}
	renderMinerals () {
		return  minerals.map((mineral) => (
			<MinList key={mineral._id} mineral={mineral}/>
		));
	}

	render() {

		return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
				<div className="container">
					<AppBar
						showMenuIconButton={false}
						title="Mineral ID"
					/>
					<Link to="/list"className="waves-effect waves-light btn light-blue darken-3">Mineral List</Link>
				</div>
      </MuiThemeProvider>
		);
	}
}

App.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
