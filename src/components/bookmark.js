import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookmark from '../actions/bookmark';

class Bookmark extends Component {
  constructor(props) {
    super(props)
    this.onTapped = this.onTapped.bind(this);
  }

  onTapped() {
    console.log(this.props.action)
    this.props.action.addbookmark("hI")
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.onTapped}>Add</button>
      </div>
    );
  }
}

function mapStateToProps(state,props){
  return {props: state.bookmark}
}

function mapDispatchToProps(dispatch){
  return {
    action: bindActionCreators(bookmark,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bookmark);
