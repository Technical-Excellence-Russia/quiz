import React from "react"
import renderer from "react-test-renderer"

import Context from "../../src/context"
import Answer, {className} from "../../src/components/answer"
import {SET_CHECK} from "../../src/constants"

describe("Answer should", () => {

	let component = null
	const answer = {}
	const state = {answerIndex: 5, totalQuestions: 5}
	const dispatch = (action) =>
		expect(action).toEqual({type: SET_CHECK, index: "0", value: true})


	beforeAll(() => component = renderer.create(
		<Context.Provider value={[state, dispatch]}>
			<Answer index={"0"} answer={answer}/>
		</Context.Provider>)
	)

	test("have className 'row p-2 m-2 border rounded border-none' when answer is not open", () => {
		const actual = className({}, false)

		expect(actual).toEqual("row p-2 m-2 border rounded border-none")
	})

	test("have className 'row p-2 m-2 border rounded border-success' when answer is open and correct", () => {
		const actual = className({correct: true}, true)

		expect(actual).toEqual("row p-2 m-2 border rounded border-success")
	})

	test("have className 'row p-2 m-2 border rounded border-success' when answer is open and is not correct", () => {
		const actual = className({correct: false}, true)

		expect(actual).toEqual("row p-2 m-2 border rounded border-danger")
	})

	test("on change", () => {
		component.root.findByType("input").props.onChange({target: {checked: true}})
		expect.assertions(1)
	})

	test("equal to snapshot", () => {
		expect(component.toJSON()).toMatchSnapshot()
	})

	afterAll(() => component.unmount())
})