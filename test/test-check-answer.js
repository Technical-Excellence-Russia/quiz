import CheckAnswers from "../src/check-answers"

describe(" CheckAnswer should", () => {

	test("return true when all answers are correct", () => {
		const actual = CheckAnswers([{correct: true, checked: true}])

		expect(actual).toBeTruthy()
	})

	test("return false when some answers is missing", () => {
		const actual = CheckAnswers([{correct: true, checked: true}, {correct: true}])

		expect(actual).toBeFalsy()
	})

	test("return false when some answers are correct", () => {
		const actual = CheckAnswers([{correct: true, checked: true}, {correct: false, checked: true}])

		expect(actual).toBeFalsy()
	})


	test("return false when all answers are incorrect", () => {
		const actual = CheckAnswers([{correct: true, checked: false}, {correct: false, checked: true}])

		expect(actual).toBeFalsy()
	})


})