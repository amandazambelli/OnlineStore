export async function getCategories() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await data.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const categories = `category=${categoryId}`;
  const search = `q=${query}`;
  const URL = 'https://api.mercadolibre.com/sites/MLB/search?';
  let APIcall = '';
  if (categoryId && query) APIcall = `${URL}${categories}&${search}`;
  else if (query) APIcall = `${URL}${search}`;
  else if (categoryId) APIcall = `${URL}${categories}`;
  const data = await fetch(APIcall);
  const products = await data.json();
  return products;
}
