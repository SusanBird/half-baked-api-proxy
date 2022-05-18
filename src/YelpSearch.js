import { useState } from 'react';
import { getYelpData } from './services/fetch-utils';

export default function YelpSearch() {
    // you'll need to track your yelp search results, the loading state, and a form field for location with a default value.
  const [yelpQuery, setYelpQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [yelpData, setYelpData] = useState([]);



  async function handleYelpSubmit(e) {
    e.preventDefault();
  
    // set the loading state to true
    setIsLoading(true);
    // use fetch to make a request to your netlify yelp function. Be sure to pass the search query as a query param in the URL
    const response = await getYelpData(yelpQuery);
    // put the jsonified data in state and set the loading state to false
    // eslint-disable-next-line no-console
    console.log('yelp search', response.data.businesses);
    setYelpData(response.data.businesses);
    setIsLoading(false);
  }
  
  return (
    <section className='yelp'>
      {/* make the fetch on submit */}
      <form onSubmit={handleYelpSubmit}>
        Search yelp for a city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <input onChange={e => setYelpQuery(e.target.value)}/>
        <button>Search yelp</button>
      </form>
      {/* Make a BusinessesList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );
}
  
