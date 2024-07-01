import Card from '../card/card.component';

const CardList = (props) => {
    const {jokes} = props;
    return (
        <div className='card-list'>
            {props.jokes.map((joke) => {
                return <Card key={joke.id} joke={joke}/>
            })}
        </div>
    )
}

export default CardList;
