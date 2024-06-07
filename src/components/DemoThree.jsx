import React, { Component } from 'react'

export default class DemoThree extends Component {

    constructor(props){
        super(props)

        console.log('constructor of DemoThree')
    }
    
    componentDidMount(){
        console.log('mount of DemoThree')
    }
    render() {
      console.log('render of DemoThree')
    return (
      <div>DemoThree</div>
    )
  }
}
