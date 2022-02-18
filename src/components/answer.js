import React, {useContext} from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import {SET_CHECK} from "../constants"
import Context from "../context"

export default function Answer(props) {

	const [state, dispatch] = useContext(Context)

	const className = classNames({
		"row": true,
		"p-2": true,
		"m-2": true,
		"border": true,
		"rounded": true,
		"border-success": state.isAnswerOpen && props.answer.correct,
		"border-danger": state.isAnswerOpen && !props.answer.correct,
		"border-none": !state.isAnswerOpen,
	})

	const onChange = (value) => dispatch({type: SET_CHECK, index: props.index, value: value})


	return (
		<div className={className}>
			<div className="col text-left form-check">
				<input id={props.index} type="checkbox" className="form-check-input" checked={props.answer.checked || false}
					   onChange={(event) => onChange(event.target.checked)}/>
				<label htmlFor={props.index} className="form-check-label">{props.answer.text}</label>
			</div>
		</div>
	)
}

Answer.propTypes = {
	index: PropTypes.string.isRequired,
	answer: PropTypes.object.isRequired
}