import React from 'react'
import UserCard from './UserCard'
import UserData from '../userData'

const Home = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "50px" }} className='mt-5'>

            {
                UserData.map((val, i) => {
                    return (
                        <UserCard img={val.img} name={val.name} colour={val.colour} />
                    )
                })
            }


        </div>
    )
}

export default Home