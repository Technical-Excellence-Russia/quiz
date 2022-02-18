const Converter = require("showdown").Converter

class QuestionMapper {

	constructor(endOfLine) {
		this.converter = new Converter()
		this.endOfLine = endOfLine || "\n"
	}

	map(fileName, fileContent) {
		const lines = fileContent.split(this.endOfLine)
		const textLineNumber = lines.indexOf("## Текст вопроса")
		const tagsLineNumber = lines.indexOf("## Темы, теги")
		const correctAnswersLineNumber = lines.indexOf("### Верный ответ(ы)")
		const incorrectAnswersLineNumber = lines.indexOf("### Другие ответ(ы)")
		const descriptionLineNumber = lines.indexOf("## Объяснение ответа")

		const correctAnswers = lines.slice(correctAnswersLineNumber + 2, incorrectAnswersLineNumber - 1).map((s) => s.substr(2))
			.map((text) => new Object({text: text, correct: true}))
		const incorrectAnswers = lines.slice(incorrectAnswersLineNumber + 2, descriptionLineNumber - 1).map((s) => s.substr(2))
			.map((text) => new Object({text: text, correct: false}))

		return {
			url: fileName,
			text: lines[textLineNumber + 2],
			tags: lines[tagsLineNumber + 2].split(",").map((s) => s.trim().toLowerCase()),
			answers: correctAnswers.concat(incorrectAnswers),
			description: this.converter.makeHtml(lines[descriptionLineNumber + 2])
		}
	}
}

module.exports = QuestionMapper