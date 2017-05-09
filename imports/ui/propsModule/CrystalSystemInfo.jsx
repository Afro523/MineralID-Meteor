//React
import React, {Component} from 'react';
import Divider from 'material-ui/Divider';

import MinBanner from '../MinBanner';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class CrystalSystemInfo extends Component {
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

					<h3 style={{textAlign:'center', paddingTop:'20px'}}>Crystal System</h3>
					<p style={{textAlign:'center'}}><i>The internal structure of a mineral</i></p>
					<b> Summary: </b>
					<Divider/>
					<p>
					The study of crystals and the laws that govern their growth, external shape, and internal structure is called crystallography.
					<br/>
					<br/>
					A crystal may possess only certain combinations of symmetry elements. Only 32 possibilities exist, and these are the 32 crystal classes that are grouped into six crystal systems. Every mineral belongs to one of these crystal systems.
					</p>
					<b> How It Works: </b>
					<Divider/>
					<p>
					To describe crystals, imaginary lines are used intersecting at 0 (the origin). These are specific to the various crystal systems, intersecting at given angles and being of given lengths specific to each crystal system.
					<br/>
					<br/>
					To discuss the six crystal systems, we have to describe what are called crystallographic axes. There are three axes: a, b, and c. The axes pass through the center of the crystal, and, by using them, we can describe the intersection of any given face with these three axes.
					</p>

					<b>The 6 Systems</b>
					<Divider/>


					<p style={{textAlign:'center'}}>
						<h5>Isometric System</h5>
						<i>Characteristics</i>
					</p>
					<div className='container'>
						<ul style={{listStyleType:'circle'}}>
							<li style={{listStyleType:'circle'}}>Three crystallographic axes are all equal in length</li>
							<li style={{listStyleType:'circle'}}>Intersect at right angles (90 degrees) to each other</li>
							<li style={{listStyleType:'circle'}}>Four three-fold symmetry</li>
							<li style={{listStyleType:'circle'}}>Commonly show faces that are squares, equilateral triangles</li>
						</ul>
						<div style={{textAlign:'center'}}>
							<i>Isometric Crystallographic Axes</i>
							<img className='responsive-img' src={'../exampleImg/crystalsystem/iso0.png'}/>
							<i>Common Isometric Shapes</i>
							<img className='responsive-img' src={'../exampleImg/crystalsystem/iso1.png'}/>
							<img className='responsive-img' src={'../exampleImg/crystalsystem/iso2.png'}/>
						</div>
						<p><i>These shapes are the way the crystals form within a mineral. </i></p>
					</div>
					<br/>

					<Divider/>

					<p style={{textAlign:'center'}}>
						<h5>Hexagonal System</h5>
						<i>Characteristics</i>
					</p>
					<div className='container'>
						<ul style={{listStyleType:'circle'}}>
							<li style={{listStyleType:'circle'}}>12 crystal classes divided into two groups</li>
							<li style={{listStyleType:'circle'}}>Hexagonal division with a 6-fold symmetry axis</li>
							<li style={{listStyleType:'circle'}}>Rhombohedral division have a 3-fold symmetry axis</li>
							<li style={{listStyleType:'circle'}}>Four crystallographic axes of equal length with angels of 120 degrees. The fourth axis is vertical</li>
						</ul>
						<div style={{textAlign:'center'}}>
							<i>Hexagonal Crystallographic Axes</i>
							<img className='responsive-img' src={'../exampleImg/crystalsystem/hex0.png'}/>
							<i>Common Hexagonal Shapes</i>
							<div style={{width:'100%'}}>
							<img className='responsive-img' src={'../exampleImg/crystalsystem/hex1.png'}/>
							<img className='responsive-img' src={'../exampleImg/crystalsystem/hex2.png'}/>
						</div>
						</div>
						<p><i>These shapes are the way the crystals form within a mineral. </i></p>
					</div>
					<br/>

					<Divider/>

					<p style={{textAlign:'center'}}>
						<h5>Tetragonal System</h5>
						<i>Characteristics</i>
					</p>
					<div className='container'>
						<ul style={{listStyleType:'circle'}}>
							<li style={{listStyleType:'circle'}}>Three crystallographic axes that make right angles with each other</li>
							<li style={{listStyleType:'circle'}}>Two horizontal axes of equal length, vertical axis is of a different length</li>
							<li style={{listStyleType:'circle'}}>Unique 4-fold symmetry</li>
						</ul>
						<div style={{textAlign:'center'}}>
							<i>Tetragonal Crystallographic Axes</i>
							<img className='responsive-img' src={'../exampleImg/crystalsystem/tetra0.png'}/>
							<i>Common Tetragonal Shapes</i>
							<div style={{width:'100%'}}>
							<img className='responsive-img' src={'../exampleImg/crystalsystem/tetra1.png'}/>
							<img className='responsive-img' src={'../exampleImg/crystalsystem/tetra2.png'}/>
						</div>
						</div>
						<p><i>These shapes are the way the crystals form within a mineral. </i></p>
					</div>
					<br/>

					<Divider/>

					<p style={{textAlign:'center'}}>
						<h5>Orthorhombic System</h5>
						<i>Characteristics</i>
					</p>
					<div className='container'>
						<ul style={{listStyleType:'circle'}}>
							<li style={{listStyleType:'circle'}}>Three crystallographic axes of unequal length that make angles of 90 degrees with each other</li>
							<li style={{listStyleType:'circle'}}>Three 2-fold symmetry axes</li>
						</ul>
						<div style={{textAlign:'center'}}>
							<i>Orthorhombic Crystallographic Axes</i>
							<img className='responsive-img' src={'../exampleImg/crystalsystem/ortho0.png'}/>
							<i>Common Orthorhombic Shapes</i>
							<div style={{width:'100%'}}>
							<img className='responsive-img' src={'../exampleImg/crystalsystem/ortho1.png'}/>
							<img className='responsive-img' src={'../exampleImg/crystalsystem/ortho2.png'}/>
						</div>
						</div>
						<p><i>These shapes are the way the crystals form within a mineral. </i></p>
					</div>
					<br/>

					<Divider/>

					<p style={{textAlign:'center'}}>
						<h5>Monoclinic System</h5>
						<i>Characteristics</i>
					</p>
					<div className='container'>
						<ul style={{listStyleType:'circle'}}>
							<li style={{listStyleType:'circle'}}>Three crystallographic axes of unequal lengths</li>
							<li style={{listStyleType:'circle'}}>A single 2-fold symmetry axis</li>
						</ul>
						<div style={{textAlign:'center'}}>
							<i>Monoclinic Crystallographic Axes</i>
							<img className='responsive-img' src={'../exampleImg/crystalsystem/mono1.png'}/>
							<i>Common Monoclinic Shapes</i>
							<div style={{width:'100%'}}>
							<img className='responsive-img' src={'../exampleImg/crystalsystem/mono2.png'}/>
						</div>
						</div>
						<p><i>These shapes are the way the crystals form within a mineral. </i></p>
					</div>
					<br/>

					<Divider/>

					<p style={{textAlign:'center'}}>
						<h5>Triclinic System</h5>
						<i>Characteristics</i>
					</p>
					<div className='container'>
						<ul style={{listStyleType:'circle'}}>
							<li style={{listStyleType:'circle'}}>Three crystallographic axes are of unequal lengths that make oblique angles to each other</li>
							<li style={{listStyleType:'circle'}}>1-fold symmetry axis as their only symmetry</li>
						</ul>
						<div style={{textAlign:'center'}}>
							<i>Triclinic Crystallographic Axes</i>
							<img className='responsive-img' src={'../exampleImg/crystalsystem/tri1.png'}/>
							<i>Common Triclinic Shapes</i>
							<div style={{width:'100%'}}>
							<img className='responsive-img' src={'../exampleImg/crystalsystem/tri2.png'}/>
						</div>
						</div>
						<p><i>These shapes are the way the crystals form within a mineral. </i></p>
					</div>
					<br/>
					<p style={{fontSize:'10px'}}><i>Source: V. Harder, Mineralogical Society of America Mineralogy4Kids</i></p>
				</div>
			</div>
		);
	}
}

CrystalSystemInfo.propTypes ={

};

CrystalSystemInfo.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
