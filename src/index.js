import "bootstrap";
import "./index.scss";
import Question from "../lib/question";
import Vue from "vue";

const question = new Question();

/*const params = new URL(window.location.href).searchParams;*/

const root = "../";

new Vue({
	el: "#app",
	data: {
		currentYear: new Date().getFullYear().toString(),
		isAnswerOpen: false,
		answer: "",
		/*defaultQuestion: params.get("question"),*/
		question: {
			text: "",
			tags: [],
			answers: [],
			description: [],
		},
	},
	methods: {
		goToContents: function () {
			window.location.href = root;
		},
		openAnswer: function () {
			this.question.answers = this.question.answers.map((answer) => {
				answer.class = "row mt-2 border " + (answer.correct ? "border-success" : "border-danger");
				return answer;
			})

			const isCorrect = this.question.answers.filter((answer) => answer.correct !== (answer.selected || false)).length === 0;
			this.answer = isCorrect ? "Правильно! " : " Не верно ;( " + this.question.description;
			this.isAnswerOpen = !this.isAnswerOpen;
		},
		loadQuestion: function () {
			this.isAnswerOpen = false;
			let q = question.getQuestion();
			this.question = q;
			this.question.answers = this.question.answers.sort(() => Math.random() - 0.5);


			/*			let q = question.getQuestion(this.defaultQuestion) || {
                            url: "",
                            subject: "Такой темы еще нет:(",
                            title: "Такого вопроса еще нет:(",
                            answer: "Но ты можешь его добавить в <a href=\"https://github.com/timmson/java-interview\">github.com/timmson/java-interview</a>"
                        };*/

			/*			params.set("question", q.url);
                        window.history.replaceState({}, "Вопросы для собеседования", "?" + params.toString());

                        q.url = root + q.url;
                        this.question = q;
                        this.defaultQuestion = null;*/
		}
	},
	mounted() {
		this.loadQuestion(null);
	}
});
