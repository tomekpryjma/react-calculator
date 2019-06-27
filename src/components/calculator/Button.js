import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            symbol: null
        }
    }

    handleClick = (event) => {
        let symbol = event.target.value;
        let isSpecial = false;

        switch (symbol) {
            case "=":
                isSpecial = true;
                break;

            default:
                break;
        }
        this.props.onClick(symbol, isSpecial);
    }

    render() {
        return(
            <button
                className="d-inline-block"
                value={this.props.symbol}
                onClick={this.handleClick}>
                {this.props.symbol}
            </button>
        )
    }
}