import React from "react"
import PropTypes from "prop-types"

export default function Answer(props) {

	const className = `row p-2 m-2 border rounded ${props.isOpen ? (props.answer.correct ? "border-success" : "border-danger") : "border-none"}`

	return (
		<div className={className}>
			<div className="col text-left form-check">
				<input id={props.index} type="checkbox" className="form-check-input"/>
				<label htmlFor={props.index} className="form-check-label">{props.answer.text}</label>
			</div>
		</div>
	)
}

Answer.propTypes = {
	index: PropTypes.string.isRequired,
	answer: PropTypes.object.isRequired,
	isOpen: PropTypes.bool.isRequired
}