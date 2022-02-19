import React from "react"
import renderer from "react-test-renderer"

import Context from "../../src/context"
import Answers from "../../src/components/answers"

jest.mock("../../src/components/answer", () => (props) => {
	expect(props).toEqual({index: "0", answer: {name: "X"}})
	return "Answer"
})

describe("Answer should", () => {

	let component = null
	const state = {question: {answers: [{name: "X"}]}}

	beforeAll(() => component = renderer.create(
		<Context.Provider value={[state]}>
			<Answers/>
		</Context.Provider>)
	)

	test("equal to snapshot", () => {
		expect(component.toJSON()).toMatchSnapshot()
		expect.assertions(2)
	})

	afterAll(() => component.unmount())
})