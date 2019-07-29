import cocktailList from './cocktails';

export const fetchCocktails = () => new Promise((resolve) => {
  resolve(cocktailList);
});

// обычно как-то так:
// export const addCocktail = cocktail => apiClient.post('/coctail', cocktail);
// apiClient - кастомный request / axios
