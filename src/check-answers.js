export default function CheckAnswers(answers) {
	return answers.reduce((previous, current) => previous && (current.correct === (current.checked || false)), true)
}