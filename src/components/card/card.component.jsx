import { Component} from 'react';

class Card extends Component {
    render() {
        const {joke} = this.props;
        return(

            // <div key={joke.id} className='card-container'>
            // <p key={joke.id}>{joke.joke}</p>
            // </div>

            <tbody>
                <tr>
                    <th scope="row">{joke.id}</th>
                    <td class="text-start">{joke.joke}</td>
                </tr>
            </tbody>
        )
    }
}

export default Card;