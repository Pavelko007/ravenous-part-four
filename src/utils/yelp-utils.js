const apiKey = "S1aS-cS0ZPK2pxKXP5Exr2rCq_oFkiPnBK7cjpBcnyyMQLPm36KeLikNFhQQgJJDCvjEuF5oMr2H0fj6nDDbpbMbJ8w9rKqNBKY9-xHcz8Bk4Aws0GOrskN4Sy9bZnYx";

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
    const url = `${apiBaseUrl}${endpointUrl}?term=${term}&location=${location}&sort_by=${sortBy}`;
    try {
        const response = await fetch(url, options);
        const responseJson = await response.json();
        console.log(responseJson.businesses);
        return responseJson.businesses;
    } catch (error) {
        console.log(error);
    }
}