import React from 'react'

const Note = ({ note }) => {
    return (
	<li>{note.content}</li>
    )
}

const Work = ({notes}) => {
    return (
	<div>
	    <h1>Notes</h1>
	    <ul>
		{notes.map(note =>
		    <Note key={note.id} note={note} />
		)}
	    </ul>
	</div>
    )
}

const Part2a = () => {
    const notes = [
	{
	    id: 1,
	    content: 'HTML is easy',
	    date: '2019-05-30T17:30:31.098Z',
	    important: true
	},
	{
	    id: 2,
	    content: 'Browser can execute only Javascript',
	    date: '2019-05-30T18:39:34.091Z',
	    important: false
	},
	{
	    id: 3,
	    content: 'GET and POST are the most important methods of HTTP protocol',
	    date: '2019-05-30T19:20:14.298Z',
	    important: true
	}
    ]
    return (
	<Work notes = {notes}/>
    )
}

export default Part2a
