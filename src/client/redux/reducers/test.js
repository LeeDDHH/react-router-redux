import { INCREMENT, DECREMENT, ADD_ETC } from "../actionTypes";

const initialState = {
  value: 0,
  etc: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: ++state.value
      };
    
    case DECREMENT:
      return {
        ...state,
        value: --state.value
      };
    
    case ADD_ETC:
      const { content } = action.payload;
      return {
        ...state,
        etc: [
          ...state.etc, content
        ]
      };
    
    default:
      return state;
  }
};
