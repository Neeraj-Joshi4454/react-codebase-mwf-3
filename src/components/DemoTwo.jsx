import React, { Component } from 'react'

export default class DemoTwo extends Component {

    constructor(props){
        super(props)

        console.log('constructor of DemoTwo')
    }
    
    componentDidMount(){
        console.log('mount of DemoTwo')
    }
    render() {
      console.log('render of DemoTwo')
    return (
      <div>DemoTwo</div>
    )
  }
}
