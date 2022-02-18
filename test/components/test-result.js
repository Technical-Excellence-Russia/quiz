import React from "react"
import renderer from "react-test-renderer"
import Context from "../../src/context"

import Result from "../../src/components/result"
import {GO_TO_GROUP, INIT} from "../../src/constants"

describe("Result should", () => {

	let component = null
	const state = {answerIndex: 5, totalQuestions: 5}
	const dispatch = (action) =>
		expect([INIT, GO_TO_GROUP].indexOf(action.type) >= 0).toBeTruthy()


	beforeAll(() => component = renderer.create(
		<Context.Provider value={[state, dispatch]}>
			<Result/>
		</Context.Provider>)
	)

	test("trigger go to group", () => {
		component.root.findByProps({className: "btn me-2 btn-primary"}).props.onClick()
		expect.assertions(1)
	})

	test("trigger close", () => {
		component.root.findByProps({className: "btn ms-2 btn-secondary"}).props.onClick()
		expect.assertions(1)
	})

	test("equal to snapshot", () => {
		expect(component.toJSON()).toMatchSnapshot()
	})

	afterAll(() => component.unmount())
})