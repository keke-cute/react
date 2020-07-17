import React, { useState } from 'react'

const Statistics = (props) => {
    if (props.good === 0 & props.neutral === 0 & props.bad ===0 ) {
	return (
	    <div>No feedback given</div>
	)
    }else {
	return (
	    <table border="1" cellpadding="5">
		<tbody>
		    <tr>
			<td>good: </td>
			<td>neutral: </td>
			<td>bad: </td>
			<td>all: </td>
			<td>average: </td>
			<td>positive: </td>
		    </tr>
		    <tr>
			<td>{props.good}</td>
			<td>{props.neutral}</td>
			<td>{props.bad}</td>
			<td>{props.good + props.neutral + props.bad}</td>
			<td>{(props.good - props.bad)/(props.good + props.neutral + props.bad)}</td>
			<td>{props.positive}{(props.good / (props.good + props.neutral + props.bad)) * 100} %</td>
		    
		    </tr>
		</tbody>
	    </table>
	)}
}
const Button = (props) => (
    <button onClick={props.handleClick}>
	{props.text}
    </button>
)

const Part1dHomework = () => {
  // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
	<div>
	    <h2>give feedback</h2>
	    <Button handleClick = { () => setGood(good + 1) } text = "good" />
	    <Button handleClick = { () => setNeutral(neutral + 1) } text = "neutral" />
	    <Button handleClick = { () => setBad(bad + 1) } text = "bad" />
	    <h2>statistics</h2>
	    <Statistics good={good} neutral={neutral} bad={bad}/>
	</div>
    )
}

export default Part1dHomework
