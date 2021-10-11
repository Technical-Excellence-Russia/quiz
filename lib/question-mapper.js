class QuestionMapper {

    constructor(endOfLine) {
        this.endOfLine = endOfLine || "\n";
    }

    map(fileContent) {
        const lines = fileContent.split(this.endOfLine);
        const textLineNumber = lines.indexOf("## Текст вопроса");
        const tagsLineNumber = lines.indexOf("## Темы, теги");
        const correctAnswersLineNumber = lines.indexOf("### Верный ответ(ы)");
        const incorrectAnswersLineNumber = lines.indexOf("### Другие ответ(ы)");
        const descriptionLineNumber = lines.indexOf("## Объяснение ответа");
        return {
            text: lines[textLineNumber + 2],
            tags: lines[tagsLineNumber + 2].split(",").map((s) => s.trim().toLowerCase()),
            answers: {
                correct: lines.slice(correctAnswersLineNumber + 2, incorrectAnswersLineNumber - 1).map((s) => s.substr(2)),
                incorrect: lines.slice(incorrectAnswersLineNumber + 2, descriptionLineNumber - 1).map((s) => s.substr(2)),
            },
            description: lines[descriptionLineNumber + 2]
        };
    }
}

module.exports = QuestionMapper;