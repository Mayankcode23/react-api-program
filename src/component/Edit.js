import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const { id } = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/Users/" + id)
            .then((res) => {
                setData(res.data)
                console.log(res)
            })

    }, [])
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8080/Users/" + id, data)
            .then((res) => {
                alert("update data  succesfully")
                navigate('/')
            })

    }


    return (
        <div>
            <form onSubmit={handlesubmit} >
                <input type="text" name='name' value={data.id} placeholder='eneter name.....' /> <br /><br />

                <input type="text" name='name' value={data.name} placeholder='eneter name.....'
                    onChange={e => setData({ ...data, name: e.target.value })}
                /> <br /><br />
                <input type="text" name='country' value={data.country} placeholder='eneter country.....'
                    onChange={e => setData({ ...data, country: e.target.value })}
                /> <br /><br />
                <button >update</button>
                <Link to='/'>
                    <button>back</button>
                </Link>
            </form>
        </div>
    )
}

export default Edit