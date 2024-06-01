import React, {useState} from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import { retrieveBusinessListings } from "../../utils/yelp-utils.js";

const App = () => {
  const [businesses, setBusinesses] = useState([]);
  const searchYelp = async (term, location, sortBy) => {
    try{
      const list = await retrieveBusinessListings(term, location, sortBy);
      if(list){
        setBusinesses(list);
      }     
    }
    catch(error){
      console.log(error); 
    }
    
    // console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  };

  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
