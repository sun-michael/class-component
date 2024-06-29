import { Component} from 'react';

class Card extends Component {
    render() {
        const {joke} = this.props;
        return(
            <div key={joke.id} className='card-container'>
            <p key={joke.id}>{joke.joke}</p>
            </div>
        )
    }
}

export default Card;