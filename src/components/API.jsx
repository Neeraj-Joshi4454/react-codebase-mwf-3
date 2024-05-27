import React, {useState, useEffect} from 'react'

const API = () => {

 const [mainData , setmainData] = useState([]);

 const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setmainData(data)
 }

 useEffect(() => {
    setTimeout( () => {

        getData()
    }, 3000)
 },[])
  return !mainData.length > 0 ? (<div className='h-[60vh] w-[50vw] bg-gray-200 rounded-md shadow-lg'></div>) : (
    <>

    <table>
        <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
        </tr>
        {
            mainData.map((val) => {
                return(
                    <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.username}</td>
                        <td>{val.email}</td>
                        <td>{val.address.street}, {val.address.city} , {val.address.zipcode}</td>
                    </tr>
                );
            })
        }
    </table>


    
    </>
  )
}

export default API