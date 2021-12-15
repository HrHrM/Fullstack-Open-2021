import Title from './Title'

const Anecdote = ({ name, anecdote, vote }) => {
    return(
        <>
            <Title name = {name} />
            <p>
                {anecdote}
            </p>
            <p>
                This Anecdote has {vote} votes
            </p>
        </>
    )
}

export default Anecdote