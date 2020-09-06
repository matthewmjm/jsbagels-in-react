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
  render(){
    return (
      <>
          <h1>This is Our Bagels App</h1>
          <Form/>
          <BagelsContainer bagelsProp={this.state.bagelsState} />
      </>
    );
  };
};

export default App;
