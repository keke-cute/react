import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './index.css';
import Menu from './Components/menu'
import Footer from './Components/footer'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

promise.then(response => {
    console.log(response)
})
function App () {
    return (
	<header>
	    <Menu />
	    <div className="mydiv">this is my home page, now is empty,please use menu visit to other pages</div>
	    <Footer />
	</header>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
