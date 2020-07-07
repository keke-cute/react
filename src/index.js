import React from 'react'
import ReactDOM from 'react-dom'

import './index.css';
import Part1a from './Components/Part1a'
import Part1c from './Components/Part1c'
import Part1d from './Components/Part1d'
import Part1homework from './Components/Part1homework'
import TempTest from './Components/TempTest'
//React 组件必须大写

function App () {
    return (
	<body>
	    <div><TempTest name="keke" /></div>
	    <div>
		<h1>Part1a</h1>
		<Part1a />
	    </div>
	    <div>
		<h1>Part1c</h1>
		<Part1c />
	    </div>
	    <div>
		<h1>Part1d</h1>
		<Part1d />
	    </div>
	    <div>
		<h1>Part1Homework</h1>
		<Part1homework />
	    </div>
	</body>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
