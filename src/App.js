import React from 'react';
import BagelsContainer from './Components/BagelsContainer'
import Form from './Components/Form'

class App extends React.Component {

  state = {
    bagelsState:[]
  }

  componentDidMount(){
    fetch('http://bagel-api-fis.herokuapp.com/bagels')
    .then(response => response.json())
    .then(result => this.setState({bagelsState:result}))
  }

  // // a more pessimistic side rendering
  // submitBagel(bagelSubmit){
  //   fetch('http://bagel-api-fis.herokuapp.com/bagels', {
  //       method:'POST',
  //       headers:{
  //       'Accept':'application/json',
  //       'Content-Type':'application/json'
  //       },
  //       body: JSON.stringify({type: bagelSubmit})
  //   })
  // }

    // a more optimistic side rendering
  submitBagel = (bagelSubmit) => {
  fetch('http://bagel-api-fis.herokuapp.com/bagels', {
      method:'POST',
      headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
      },
      body: JSON.stringify({type: bagelSubmit})
  }).then(response => response.json())
    .then(bagel => this.setState({bagelsState: [...this.state.bagelsState, bagel]}))
  }

  deleteBagel = (bagel) =>{
    //remove from state
    const newBagels = this.state.bagelsState.filter(newBagel => newBagel !== bagel)
    this.setState({bagelsState:newBagels})
    //remove from back-end
    fetch(`http://bagel-api-fis.herokuapp.com/bagels/${bagel.id}`, {method:'DELETE'})
  }

  render(){
    return (
      <>
          <h1>This is Our Bagels App</h1>
          <Form submitBagel={this.submitBagel} />
          <BagelsContainer bagelsProp={this.state.bagelsState} deleteBagel={this.deleteBagel} />
      </>
    );
  };
};

export default App;
