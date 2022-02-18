import React, {useContext} from "react"

import {GO_TO_GROUP, INIT} from "../constants"
import Context from "../context"

export default function Result() {

	const [state, dispatch] = useContext(Context)

	const closeResult = () => dispatch({type: INIT})
	const goToGroup = () => dispatch({type: GO_TO_GROUP})

	return (
		<>
			<div className="row">
				<div className="col m-2 p-2 border-top border-light">
					Ты ответил правильно на {state.answerIndex} из {state.totalQuestions}.
					<br/>
					<br/>
					А ещё у нас есть группа практиков;)
				</div>
			</div>
			<div className="row">
				<div className="col m-2 p-2 border-top border-light text-center">
					<button className="btn me-2 btn-primary" type="button" onClick={() => goToGroup()}>
						В группу
					</button>
					<button className="btn ms-2 btn-secondary" type="button" onClick={() => closeResult()}>
						Ещё раз
					</button>
				</div>
			</div>
		</>
	)
}