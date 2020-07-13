import React from 'react'
import ReactDOM from 'react-dom'

import './index.css';
import Menu from './Components/menu'
import Footer from './Components/footer'

function App () {
    return (
	<body>
	    <Menu />
	    <div className="mydiv">this is my about page, now is empty,please use menu visit to other pages</div>
	    <Footer />
	</body>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
