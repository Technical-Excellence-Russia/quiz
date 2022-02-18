import React from "react"
import PropTypes from "prop-types"

export default function AnswerDescription(props) {
	return (
		<div className="row">
			<div className="col m-2 p-2 text-left border" dangerouslySetInnerHTML={{__html: props.children}}>

			</div>
		</div>
	)
}

AnswerDescription.propTypes = {
	children: PropTypes.node
}