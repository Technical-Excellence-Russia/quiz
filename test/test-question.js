const Question = require("../lib/question")

describe("Question should", () => {

	const questions = [{answers: []}, {answers: []}]

	const question = new Question(questions)

	test("return random question", () => {
		const result = question.getQuestion()

		expect(result).not.toBeUndefined()
	})

})