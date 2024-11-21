import React, { Component } from 'react'
// import DISHES from '../../data/dishes';
import Loading from './Loading';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    sample: state.sample
  }
}

export class home extends Component {


  render() {
    document.title = "Home";
    return (
      <div>
        <Loading />
      </div>
    )
  }
}

export default home;