import Card from '../card/card.component';
import { Component } from "react";

class CardList extends Component {
    render() {
        // console.log("h3=",this.props)
        // const {jokes} = this.props;
        return (
            <div className='bg-success p-2 text-dark bg-opacity-25'>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Joke</th>
                    </tr>
                </thead>
                {/* <div className='card-list' > */}
                {/* <div> */}
                    { this.props.jokes.map((joke) => 
                        (
                            <Card key={joke.id} joke={joke}/>
                        )
                    )}
                {/* </div> */}
            </table>
            </div>

        )
    }
}

export default CardList;
