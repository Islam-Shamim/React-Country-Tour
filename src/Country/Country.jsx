import { useState } from 'react';
import './Country.css'
const Country = ({country,markCountries}) => {
    const {name,capital,flags,population,region} = country;
    const [visited,setVisited] = useState(false);
    const laodCountry = () =>{
        setVisited(!visited)
    }
    console.log(markCountries)
    //console.log(country)
    return (
        <div className={`box ${visited?'visited':'non-visited'}`}>
            <div>
            <p>Name : {name.common}</p>
            <h5>Capital : {capital}</h5>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Region : {region}</p>
            </div>
            <button onClick={laodCountry}>{visited?'Visited':'Going'}</button>
            <p>{visited?'I have visited here':'I want to go.'}</p>
            <button onClick={() =>markCountries(country)}>Mark Country</button>
        </div>
    );
};

export default Country;