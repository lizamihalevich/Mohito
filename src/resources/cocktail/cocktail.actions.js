import * as api from './cocktail.api';

export const FETCH_COCKTAILS = 'fetchCocktails';

export const fetchCocktails = options => dispatch => (
    api.fetchCocktails(options).then(payload => dispatch({
        type: FETCH_COCKTAILS,
        payload,
    }))
);
