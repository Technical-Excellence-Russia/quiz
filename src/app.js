import React, {useState} from "react"
import PropTypes from "prop-types"
import Answer from "./answer"

export default function App(props) {

	const total = 5
	const nextQuestion = () => props.questionFactory.getQuestion()

	const initialState = {
		questionIndex: 1,
		answerIndex: 0,
		isAnswerOpen: false,
		isResultOpen: false,
		question: nextQuestion()
	}

	const [state, setState] = useState(initialState)

	const isAnswersCorrect = () => {
		return state.question.answers.filter((answer) => {
			return answer.correct !== (answer.checked || false)
		}).length === 0
	}

	const putCheck = (index, value) => {
		const answers = state.question.answers
		answers[index].checked = value
		setState(
			{
				...state,
				question: {
					...state.question,
					answers: answers
				}
			}
		)
	}

	const showAnswer = () => setState({
			...state,
			isAnswerOpen: true
		}
	)

	const nextAnswer = () => {
		state.answerIndex = state.answerIndex + (isAnswersCorrect() ? 1 : 0)
		if (state.questionIndex === total) {
			setState({
					...state,
					isResultOpen: true
				}
			)
		} else {
			setState({
					...state,
					questionIndex: state.questionIndex + 1,
					isAnswerOpen: false,
					question: nextQuestion()
				}
			)
		}
	}

	const closeResult = () => setState(initialState)

	const goToGroup = () => window.open("https://t.me/technicalexcellenceru", "blank")

	const answers = state.question.answers.map((answer, index) => (
			<Answer key={index.toString()} index={index.toString()} answer={answer}
					isOpen={state.isAnswerOpen}
					onChange={(value) => putCheck(index, value)}/>
		)
	)

	const answerTag = (
		<>
			<div className={"row"}>
				<div className="col m-2 p-2 text-left border" dangerouslySetInnerHTML={{__html: state.question.description}}>

				</div>
			</div>
		</>
	)

	const progress = () => (state.questionIndex - 1) * 100 / total

	return (
		<>
			<div className={"row " + (state.isResultOpen ? "" : "d-none")}>
				<div className="col m-2 p-2 border-top border-light">
					Ты ответил правильно на {state.answerIndex} из {total}. <br/>
					А ещё у нас есть группа практиков;)
				</div>
			</div>

			<div className={"row " + (state.isResultOpen ? "d-none" : "")}>
				<div className="col m-2 p-2 border-top border-light">
					Вопрос {state.questionIndex}/{total}, правильно: {state.answerIndex}
					<div className="progress">
						<div className="progress-bar" role="progressbar" style={{width: `${progress()}%`}}
							 aria-valuenow={progress()}
							 aria-valuemin="0"
							 aria-valuemax="100">
						</div>
					</div>
				</div>
			</div>
			<div className={"row " + (state.isResultOpen ? "d-none" : "")}>
				<div className="col m-2 p-2 border-top border-light text-left text-light fw-bold">{state.question.text}</div>
			</div>
			{state.isResultOpen ? "" : answers}
			{state.isAnswerOpen ? answerTag : ""}
			<div className={"row " + (state.isResultOpen ? "d-none" : "")}>
				<div className="col m-2 p-2 border-top border-light text-center">
					<button className={`btn me-2 ${state.isAnswerOpen ? "btn-secondary" : "btn-primary"}`} type="button" onClick={() => showAnswer()}>
						Проверить
					</button>
					<button className={`btn ms-2 ${state.isAnswerOpen ? "btn-primary" : "btn-secondary"}`} type="button" onClick={() => nextAnswer()}>
						Следующий
					</button>
				</div>
			</div>
			<div className={"row " + (state.isResultOpen ? "" : "d-none")}>
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

App.propTypes = {
	questionFactory: PropTypes.object.isRequired
}