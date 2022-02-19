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