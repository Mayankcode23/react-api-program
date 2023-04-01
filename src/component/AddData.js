import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddData = () => {
    const [values, setValues] = useState({
        id: "",
        name: "",
        country: ""
    })
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/Users", values)
            .then((res) => {
                alert("data add successfuly");
                console.log(res)
                navigate('/')
            }).catch(err => console.log(err))

    }
    return (
        <div>
            <h1>Add-Data</h1>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder='eneter name.....' onChange={e => setValues({ ...values, name: e.target.value })} /> <br /><br />
                <input type="text" placeholder='eneter country.....' onChange={e => setValues({ ...values, country: e.target.value })} /> <br /><br />
                <button >AddData</button>
                <Link to='/'>
                    <button>back</button>
                </Link>
            </form>
        </div>
    )
}

export default AddData