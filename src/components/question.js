import React, {useContext} from "react"

import {NEXT_QUESTION, TOGGLE_ANSWER} from "../constants"
import Context from "../context"

import AnswerDescription from "./answer-description"
import Answers from "./answers"

export default function Question() {

	const [state, dispatch] = useContext(Context)

	const toggleAnswer = () => dispatch({type: TOGGLE_ANSWER})
	const nextQuestion = () => dispatch({type: NEXT_QUESTION})

	const progress = () => (state.questionIndex - 1) * 100 / state.totalQuestions

	return (
		<>
			<div className="row">
				<div className="col m-2 p-2 border-top border-light">
					Вопрос {state.questionIndex}/{state.totalQuestions}, правильно: {state.answerIndex}
					<div className="progress">
						<div className="progress-bar" role="progressbar" style={{width: `${progress()}%`}}
							 aria-valuenow={progress()}
							 aria-valuemin="0"
							 aria-valuemax="100">
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col m-2 p-2 border-top border-light text-left text-light fw-bold">
					{state.question.text}
				</div>
			</div>

			<Answers/>

			{state.isAnswerOpen ? <AnswerDescription>{state.question.description}</AnswerDescription> : null}

			<div className="row">
				<div className="col m-2 p-2 border-top border-light text-center">
					<button className={`btn me-2 ${state.isAnswerOpen ? "btn-secondary" : "btn-primary"}`} type="button"
							onClick={() => toggleAnswer()}>
						Проверить
					</button>
					<button className={`btn ms-2 ${state.isAnswerOpen ? "btn-primary" : "btn-secondary"}`} type="button"
							onClick={() => nextQuestion()}>
						Следующий
					</button>
				</div>
			</div>
		</>
	)
}