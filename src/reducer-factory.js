import {GO_TO_GROUP, INIT, NEXT_QUESTION, SET_CHECK, TOGGLE_ANSWER} from "./constants"
import CheckAnswers from "./check-answers"

export default function ReducerFactory(window, questionFactory) {
	const nextQuestion = () => questionFactory.getQuestion()

	const initialState = {
		questionIndex: 1,
		answerIndex: 0,
		totalQuestions: 5,
		isAnswerOpen: false,
		isResultOpen: false,
		question: nextQuestion()
	}

	return function Reducer(state, action) {
		switch (action.type) {
		case INIT: {
			return initialState
		}

		case SET_CHECK: {
			const answers = state.question.answers
			answers[action.index].checked = action.value
			return {
				...state,
				question: {
					...state.question,
					answers: answers
				}
			}
		}

		case TOGGLE_ANSWER: {
			return {
				...state,
				isAnswerOpen: !state.isAnswerOpen
			}
		}

		case NEXT_QUESTION: {
			state.answerIndex = state.answerIndex + (CheckAnswers(state.question.answers) ? 1 : 0)
			if (state.questionIndex === state.totalQuestions) {
				return {
					...state,
					isResultOpen: true
				}
			} else {
				return {
					...state,
					questionIndex: state.questionIndex + 1,
					isAnswerOpen: false,
					question: nextQuestion()
				}
			}
		}

		case GO_TO_GROUP: {
			window.open("https://t.me/technicalexcellenceru", "blank")
			return state
		}

		default: {
			return state
		}
		}
	}

}