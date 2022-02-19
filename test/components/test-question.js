import React from "react"
import renderer from "react-test-renderer"

import Context from "../../src/context"
import {NEXT_QUESTION, TOGGLE_ANSWER} from "../../src/constants"
import Question from "../../src/components/question"

jest.mock("../../src/components/answer-description", () => () => "Answer")
jest.mock("../../src/components/answers", () => () => "Answers")

describe("Question should", () => {

	let component = null
	const state = {answerIndex: 5, totalQuestions: 5, question: {text: ""}}
	const dispatch = (action) =>
		expect([TOGGLE_ANSWER, NEXT_QUESTION].indexOf(action.type) >= 0).toBeTruthy()


	beforeAll(() => component = renderer.create(
		<Context.Provider value={[state, dispatch]}>
			<Question/>
		</Context.Provider>
	)
	)


	test("open answer", () => {
		component.root.findByProps({className: "btn me-2 btn-primary"}).props.onClick()
		expect.assertions(1)
	})

	test("next question", () => {
		component.root.findByProps({className: "btn ms-2 btn-secondary"}).props.onClick()
		expect.assertions(1)
	})

	test("equal to snapshot when answer is closed", () => {
		expect(component.toJSON()).toMatchSnapshot()
	})

	test("equal to snapshot when answer is open", () => {
		state.isAnswerOpen = true
		component = renderer.create(
			<Context.Provider value={[state, dispatch]}>
				<Question/>
			</Context.Provider>
		)
		expect(component.toJSON()).toMatchSnapshot()
	})

	afterAll(() => component.unmount())
})