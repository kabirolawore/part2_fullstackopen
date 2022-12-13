// import Note from "./Note";

const CountryData = ({ country }) => {
  const countryName = country.name.common;
  const capital = country.capital[0];
  const area = country.area;
  const languages = Object.values(country.languages);

  return (
    <div>
      <div>
        <h2>{countryName}</h2>
        <p>capital {capital}</p>
        <p>area {area}</p>
      </div>
      <div>
        <h3>languages:</h3>
        <ul>
          {languages.map((language, index) => (
            <li key={index + 1}>{language}</li>
          ))}
        </ul>
      </div>
      <img src={country.flags.png} alt={"flag"} />
    </div>
  );
};

export default CountryData;
