import React from 'react';
class MyComponent extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };

    }

  
  
    render() {
      const { name } = this.props;
    
      const { count } = this.state;
    
      const changeCount = () => {

        this.setState({
            count : this.state.count + 1
        })
        
      }
      return (
        <div>
          <h1>Hello, {name}!</h1>
          <p>Count: {count}</p>
          <button onClick={changeCount}>Increment Count</button>
        </div>
      );
    }
  }
  export default MyComponent;