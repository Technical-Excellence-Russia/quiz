import React, {useReducer} from "react"
import PropTypes from "prop-types"

import Context from "./context"

import Result from "./components/result"
import Question from "./components/question"
import {INIT} from "./constants"


export default function App(props) {

	const [state, dispatch] = useReducer(
		props.Reducer,
		{},
		() => props.Reducer({}, {type: INIT})
	)

	return (
		<Context.Provider value={[state, dispatch]}>
			{!state.isResultOpen ?
				<Question state={state}/>
				:
				<Result result={{answerIndex: state.answerIndex, total: state.totalQuestions}}/>}
		</Context.Provider>
	)
}

App.propTypes = {
	Reducer: PropTypes.func.isRequired
}