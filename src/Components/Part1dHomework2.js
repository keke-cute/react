import React, { useState } from 'react'


const Part1dHomework2 = (props) => {
    const [selected, setSelected] = useState(0)
    return (
	<div>
	    {props.anecdotes[selected]}
	    <br/>
	    <button onClick= { () => setSelected(Math.floor(Math.random()*5)) }>next anecdotes</button>
	</div>
    )
}



export default Part1dHomework2
