import React from "react";

const Statistics = ({good, bad, neutral}) => {
    return (
        <>
            <p>
                Good: {good}
            </p>
            <p>
                Neutral: {neutral}
            </p>
            <p>
                Bad: {bad}
            </p>
        </>
    )
}

export default Statistics