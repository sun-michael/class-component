import { Component} from 'react';

class FeatureCard extends Component {
    render() {
        const {title, cardText,buttonText, handler} = this.props;
        return (
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">
                        {cardText}
                    </p>
                    <button
                        class="btn btn-primary"
                        type="button"
                        id=""
                        onClick={handler}
                    >
                        {buttonText}
                    </button>
                    </div>
                </div>
            </div>
        )
    }

}
export default FeatureCard
