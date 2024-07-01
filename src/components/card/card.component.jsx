const Card = (props) => {
    const {joke} = props;
    return(
        <div key={joke.id} className='card-container'>
        <p key={joke.id}>{joke.joke}</p>
        </div>
    )
}

export default Card;