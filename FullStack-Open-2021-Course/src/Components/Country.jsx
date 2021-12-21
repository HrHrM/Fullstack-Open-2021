import React  from "react";
import Button from "./Button";

const Country = ({country, countryShow, setShow}) => {

    const lang = Object.values(country.languages)

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
                    { 
                        lang.map(e => {
                            return(
                                <li key={e}> {e} </li>
                            )
                        })
                    }
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