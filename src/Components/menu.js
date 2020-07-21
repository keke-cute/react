import React from 'react'

const Menu = () => {
    return (
	<header>
	    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital@1&display=swap" rel="stylesheet" />
	    <div className="mydiv"><h1 className="myh1">Welcome to React;</h1></div>
	    <div className="mydiv grid">
		<div className="mya"><a href="./index.html">HOME</a></div>
		<div className="mya"><a href="./components.html">COMPONENTS</a></div>
		<div className="mya"><a href="./myapp.html">APP</a></div>
		<div className="mya"><a href="./about.html">ABOUT</a></div>
	    </div>
	</header>
    )
}

export default Menu
