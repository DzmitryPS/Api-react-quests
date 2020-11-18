import React, { Component } from 'react';
import Header from './components/Header'

class App extends Component {

  state = {
    text: 'marc',
    dogOwner: true,
    counter: 0,
    people: ['Marc', 'Luke', 'kabhsdn']
  }

  increase = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrease = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  sayHello = greetings => {
    alert(greetings + this.state.text)
  }

  render() {
    return (
      <div>
        <Header counterValue={this.state.counter} text={this.state.text} />
        {
          this.state.text === 'marc'
            ? <h3>Hey Marc how are you?</h3>
            : <h3>Who are you???</h3>
        }
        {
          this.state.dogOwner && <h3>I love dogs!</h3>
        }
        <ul>
          {
            this.state.people.map((person, i) => <li key={i}>Hey you {person}</li>)
          }
        </ul>
        <h1>Counter value in APP.js: {this.state.counter}</h1>
        <div>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
        </div>
        <div>
          <button onClick={() => this.sayHello('good morning ')}>Say Hello!</button>
        </div>
      </div>
    )
  }
}

export default App;

