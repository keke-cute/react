import React from 'react'
import ReactDOM from 'react-dom'

import './index.css';
import Menu from './Components/menu'
import Part1a from './Components/Part1a'
import Part1c from './Components/Part1c'
import Part1d from './Components/Part1d'
import Part1homework from './Components/Part1homework'
import Test from './Components/Test'
import Part1dHomework from './Components/Part1dHomework'
import Part1dHomework2 from './Components/Part1dHomework2'

import Footer from './Components/footer'
//import TempTest from './Components/TempTest'
//React 组件必须大写

//这是part1dhomework2用到的常量，暂时只能放这里
const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

function App () {
    return (
	<body>
	    <Menu />
	    {/*<div className="mydiv"><TempTest name="keke" /></div>*/}
	    <div className="mydiv">
		<h1 className="myh1">Part1a:</h1>
		<Part1a />
	    </div>
	<div className="mydiv">
	    <h1 className="myh1">Part1c:</h1>
	    <Part1c />
	</div>
	<div className="mydiv">
	    <h1 className="myh1">Part1d:</h1>
	    <Part1d />
	</div>
	<div className="mydiv">
	    <h1 className="myh1">Part1Homework:</h1>
	    <Part1homework />
	</div>
	<div className="mydiv">
	    <h1 className="myh1">Test</h1>
	    <Test />
	</div>
	<div className="mydiv">
	    <h1 className="myh1">Part1dHomework</h1>
	    <Part1dHomework />
	</div>
	<div className="mydiv">
	    <h1 className="myh1">Part1dHomework2</h1>
	    <Part1dHomework2 anecdotes={anecdotes} />
	</div>
	<Footer />
	</body>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
