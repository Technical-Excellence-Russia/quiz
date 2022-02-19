import React from "react"
import renderer from "react-test-renderer"

import App from "../src/app"
import {INIT} from "../src/constants"

jest.mock("../src/components/question", () => () => "Question")
jest.mock("../src/components/result", () => () => "Result")

describe("App should", () => {

	let component = null

	test("equal to snapshot when result is closed", () => {
		const reducer = (_, action) => {
			expect(action).toEqual({type: INIT})
			return {isResultOpen: false}
		}
		component = renderer.create(<App Reducer={reducer}/>)
		expect(component.toJSON()).toMatchSnapshot()
		expect.assertions(2)
	})

	test("equal to snapshot when result is open", () => {
		const reducer = (_, action) => {
			expect(action).toEqual({type: INIT})
			return {isResultOpen: true}
		}
		component = renderer.create(<App Reducer={reducer}/>)
		expect(component.toJSON()).toMatchSnapshot()
		expect.assertions(2)
	})


	afterAll(() => component.unmount())
})