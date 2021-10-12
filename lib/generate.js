const os = require("os");
const fs = require("./fs");
const QuestionMapper = require("./question-mapper");

const questionMapper = new QuestionMapper(os.EOL);

const questions = fs.getListOfMDFiles(__dirname + "/../questions/")
    .map((fileName) => fs.readFile(__dirname + "/../questions/" + fileName))
    .map((fileContents) => questionMapper.map(fileContents));

fs.writeFileContent(__dirname + "/questions.js", "module.exports =" + JSON.stringify(questions) + ";").then(() => console.log("Done"));

//console.log(JSON.stringify(questionMapper.map(fs.readFile("./questions/0001-TDD.md")), null, 2));
