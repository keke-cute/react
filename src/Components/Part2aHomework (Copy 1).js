import React from 'react'

const Part2aHomework = () => {
    const Course = {
	id: 1,
	name: 'Half Stack application development',
	parts: [
	    {
		name: 'Fundamentals of React',
		exercises: 10,
		id: 1,
	    },
	    {
		name: 'Using props to pass data',
		exercises: 7,
		id: 2,
	    },
	    {
		name: 'State of a component',
		exercises: 14,
		id: 3,
	    },
	    {
		name: 'Redux',
		exercises: 11,
		id: 4,
	    },
	]
    }
    console.log(Course.parts.map(part => part.name))
    const Header = ({Course}) => {
	return (
	    <h1>
		{Course.name}
	    </h1>
	)
    }

    const Content = ({Course}) => {
	let total = 0
	let parts=[...Course.parts]
	parts.map(part => total += part.exercises)
	const he = parts.reduce((sum,parts) => sum + parts.exercises,0)
	return (
	    <header>
		<div>
		    {Course.parts.map(part => <p key = {part.id}>{part.name} {part.exercises}</p>)}
		</div>
		<div>
		    <p>total of {he} exercises</p>
		</div>
	    </header>
	)}
    
    return (
	<header>
	    <Header Course={Course}/>
	    <Content Course={Course}/>
	</header>
    )
}

export default Part2aHomework
