import React, {useContext} from "react"
import Context from "../context"

import Answer from "./answer"

export default function Answers() {
	const [state] = useContext(Context)
	const answers = state.question.answers

	return answers.map((a, i) => <Answer key={i.toString()} index={i.toString()} answer={a}/>)
}