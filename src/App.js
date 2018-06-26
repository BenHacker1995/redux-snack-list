import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
const mapReduxStateToProps = ( reduxState ) => ({
  reduxState
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      snack: ''
    }
  }

  addSnack = () => {
    const action = { type: 'ADD_SNACK', payload: this.state.snack };
    this.props.dispatch( action );
  }

  handleSnackChange = ( event ) => {
    this.setState({
      snack: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <pre>{ JSON.stringify( this.props.reduxState )}</pre>
        <input onChange={ this.handleSnackChange } value={ this.state.snack } />
        <button onClick={ this.addSnack }>Submit Snack</button>
        <div>
          <ul>
            { this.props.reduxState.map( snack => {
              return <li key={ snack }>{ snack }</li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect( mapReduxStateToProps )( App );
