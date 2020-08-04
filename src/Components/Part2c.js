import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Part2c = () => {
    const [notes, setNotes] = useState([]) //空数组初始化
    const [newNote, setNewNote] = useState(
	'a new note...'
    )
    const [showAll, setShowall] = useState(true)

    useEffect(() => {
	axios
	    .get('http://localhost:3001/notes')
	    .then(response => {
		setNotes(response.data)
	    })
    },[])
    
    const handleNoteChange = (event) => {
	console.log(event.target.value)
	setNewNote(event.target.value)
    }
    const addNote = (event) => { //处理表单事件
	event.preventDefault()//事件处理立即调用 event.preventDefault() 方法，它会阻止提交表单的默认操作。 因为默认操作会导致页面重新加载。
	const noteObject = {
	    content: newNote,
	    date: new Date().toISOString(),
	    important: Math.random() > 0.5,
	    id: notes.length + 1,
	}

	setNotes(notes.concat(noteObject))
	setNewNote('')
	console.log('button clicked', event.target) //处理表单事件
    }
    const notesToShow = showAll
	  ? notes
	  : notes.filter(note => note.important)
    //表单本体
    return (
	<div>
	    <h1>Notes</h1>
	    <div>
		<button onClick={() => setShowall(!showAll)}>
		    show {showAll ? 'important' : 'all'}
		</button>
		</div>
	    <ul>
		{notesToShow.map(note => <li key={note.id}>{note.content}</li> )}
	    </ul>
	    <form onSubmit={addNote}>
		<input value={newNote}
		       onChange={handleNoteChange}
		/>
		<button type="submit">save</button>
	    </form>
	    
	</div>
    )
}

export default Part2c
