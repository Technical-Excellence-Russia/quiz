export default function CheckAnswers(answers) {
	return answers.reduce((answer, acc) => acc &= answer.correct && (answer.checked || false))
}