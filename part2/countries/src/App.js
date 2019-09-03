import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";

const App = () => {
  const [filtered, setFiltered] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  const handleSearch = e => {
    setFiltered(
      countries.filter(country => {
        return country.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      })
    );
  };

  return (
    <div>
      find countries <input onChange={handleSearch} />
      <Filter filtered={filtered} />
    </div>
  );
};

export default App;
