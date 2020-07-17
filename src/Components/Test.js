import React, {useState} from 'react'

const DisPlay = props => <div>{props.value}</div>

const Button = (props) => (
    <button onClick={props.HandClick}>
	{props.text}
    </button>
)

const Test = () => {
    const [value,setvalue] = useState(10)
    return (
	<div>
	    <DisPlay value = {value} />
	    <Button HandClick={() => setvalue(value + 1)} text="+++" />
	    <Button HandClick={() => setvalue(value - 1)} text="---" />
	</div>
    )
}

export default Test
