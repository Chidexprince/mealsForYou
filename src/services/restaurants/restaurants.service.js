/* eslint-disable prettier/prettier */
import camelize from "camelize";

import { mockImages, mocks } from "./mock";
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
      const mock = mocks[location];
      if (!mock) {
          reject("Not Found");
      }
      resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length))]
        })
        return {
            ...restaurant,
            address: restaurant.vicinity,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        };
    });

    return camelize(mappedResults);
};
