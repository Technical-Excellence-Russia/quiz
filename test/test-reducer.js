import ReducerFactory from "../src/reducer-factory"
import {GO_TO_GROUP, INIT, NEXT_QUESTION, SET_CHECK, TOGGLE_ANSWER} from "../src/constants"

jest.mock("../src/check-answers", () => () => true)

const mockWidow = {
	open: (url) => expect(url).toEqual("https://t.me/technicalexcellenceru")
}

const mockQuestion = {
	getQuestion: () => {
		return {}
	}
}

describe("Reducer should", () => {

	let reducer = null

	beforeAll(() => {
		reducer = ReducerFactory(mockWidow, mockQuestion)
	})

	test("initialize state", () => {
		const expected = {
			questionIndex: 1,
			answerIndex: 0,
			totalQuestions: 5,
			isAnswerOpen: false,
			isResultOpen: false,
			question: {}
		}

		const actual = reducer({}, {type: INIT})

		expect(actual).toEqual(expected)
	})

	test("set check", () => {
		const expected = true

		const actual = reducer({question: {answers: [{checked: false}]}}, {type: SET_CHECK, index: 0, value: expected})

		expect(actual.question.answers[0].checked).toEqual(expected)
	})

	test("toggle answer", () => {
		const expected = {isAnswerOpen: true}

		const actual = reducer({isAnswerOpen: false}, {type: TOGGLE_ANSWER})

		expect(actual).toEqual(expected)
	})


	test("next not last question with correct answer", () => {
		const arrange = {answerIndex: 1, totalQuestions: 3, question: {answers: []}}

		const actual = reducer(arrange, {type: NEXT_QUESTION})

		expect(actual.answerIndex).toEqual(2)
		expect(actual.isAnswerOpen).toBeFalsy()
	})

	test("next last question with correct answer", () => {
		const arrange = {questionIndex: 3, answerIndex: 2, totalQuestions: 3, question: {answers: []}}

		const actual = reducer(arrange, {type: NEXT_QUESTION})

		expect(actual.answerIndex).toEqual(3)
		expect(actual.isResultOpen).toBeTruthy()
	})


	test("go to group", () => {
		const expected = {}

		const actual = reducer(expected, {type: GO_TO_GROUP})

		expect(actual).toEqual(expected)
		expect.assertions(2)
	})

	test("default action", () => {
		const expected = {}

		const actual = reducer(expected, {})

		expect(actual).toEqual(expected)
	})

})