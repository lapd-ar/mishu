/**
 * ACTION TYPES
 */
const GET_ANIMATION = "GET_PETS";
const SELECT_ANIMATION = "SELECT_PET";


/**
 * ACTION CREATORS
 */
export const getAnimation = () => ({
  type: GET_ANIMATION,
});
export const selectAnimation = (numString) => ({
  type: SELECT_ANIMATION,
  numString,
});


/**
 * INITIAL STATE
 */
const initialState = {
  animation: "01"
};


/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ANIMATION: 
      return { ...state }
    // this is the logic for setting an animation, in order to connect the buttons to an animation
    // simply send in the string that corresponds to that animation on the model
    case SELECT_ANIMATION: 
      return { animation: action.numString }     
    default:
      return state;
  }
}