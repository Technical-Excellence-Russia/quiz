import React, {useState} from "react"
import PropTypes from "prop-types"
import Answer from "./answer"

export default function App(props) {

	const total = 10
	const nextQuestion = () => props.questionFactory.getQuestion()

	const initialState = {
		questionIndex: 1,
		isAnswerOpen: false,
		question: nextQuestion()
	}

	const [state, setState] = useState(initialState)

	const showAnswer = () => setState({...state, isAnswerOpen: true})
	const nextAnswer = () => setState({
			...state,
			questionIndex: state.questionIndex < total ? state.questionIndex + 1 : initialState.questionIndex,
			isAnswerOpen: false,
			question: nextQuestion()
		}
	)

	const answerTag = (
		<>
			<div className={"row"}>
				<div className="col m-2 p-2 text-left border" dangerouslySetInnerHTML={{__html: state.question.description}}>

				</div>
			</div>
		</>
	)

	const progress = () => state.questionIndex * 100 / total

	return (
		<>
			<div className="row">
				<div className="col m-2 p-2 border-top border-light">
					Вопрос {state.questionIndex} из {total}
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
				<div className="col m-2 p-2 border-top border-light text-left text-light fw-bold">{state.question.text}</div>
			</div>
			{state.question.answers.map((answer, index) => <Answer key={index.toString()} index={index.toString()} answer={answer}
																   isOpen={state.isAnswerOpen}/>)}
			{(state.isAnswerOpen) ? answerTag : ""}
			<div className="row">
				<div className="col m-2 p-2 border-top border-light text-center">
					<button className={`btn me-2 ${state.isAnswerOpen ? "btn-secondary" : "btn-primary"}`} type="button"
							onClick={() => showAnswer()}>Проверить
					</button>
					{/*				</div>
				<div className="col m-2 border-top border-light text-center">*/}
					<button className={`btn ms-2 ${state.isAnswerOpen ? "btn-primary" : "btn-secondary"}`} type="button"
							onClick={() => nextAnswer()}>Следующий
					</button>
				</div>
			</div>
		</>
	)
}

App.propTypes = {
	questionFactory: PropTypes.object.isRequired
}