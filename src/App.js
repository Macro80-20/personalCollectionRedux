import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const App = ({ cars, getCars }) => {
  useEffect(() => {
    getCars();
  }, [getCars]);

  return (
    <div>
      <h1>{JSON.stringify(cars)}</h1>
    </div>
  );
};

const mapStatetoProps = ({ cars }) => {
  return {
    cars
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCars: () =>
      dispatch({
        type: 'REQUEST',
        payload: 'loading' // so when i create an action it would look like number 3
      })
  };
};

// 3 const fetchCars = (info) =>{ return {type:GET_CARS, payload:info}}

// this is how i would break down. I have reducers ready to manage state and how i would update
// const fetch = () => {
//   return dispatch => {
//     dispatch({ type: 'REQUEST', payload: true });
//     return fetchUsers()
//       .then(data => dispatch({ type: 'SUCCESS', payload: data }))
//       .catch(err => dispatch({ types: 'ERROR', payload: err }));
//   };
// };

// the e above is fine but i need to be able to do this
// const mapDispatchToProps = dispatch => {
//   return {
//     getCars: () =>
//        fetchCars.then( x => dispatch({type: 'GET_CARS', payload: x}))
//   };
// };

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(App);
