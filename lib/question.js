class Question {

	constructor(questions) {
		this.questions = questions || require("./questions")
	}

	getQuestion() {
		const question = this.questions[Math.floor(Math.random() * this.questions.length)]
		question.answers = question.answers.sort(() => Math.random() - 0.5)
		return question
	}

}

module.exports = Question