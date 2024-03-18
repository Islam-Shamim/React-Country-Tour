import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    //mark visited countries
    const [visitedCountries, setVisitedCountries] = useState([])
    const markCountries = country =>{
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries)
    }
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <h4>Visited Countries : {visitedCountries.length}</h4>
            {
                visitedCountries.map(country => <li key={country.cnn2}>{country.name.common}</li>)
            }
            <div className="card">
                {
                    countries.map(country => <Country key={country.cnn3} markCountries={markCountries} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;