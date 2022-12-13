import { useState } from "react";
import Country from "./Country";
import CountryData from "./Countrydata";
import Button from "./Button";

const Countries = (props) => {
  const [display, stateDisplay] = useState(false);
  const [obj, setObj] = useState({});

  const filterCheck = props.searchFunc().length < props.countries.length;

  const displayLogic = filterCheck
    ? props.searchFunc().map((country, index, arr) => (
        <div key={country.name.common}>
          <Country country={country} />{" "}
          <Button
            text="show"
            handleClick={() => {
              setObj(arr[index]);
              stateDisplay(!display);
            }}
          />
        </div>
      ))
    : null;

  const checkOverTen =
    displayLogic?.length > 10 ? (
      <p>Too many matches, specify another filter</p>
    ) : (
      displayLogic
    );

  const searchResult =
    checkOverTen?.length === 1 ? (
      <CountryData country={checkOverTen[0].props.children[0].props.country} />
    ) : (
      checkOverTen
    );

  return <div>{display ? <CountryData country={obj} /> : searchResult}</div>;
};

export default Countries;
