import {
  FETCH_COCKTAILS,
} from './cocktail.actions';

export const initialState = {
  cocktails: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COCKTAILS: {
      const cocktails = [...action.payload];
      return {
        ...state,
        cocktails,
      };
    }
    default:
      return state;
  }
};
