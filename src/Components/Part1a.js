import React from 'react'

//React 组件必须大写

const Hello = (props) => {
    return (
	<div>
	    <p> fuck you,{props.name},you are {props.age} years old bitch </p>
	</div>
    )
}

const Part1a = () => {
    const name = 'keke'
    const age = 10
    const now = new Date()
    const a = 10
    const b = 20
    console.log("this is a log")
    return (
	<div>
	    <p>Hello world,this is {now.toString()}</p>
	    <p> {a} plus {b} is {a + b} </p>
	    <Hello name = 'miya' age = {11 + 7} />
	    <Hello name = {name} age = {age} />
	</div>
    )
}

export default Part1a
