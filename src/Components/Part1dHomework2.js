import React, { useState } from 'react'

const Part1dHomework2 = (props) => {
    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState(new Array(5+1).join('0').split('').map(parseFloat))
    let max = Math.max(...vote);
    let maxIndex = vote.indexOf(max);
    return (
	<div>
	    <h2>Anecdote of the day</h2>
	    {props.anecdotes[selected]}
	    <br />
	    <p>has {vote[selected]} votes</p>
	    <br />
	    <button onClick= { () => {
			const copy = [...vote];
			copy[selected] += 1;
			setVote(copy);}}>vote</button>
	    <button onClick= { () => setSelected(Math.floor(Math.random()*5)) }>next anecdotes</button>
	    <h2>Anecdote with most votes</h2>
	    {props.anecdotes[maxIndex]}
	    <p>has {vote[maxIndex]} votes</p>	    
	</div>
    )
}


export default Part1dHomework2
