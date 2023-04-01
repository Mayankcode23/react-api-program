import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Update = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = async () => {
        await axios.get("http://localhost:8080/Users")
            .then((res) => {
                setUser(res.data)
                console.log(res)
            })
    }
    // console.warn(users)

    const handledelete =(id) =>{
        console.log(id+"idss")
     axios.delete(`http://localhost:8080/Users/${id}`).then((res)=>{
            console.log(res)
            getUsers();
        })
    }


    return (
        <div>
            <h1>login</h1>
            <table border="1" style={{ float: 'left' }}>

                <thead>
                    <Link to='/adddata'>
                        <button>Add</button>
                    </Link>

                    <tr>
                        <th>ID</th>
                        <th>firstName</th>
                        <th>lastname</th>
                     
                       <th>opration</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item, i) => {
                        return (
                            <>
                                <tr key={i+1}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.country}</td>
                                    <td>
                                        <Link to={`/edit/${item.id}`}>
                                        <button>update</button>
                                        </Link>
                                        <button onClick={()=>handledelete(item.id)} >delete</button>
                                    </td>

                                </tr>
                            </>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Update