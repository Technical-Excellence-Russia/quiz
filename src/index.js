import "bootstrap"
import "./index.scss"

import React from "react"
import ReactDOM from "react-dom"

import QuestionFactory from "../lib/question"
import ReducerFactory from "./reducer-factory"
import App from "./app"

const currentYear = new Date().getFullYear()
const reducer = ReducerFactory(window, new QuestionFactory())

ReactDOM.render(
	<div className="container">
		<div className="row">
			<div className="co mt-1 text-center">
				<h2 className="text-center">Technical Excellence Quiz</h2>
			</div>
		</div>
		<App Reducer={reducer}/>
		<div className="row m-3">
			<div className="col text-end">
				<p className="copyright">&copy; {currentYear} Technical Excellence Ru</p>
			</div>
			<div className="col-sm-1">&nbsp;</div>
		</div>
	</div>
	, document.getElementById("app"))
//import Question from "../lib/question"


//const question = new Question()

//const params = new URL(window.location.href).searchParams

/*new Vue({
    el: "#app",
    data: {
        currentYear: new Date().getFullYear().toString(),
        isAnswerOpen: false,
        answer: "",
        defaultQuestion: params.get("question"),
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

            let q = question.getQuestion(this.defaultQuestion) || {
                url: "",
                text: "Такого вопроса еще нет:(",
                answers: [],
                description: "Такого ответа еще нет:("
            };

            this.question = q;
            this.question.answers = this.question.answers.sort(() => Math.random() - 0.5);

            params.set("question", q.url);
            window.history.replaceState({}, "Technical Excellence Quiz", "?" + params.toString());

            this.question = q;
            this.defaultQuestion = null;
        }
    },
    mounted() {
        this.loadQuestion(null);
    }
});*/
