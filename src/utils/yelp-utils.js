const apiKey = process.env.REACT_APP_YELP_API_KEY;

const apiBaseUrl = "https://api.yelp.com/v3";

export async function retrieveBusinessListings(term, location, sortBy) {
    const endpointUrl = "/businesses/search";
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    };
    let url = `${apiBaseUrl}${endpointUrl}?term=${term}&location=${location}&sort_by=${sortBy}`;
    //uncomment to overcome CORS issue
    url = "https://cors-anywhere.herokuapp.com/" + url; 
    try {
        const response = await fetch(url, options);
        const responseJson = await response.json();
        console.log(responseJson.businesses);
        return responseJson.businesses;
    } catch (error) {
        console.log(error);
    }
}