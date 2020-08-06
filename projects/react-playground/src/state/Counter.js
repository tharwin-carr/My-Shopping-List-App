import React from 'react';



export default class Counter extends React.Component {
    state = {
      count: 0
    };
    handleButtonClick= () => {
        const newCount= this.state.count + 1
        this.setState({
            count: newCount
        })
        console.log(this.state.count);
    }
    render() {
      return (
        <div>
          <p>The current count: {this.state.count}</p>
          <button onClick={this.handleButtonClick}>
            Add 1
          </button>
        </div>
      )
    }
  }