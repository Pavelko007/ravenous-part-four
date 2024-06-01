import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import { retrieveBusinessListings } from "./utils/yelp-utils.js"; // Import the retrieveBusinessListings function // Import the retrieveBusinessListings function


const root = createRoot(document.getElementById("root"));
root.render(<App />);

// uncomment to test the retrieveBusinessListings function
//retrieveBusinessListings("pizza", "Maine", "best_match");
