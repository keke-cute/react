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
import Part2a from './Components/Part2a'
import Part2aHomework from './Components/Part2aHomework'
import Part2b from './Components/Part2b'
import Part2bHomework from './Components/Part2bHomework'

import Footer from './Components/footer'
//import TempTest from './Components/TempTest'
//React 组件必须大写

function App () {
    return (
	<header>
	    <Menu />
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
		<Part1dHomework2 />
	    </div>
	    <div className="mydiv">
		<h1 className="myh1">Part2a</h1>
		<Part2a />
	    </div>
	    <div className="mydiv">
		<h1 className="myh1">Part2aHomework</h1>
		<Part2aHomework />
	    </div>
	    <div className="mydiv">
		<h1 className="myh1">Part2b</h1>
		<Part2b />
	    </div>
	    <div className="mydiv">
		<h1 className="myh1">Part2bHomework</h1>
		<Part2bHomework />
	    </div>
	    <Footer />
	</header>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
