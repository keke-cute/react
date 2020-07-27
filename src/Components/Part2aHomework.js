import React from 'react'

const Part2aHomework = () => {
    const Course = [
	{
	    name: 'Half Stack application development',
	    id: 1,
	    parts: [
		{
		    name: 'Fundamentals of React',
		    exercises: 10,
		    id: 1
		},
		{
		    name: 'Using props to pass data',
		    exercises: 7,
		    id: 2
		},
		{
		    name: 'State of a component',
		    exercises: 14,
		    id: 3
		},
		{
		    name: 'Redux',
		    exercises: 11,
		    id: 4
		}
	    ]
	}, 
	{
	    name: 'Node.js',
	    id: 2,
	    parts: [
		{
		    name: 'Routing',
		    exercises: 3,
		    id: 1
		},
		{
		    name: 'Middlewares',
		    exercises: 7,
		    id: 2
		}
	    ]
	},
    	{
	    name: 'keaiduo',
	    id: 3,
	    parts: [
		{
		    name: 'keke',
		    exercises: 19,
		    id: 1
		},
		{
		    name: 'keai',
		    exercises: 7,
		    id: 2
		}
	    ]
	}
    ]

    const Header = ({Course}) => {
	let total = 0;
	return (
	    <div>
		<h1>Web development curriculum</h1>
		{Course.map(item =>
		    <header key = {item.id}>
			<h3 key = {item.id}>
			    {item.name}
			</h3>
			{item.parts.map(part =>
			    <p key={part.id}>
				{part.name} {part.exercises}
			    </p>,total = 0,item.parts.map(item => total += item.exercises)
			)}
			<p>total of {total} exercises</p>
		    </header>
		)}
	    </div>
	)}
    return (
	    <Header Course={Course}/>
    )
}

export default Part2aHomework
