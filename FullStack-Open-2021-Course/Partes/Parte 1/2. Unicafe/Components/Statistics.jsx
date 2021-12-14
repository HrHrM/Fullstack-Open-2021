import React     from "react";
import Statistic from './Statistic'

const Statistics = ({good, bad, neutral}) => {
    const total    = (good + bad + neutral)
    const average  = ((good + bad + neutral) / 3)
    const positive = ((good * 100) / total)
    const ifVote   = () => {
        if(total === 0) {
            return (
                <>No hay votos ingresados todavía</>
            )
        }
        return(
            <>
                <Statistic text = {'Good'}      value = {good} />
                <Statistic text = {'Neutral'}   value = {neutral} />
                <Statistic text = {'Bad'}       value = {bad} />
                <Statistic text = {'Total'}     value = {total} />
                <Statistic text = {'Average'}   value = {average} />
                <Statistic text = {'Positives'} value = {positive} />
            </>
        )
    }
    return(
        <> {ifVote()} </>
    )
}



export default Statistics