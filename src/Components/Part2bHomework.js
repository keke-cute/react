import React, { useState } from 'react'

const Part2bHomework = () => {
    const [ persons, setPersons ] = useState([{ name: 'Arto Hellas' ,number:1008},{ name: 'KEKE', number: 111}, { name: 'ai', number: 111}, { name: 'keaidual', number: 111}])
    const [ newName, setNewName ] = useState('')   //使用value=把表单中的input转化为受控组件。value={newname}
    const [ newNumber, setNewNumber ] = useState('')
    const [ newSearch, setNewSearch ] = useState('')
    const [ showAll, setShowAll ] = useState(true)
    const searchEdit = (event) => {
	setNewSearch(event.target.value)
	if(newSearch === ''){setShowAll(false)}
    }
    const inputEdit = (event) => {                 //由于被转化为受控组件，行为被控制了，不能编辑内容，所以我们必须注册一个事件处理 来同步对 input 所做的更改和组件的状态
	setNewName(event.target.value)             //每当 输入元素发生变化时，都会调用事件处理函数。onChange={inputEdit}
    }
    const numEdit = (event) => {
	setNewNumber(event.target.value)
    }
    const addName = (event) => {		   
	event.preventDefault()                     //事件处理立即调用 event.preventDefault() 方法，它会阻止提交表单的默认操作。 因为默认操作会导致页面重新加载。onSubmit={addName} type="submit"
	const nameObject = {                       //这是对象模版，也可以用name当key，只要确定是唯一的即可
	    name: newName,
	    number: newNumber,
	}
	let flag = false
	persons.forEach(item => {                  //打上记号，如果输入的是相同的，那就发出警告
	    if(item.name === newName) {
		flag = true
	    }
	    if(item.name !== newName) {
		flag = false 
	    }})
	if (flag) {
	    alert(`${newName} is already added to phonebook`)
	    setNewName('')                          
	}else{
	    setPersons(persons.concat(nameObject))  //实际操作数组
	    setNewName('')                          //刷新input(事件处理还通过调用 newNote 状态的 setNewNote 函数重置受控input元素的值)
	    setNewNumber('')
	}
    }
    const booksToShow = showAll
	  ? persons
	  : persons.filter(person => person.name.toLowerCase() === newSearch.toLowerCase())
    return (
	<div>
	    <div>
		filter shown with<input value={newSearch}
					onChange={searchEdit}/>
	    </div>
	    <h2>Phonebook</h2>
	    <form onSubmit={addName}>
		<div>
		    name: <input value={newName}
				 onChange={inputEdit}/>
		</div>
		<div>
		    number: <input value={newNumber}
				   onChange={numEdit}/>
		</div>
		<div>
		    <button type="submit">add</button>
		</div>
	    </form>
	    <h2>Numbers</h2>
	    <ul>
		{booksToShow.map(person => <li key={person.name}>{person.name}-{person.number}</li>)}
	    </ul>
	</div>
    )
}

export default Part2bHomework
