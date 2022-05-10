import { UserActionTypes } from "./user.types";

/**
 * It returns an object with a type property and a payload property. 
 * 
 * The type property is a string that is equal to the value of the SET_CURRENT_USER constant. 
 * 
 * The payload property is equal to the user argument that is passed into the function. 
 * 
 * The user argument is an object that contains the user's id and email. 
 * 
 * The user argument is passed into the function when the setCurrentUser function is called. 
 * 
 * The setCurrentUser function is called in the App.js file. 
 * 
 * The user argument is equal to the user object that is returned from the
 * firebase.auth().onAuthStateChanged() method. 
 * 
 * The firebase.auth().onAuthStateChanged() method is called in the App.js file. 
 * 
 * The firebase.auth().onAuthStateChanged()
 * @param user - {
 */
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
