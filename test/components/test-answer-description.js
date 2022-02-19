import React from "react"
import renderer from "react-test-renderer"

import AnswerDescription from "../../src/components/answer-description"

describe("Answer should", () => {

	let component = null

	beforeAll(() => component = renderer.create(
		<AnswerDescription>Test</AnswerDescription>
	))

	test("equal to snapshot", () => {
		expect(component.toJSON()).toMatchSnapshot()
	})

	afterAll(() => component.unmount())
})