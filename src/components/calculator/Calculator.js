import React from 'react';

import Buttonpad from './Buttonpad';

import equalise from './operations/equalise';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            statement: '',
            equals: 0
        }
    }

    /**
     * Determining operation queue will use:
     * 
     * Brackets
     * Indices
     * Division
     * Multiplication
     * Addition
     * Subtraction
     * 
     * 1) Handle simple ops first - addition, subtraction, division & multiplication.
     * 2) Add brackets
     */

    recieveButtonPress = (symbol, isSpecial) => {
        isSpecial = isSpecial || false;

        this.setState( prevState => ({
            statement: prevState.statement + symbol
        }), () => {

            if (isSpecial) {                
                switch (symbol) {
                    case "=":
                        this.equals();
                        break;
                    default:
                        console.error("Button action not recognised!")
                        break;
                }
                return;
            }

            console.log(this.state.statement)
        })
    }

    equals = () => {
        this.setState({
            equals: equalise(this.state.statement)
        }, () => {
            console.log("The result is ===> " + this.state.equals)
            this.clear();
        })
    }

    clear = () => {
        this.setState({
            statement: ''
        }, () => console.log("Calculator statement cleared!"))
    }

    render() {
        return(
            <section>
                <Buttonpad
                    recieveButtonPress={this.recieveButtonPress}/>            
            </section>
        )
    }
}