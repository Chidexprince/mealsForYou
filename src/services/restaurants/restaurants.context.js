/* eslint-disable prettier/prettier */
import React, { useState, useContext, createContext, useEffect } from "react";

import { LocationContext } from "../location/location.context";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  useEffect(() => {
    if(location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }

  }, [location]);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 1000);
  };

  return (
    <RestaurantsContext.Provider
        value={{
            restaurants,
            isLoading,
            error,
        }}
    >
       {children}
    </RestaurantsContext.Provider>
  )
};
