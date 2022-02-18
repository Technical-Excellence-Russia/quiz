const os = require("os")
const fs = require("./fs")
const QuestionMapper = require("./question-mapper")
const Logger = require("./logger")

const questionMapper = new QuestionMapper(os.EOL)
const logger = new Logger(console.log)

function readFile(fileName) {
	return {
		fileName: fileName,
		startTime: new Date().getTime(),
		fileContent: fs.readFile(__dirname + "/../questions/" + fileName)
	}

}

function mapQuestion(question) {
	const questionAsJSON = questionMapper.map(question.fileName, question.fileContent)
	logger.infoFile(question.fileName, question.startTime)
	return questionAsJSON
}

const questions = fs.getListOfMDFiles(__dirname + "/../questions/").map((fileName) => readFile(fileName)).map((question) => mapQuestion(question))

fs.writeFileContent(__dirname + "/questions.js", "module.exports =" + JSON.stringify(questions) + ";").then(() => console.log("Done"))
