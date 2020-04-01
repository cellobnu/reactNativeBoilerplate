import {createTypes, createReducer} from 'reduxsauce';

const INITIAL_STATE = {
  name: null,
  email: null,
  token: null,
};

/**
 * Action types.
 */
export const Types = createTypes(`
  SAVE_USER
  RESET_USER
`);

/**
 * Handlers.
 */
const saveUser = (state = INITIAL_STATE, action) => action.user;

const reset = () => INITIAL_STATE;

/**
 * Reducers.
 */
export default createReducer(INITIAL_STATE, {
  [Types.SAVE_USER]: saveUser,
  [Types.RESET_USER]: reset,
});
