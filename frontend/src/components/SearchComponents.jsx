import React, { useEffect } from "react";
import { useState } from "react";
import data from "../data/data";

function SearchComponents() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const placeDetails = data.places;
      const allCities = [];
      for (const place of placeDetails) {
        for (const city of place.cities) {
          allCities.push(city);
        }
      }
      setCities(allCities);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="box mt-5 bg-light p-4">
        <form>
          <p>Start from</p>
          <select className="form-control">
            {cities.map((city) => (
              <option>{city}</option>
            ))}
          </select>
          <p>Going To</p>
          <select className="form-control">
            {cities.map((city) => (
              <option>{city}</option>
            ))}
          </select>
          <p>Date</p>
          <input type="date" className="form-control" />
          <button type="submit" className="mt-3 searchBtn text-center">
            Search Bus
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchComponents;
