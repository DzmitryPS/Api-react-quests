import React, { Component } from 'react';
import axios from 'axios';
import Simp from './components/Simp'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      quote:'',
      name:''
    };
   

   
  }

  

  
  getdata=()=> {

    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => (response.data))
      .then(dataFromApi => {  
  this.setState({
          image: dataFromApi[0].image,
          quote:dataFromApi[0].quote,
          name: dataFromApi[0].character
        })
     
      })
  }


  render() {
    return (
      <div className="App">
        <Simp
        name={this.state.name}
        image={this.state.image}
        quote={this.state.quote}
        />
        
        <button type='button' onClick={this.getdata}>get data</button>
    
      </div>
    );
  }
}

export default App;

