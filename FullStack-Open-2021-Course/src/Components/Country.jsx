import React, {
    useState
}             from "react";
import Button from "./Button";
import axios  from "axios";


const Country = ({country, countryShow, setShow}) => {

    const [ weatherIcon, setWeatherIcon ]     = useState('')
    const [ temperature, setTemperature ]     = useState('')
    const [ windSpeed, setWindSpeed ]         = useState('')
    const [ windDirection, setWindDirection ] = useState('')

    // const api_key = process.env.WEATHER_API
    // const weather_api = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`

    const lang    = Object.values(country.languages).map(e => {
        return(
            <li key={e}> {e} </li>
        )
    })
    // useEffect(() => {
    //     axios.get(weather_api).then(response => {
    //       setWeatherIcon  (response.data['current']['weather_icons'][0])
    //       setTemperature  (response.data['current']['temperature'])
    //       setWindSpeed    (response.data['current']['wind_speed'])
    //       setWindDirection(response.data['current']['wind_dir'])
    //     })
    //   }, [weather_api])

    if(countryShow[country.name.common]) {
        return(
            <div>
                <h2> {country.name.common} </h2>
                <div>
                    <div> Capital: {country.capital} </div>
                    <div> Population : {country.population} </div>
                </div>
                <br/>
                <div>
                    <h3> Languages </h3>
                    {lang}  
                </div>
                <br/>
                <div>
                    <img src={country.flags.svg} alt="Country Flag" width='20%' />
                </div>
            </div>
        )

    }

    return(
        <div>
            {country.name.common}
            <Button countryShow = {countryShow} setShow = {setShow} name = {country.name.common} />
            
        </div>
    )

}

export default Country