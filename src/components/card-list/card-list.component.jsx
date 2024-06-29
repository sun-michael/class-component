import {Component} from 'react';

import Card from '../card/card.component';

class CardList extends Component {
    render() {
        // console.log("h3=",this.props)
        // const {jokes} = this.props;
        return (
            <div className='card-list' >
                { this.props.jokes.map((joke) => 
                    (
                        <Card key={joke.id} joke={joke}/>
                    )
                )}
            </div>
        )
    }
}

export default CardList;