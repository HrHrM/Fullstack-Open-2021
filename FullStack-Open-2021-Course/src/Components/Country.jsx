import React from "react";

const Country = ({country}) => {

    return(
        <>
            <p>
                {country.name.common}
            </p>
        </>
    )
}

export default Country