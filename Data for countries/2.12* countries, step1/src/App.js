import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleNoteChange = {
    setSearch(event) {
      setNewSearch(event.target.value);
    },
  };

  const handleSearch = () => {
    // gets input and compare with countries array
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(newSearch.toLowerCase())
    );
  };

  return (
    <div>
      <Filter
        handleValue={newSearch}
        handleChange={handleNoteChange.setSearch}
      />
      <Countries searchFunc={handleSearch} countries={countries} />
    </div>
  );
};

export default App;
