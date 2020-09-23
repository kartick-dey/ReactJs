import * as actionTypes from '../actions/actionTypes';

const initialState = {
  restaurentsDetails: {
    restaurentName: null,
    restaurentLocality: null,
    restaurentAddress: null,
    openingTime: null,
    cuisines: null,
    rating: null,
    img: null
  },
  restaurentFoods: {

  }
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
