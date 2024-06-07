

// class component

import React, { Component } from 'react'
import DemoTwo from './DemoTwo'
import DemoThree from './DemoThree'

class Demo extends Component {
    constructor(props){
        super(props)

        this.state = {
            name : "demoName",
            lastname : "Doe"
        }

        console.log('constructor of Demo')
        
    }

    componentDidMount(){
        console.log('Loading API in class.....')
    }

  render() {
      
      console.log('Render of Demo')
      const {name} = this.props;
      const changeName = () => {
          this.setState({

            ...this.state,
            name : "felix"

        })
    }

    return (
        <>
            <h1>Class component</h1>
            <p>name : {name}</p>
            <p>State : {this.state.name}</p>
            <p>lastName : {this.state.lastname}</p>
            <button onClick={changeName}>Click Me</button>
            <DemoTwo/>
            <DemoThree/>
        </>
    )
  }
}

export default Demo;






// functional component

// import {useEffect, useState} from 'react'

// const Demo = ({name}) => {

//     const [count] = useState(0)

//     useEffect(() => {

//         console.log('Api loading...')

//     },[])
//     return(
//         <>
//             <h1>Hello from Functional Component</h1>
//             <p>Name : {name}</p>
//             <p>count : {count}</p>
//         </>
//     );
// }

// export default Demo;