import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = ( reduxState ) => ({
    reduxState
  })

  class SnackList extends Component {
    render(){
    // const SnackList = () => {
        return (
            <div>
                <ul>
                    { this.props.reduxState.map( snack => {
                    return <li key={ snack }>{ snack }</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default connect( mapReduxStateToProps )( SnackList );