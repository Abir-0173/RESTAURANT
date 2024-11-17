import React, { Component } from 'react'
import { connect } from 'react-redux';
import DISHES from '../../data/dishes';

const mapStateToProps = state => {
    console.log("mapStateToProps",state);
  return {
    a: state.dishes
  }
}

export class home extends Component {
  componentDidMount(){
    console.log("Home State: ", this.state);
    console.log("Home props: ", this.props);
  }
  render() {
    document.title = "Home";
    return (
      <div>home</div>
    )
  }
}

export default connect(mapStateToProps) (home);