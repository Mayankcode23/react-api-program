// import React, { useEffect, useState } from 'react'
// // import axios from 'axios'
// function App() {
//     const [users, setUser] = useState([])
//     useEffect(() => {

//         getUsers();
//     }, [])

//     const getUsers = () => {
//         fetch("https://reqres.in/api/users").then((result) => {
//             result.json().then((resp) => {
//                 console.warn(resp)
//                 setUser(resp.data)
//             })
//         })
//     }

//     // const getUsers = async() => {
//     //    await axios.get("https://reqres.in/api/users")
//     // .then((res)=>{
//     //     console.log(res)
//     // }).catch((err)=>{
//     //     console.log(err);
//     // })
//     // }
//     // console.warn(users)

// function handledelete(id) {
//     fetch(`http://localhost:4000/todo/${id}`, {
//         method: 'DELETE'
//     }).then((result) => {
//         result.json().then((resp) => {
//             console.warn(resp)
//             getUsers()
//         })
//     })
// }
//     return (
//         <div className="App">
//             <h1>Get API Call </h1>
//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>lastname</th>
//                         <th>email</th>
//                         <th>avtar</th>
//                         <th>opration</th>
//                     </tr>
//                 </thead>
//                 <tbody>

//                     {users.map((item, i) => {
//                         return (
//                             <>
//                                 <tr key={i}>
//                                     <td>{item.id}</td>
//                                     <td>{item.first_name}</td>
//                                     <td>{item.last_name}</td>
//                                     <td>{item.email}</td>
//                                     <td>{item.avatar}</td>
//                                     <td><button onClick={() => handledelete(item.id)}>delete</button></td>

//                                 </tr>
//                             </>
//                         )
//                     })}
//                 </tbody>


//             </table>
//         </div>
//     );
// }
// export default App;





















import axios from 'axios';
import React, { useEffect, useState } from 'react'
function Home() {
    const [users, setUser] = useState([])
    const [name, setName] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [userId, setUserId] = useState(null)

    useEffect(() => {
        getUsers();
    }, [])
    function getUsers() {
        fetch("https://reqres.in/api/users").then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                setUser(resp.data)
                setName(resp[0].first_name)
                setLast(resp[0].last_name)
                setEmail(resp[0].email)
                setAvatar(resp[0].avatar)
                setUserId(resp[0].id)
            })
        })
    }

    // function deleteUser(id) {
    //     fetch(`https://reqres.in/api/users/${id}`, {
    //         method: 'DELETE'
    //     }).then((result) => {
    //         result.json().then((resp) => {
    //             console.warn(resp)
    //             getUsers()
    //         })
    //     })
    // }
    const deleteUser = async(id) =>{
        await axios.delete(`https://reqres.in/api/users/${id}`).then((res)=>{
            console.log(res)
        })
    }
    function selectUser(id) {
        let item = users[id - 1];
        setName(item.first_name)
        setLast(item.last_name)
        setEmail(item.email)
        setAvatar(item.avatar);
        setUserId(item.id)
    }
    function updateUser() {
        let item = { name,last,email,avatar }
        console.warn("item", item)
        fetch(`https://reqres.in/api/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                getUsers()
            })
        })
    }
    return (
        <div className="App">
            <h1>Update User Data With API </h1>
            <table border="1" style={{ float: 'left' }}>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>lastname</th>
                        <th>email</th>
                        <th>avtar</th>
                        <th>opration</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, i) => {
                        return (
                            <>
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.avatar}</td>
                                    <td><button onClick={() => selectUser(item.id)}>Update</button></td>
                                    <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>

                                </tr>
                            </>
                        )
                    })}
                </tbody>


            </table>
            <div>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /> <br /><br />
                <input type="text" value={last} onChange={(e) => { setLast(e.target.value) }} /> <br /><br />

                <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br /><br />

                <input type="text" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} /> <br /><br />
                <button onClick={updateUser} >Update User</button>
            </div>
        </div>
    );
}
export default Home;



