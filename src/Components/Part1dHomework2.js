import React, { useState } from 'react'
const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const Work = (props) => {
 
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

const Part1dHomework2 = () => {
    return (
	<Work anecdotes = {anecdotes} />
    )
}

export default Part1dHomework2
