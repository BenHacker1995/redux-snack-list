import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = ( reduxState ) => ({
    reduxState
  })

class Form extends Component {
    render() {
        return(
            <div>
                <input onChange={ this.props.handleSnackChange } value={ this.props.reduxState.snackReducer } />
                <button onClick={ this.props.addSnack }>Submit Snack</button>
            </div>
        )
    }
}

export default connect( mapReduxStateToProps )( Form );