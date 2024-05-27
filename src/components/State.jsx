// import React, {useState} from 'react';

// const State = () => {

//     const [count, setCount] = useState(0);


//     const incCount = () => {        
//         setCount(count + 1)
//     }   
    
//     const decCount = () => {
//         setCount(count - 1)
//     }

//     console.log("component rendered")


//   return (
//     <>  
//         <div>
//             <button 
//             className='bg-black text-white rounded-md shadow-md p-2 m-2'
//             onClick={incCount}
//             >Increment</button>

//             <h3 className='text-lg m-4'>{count}</h3>
            
//             <button 
//             className='bg-black text-white rounded-md shadow-md p-2 m-2'
//             onClick={decCount}
//             >Decrement</button>
//         </div>
//     </>
//   )
// }

// export default State


// state with String

// import React, { useState } from 'react'

// const State = () => {

//     const [name , setName ] = useState("felix");

//   return (
//     <>
//         <h1>Name : {name}</h1>
//         <button className='bg-black text-white rounded-md shadow-md p-2 m-2'
//         onClick={() => {setName('ITs')}}
//         >Change Name</button>

//     </>
//   )
// }

// export default State



// import React, {useState} from 'react'

// const State = () => {

//     const [courses , setCourses] = useState(["MERN", "MEAN"]);

//     const addCourse = () => {

//         const newCourse = window.prompt('Enter the name of course.');
//         setCourses([...courses, newCourse]);
//     }

//   return (
//     <>
//         <div>Courses : </div>
//         <ul>
//             {courses.map((val) => {
//                 return <li>{val}</li>
//             })}
//         </ul>

//         <button className='bg-black text-white rounded-md shadow-md p-2 m-2' onClick={addCourse}>Add Course</button>
//     </>
//   )
// }

// export default State



import React, {useState} from 'react'

const State = () => {

    const [student, setStudent] = useState([
        {id : 1, name : "Student1"}
    ]);

    const addStudent = () => {
        const newObj = {
            id  : 2,
            name : "Student 2"
        }

        setStudent([...student, newObj])
    }

  return (
    <>
        <h1>Students</h1>

        <button 
        className='bg-black text-white rounded-md shadow-md p-2 m-2'
        onClick={addStudent}
        >Add Student</button>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            
            {
                student.map((val) => {
                    return(
                        <tr>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                        </tr>           
                    );
                })
            }

        </table>

    </>
  )
}

export default State