import React from 'react'
import ReactDOM from 'react-dom'

import './index.css';
import Menu from './Components/menu'
import Footer from './Components/footer'

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
