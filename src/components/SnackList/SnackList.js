import React, { Component } from 'react';
import { connect } from 'react-redux';
import SnackItem from '../SnackItem/SnackItem';

const mapReduxStateToProps = ( reduxState ) => ({
    reduxState
  })

  class SnackList extends Component {
    render(){
        return (
            <div>
                <ul>
                    { this.props.reduxState.map( snack => {
                        return <SnackItem key={ snack } snack={ snack } />
                    })}
                </ul>
            </div>
        )
    }
}
export default connect( mapReduxStateToProps )( SnackList );