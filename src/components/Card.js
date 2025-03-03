import React from 'react'
import LazyLoadImage from './LazyLoadImage'

function Card(props) {
	return (
		<div className="Card text-center">
			<LazyLoadImage src={props.image} extraSrcs={props.extraSrcs} />
			<div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
				{props.children}
			</div>
		</div>
	)
}

export default Card
