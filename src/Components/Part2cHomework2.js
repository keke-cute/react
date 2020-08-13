import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Part2cHomework2 = () => {
    const [db, setDb] = useState([])
    useEffect(() => {
	axios
	    .get('https://restcountries.eu/rest/v2/all')
	    .then(response => {
		setDb(response.data)
	    })
    },[])
    return (
	<div>asdfsadf</div>
    )
}

export default Part2cHomework2
