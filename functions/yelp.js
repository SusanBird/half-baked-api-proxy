/* eslint-disable no-console */
require('dotenv').config();
const fetch = require('node-fetch');

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};


exports.handler = async (event, context) => {
  try {
    // grab the city, state, and country from the request's query parameters
    // here is an example from the netlify docs:
    // https://functions.netlify.com/playground/#hello%2C-%7Bname%7D 
    // const city = event.queryStringParameters.city;
    // const state = event.queryStringParameters.state;
    // const country = event.queryStringParameters.country;

    // consult the yelp docs to figure out how to use a city, state, and country to make a request for businesses
    // https://www.yelp.com/developers/documentation/v3/business_search
    // businesses[x].location {object}

    // don't forget to add the yelp API key!


    const response = await fetch(`https://api.yelp.com/v3/businesses/search?location=${event.queryStringParameters.search}`, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_KEY}`,
      },
    }
    );
    
    const data = await response.json();
    // eslint-disable-next-line no-unused-vars
    const json = JSON.stringify({ data });
    
    return { 
      statusCode: 200, 
      headers,
    // this is where you shoot data back to the user. right now it's sending an empty object--replace this with the yelp data. remember, you do need to stringify it, otherwise netlify gets mad. ¯\_(ツ)_/¯
      body: json 
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
