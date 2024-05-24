import React, {useState} from 'react';

const State = () => {

    const [count, setCount] = useState(0);


    const incCount = () => {        
        setCount(count + 1)
    }   
    
    const decCount = () => {
        setCount(count - 1)
    }

    console.log("component rendered")


  return (
    <>  
        <div>
            <button 
            className='bg-black text-white rounded-md shadow-md p-2 m-2'
            onClick={incCount}
            >Increment</button>

            <h3 className='text-lg m-4'>{count}</h3>
            
            <button 
            className='bg-black text-white rounded-md shadow-md p-2 m-2'
            onClick={decCount}
            >Decrement</button>
        </div>
    </>
  )
}

export default State