import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({box, imageURL}) =>{
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputimage'alt='unknown'src={imageURL} width='500px' height='auto'/>
				<div style ={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}} className='bounding_box'></div>
			</div>


		</div>
	);
}

export default FaceRecognition;