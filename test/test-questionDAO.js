const QuestionMapper = require("../lib/question-mapper");

describe("QuestionMapper should", () => {

    const mapper = new QuestionMapper("\n");

    test("map .md to object", () => {
        const fileContent = "## Темы, теги\n\nDesign, code quality, legacy code\n\n"
            + "## Текст вопроса\n\nПростой вопрос\n\n"
            + "### Верный ответ(ы)\n\n* Да, так и есть\n* И так может быть\n\n"
            + "### Другие ответ(ы)\n\n* Нет\n* И нет\n\n"
            + "## Объяснение ответа\n\nНе знаю(\n";

        const result = mapper.map(fileContent);

        expect(result.text).toEqual("Простой вопрос");
        expect(result.tags).toEqual(["design", "code quality", "legacy code"]);
        expect(result.answers.correct).toEqual(["Да, так и есть", "И так может быть"]);
        expect(result.answers.incorrect).toEqual(["Нет", "И нет"]);
        expect(result.description).toEqual("Не знаю(");
    })

});