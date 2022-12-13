import Note from "./Note";
import CountryData from "./Countrydata";

const Countries = (props) => {
  const displayLogic =
    props.searchFunc().length < props.countries.length
      ? props
          .searchFunc()
          .map((country) => (
            <Note key={country.name.common} country={country} />
          ))
      : null;

  const checkOverTen =
    displayLogic?.length > 10 ? (
      <p>Too many matches, specify another filter</p>
    ) : (
      displayLogic
    );

  return (
    <div>
      <div>
        {checkOverTen?.length === 1 ? (
          <CountryData country={checkOverTen[0].props.country} />
        ) : (
          checkOverTen
        )}
      </div>
    </div>
  );
};

export default Countries;
