import { INCREMENT, DECREMENT, ADD_ETC } from './actionTypes';

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const addEtc = (content) => ({
  type: ADD_ETC,
  payload: {
    content
  }
});
