export async function getYelpData(searchFilter) {
  
  const rawResponse = await fetch(`/.netlify/functions/yelp?searchFilter=${searchFilter}`);
  
  const data = await rawResponse.json();
  
  return data;
}


export async function getPokemons(name) {
  const rawResponse = await fetch(`/.netlify/functions/pokemon?pokemon=${name}`);
  const data = await rawResponse.json(); 

  return data;
}