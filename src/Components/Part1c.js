import React, {useState} from 'react';

const Display = ( {counter} ) => <div> {counter} </div>

const Button = ({ handleClick, text }) => ( //接受两个，一个为事件，一个为文字
    <button onClick = {handleClick}>
	{text}
    </button>
)
const Part1c = () => {
    const [ counter, setCounter ] = useState(0)
    const addByone = () => setCounter(counter + 1)
    const setZero = () => setCounter(0)
    const cutByone = () => setCounter(counter - 1)
    console.log('rendering...', counter)
    return (
	<div>
	    <Display counter = {counter}/>
	    <Button handleClick= {addByone} text='plus' />
	    <Button handleClick= {setZero} text = 'zero' />
	    <Button handleClick= {cutByone} text = 'minus' />
	</div>
    )
}

export default Part1c
