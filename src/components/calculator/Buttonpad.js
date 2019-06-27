import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import Button from './Button';

export default class extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            symbols: {
                numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                operations: ["x", "/", "+", "-"],
                special: ["=", "ce"]
            }
        }
    }

    generateButtons = (symbols) => {
        let buttons = [];

        for (let index = 0; index < symbols.length; index++) {
            let symbol = symbols[index];

            buttons.push(
                <Button
                    key={index}
                    symbol={symbol}
                    onClick={this.handleButtonPress}/>
            )
        }

        return buttons;
    }

    handleButtonPress = (symbol, isSpecial) => {
        this.props.recieveButtonPress(symbol, isSpecial);
    }

    render() {
        let numberKeys = this.generateButtons(this.state.symbols.numbers);
        let operationKeys = this.generateButtons(this.state.symbols.operations);
        let specialKeys = this.generateButtons(this.state.symbols.special);

        return(
            <Container>
                <Row>
                    <Col md={{size: 6, offset: 2}}>

                        <Row>
                            <Col md={{size: 8}}>
                                {
                                    numberKeys.map(button => (
                                        button
                                    ))
                                }
                            </Col>

                            <Col md={{size: 4}}>
                                {
                                    operationKeys.map(button => (
                                        button
                                    ))
                                }

                                <Row>
                                    <Col>
                                        {
                                            specialKeys.map(button => (
                                                button
                                            ))
                                        }
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        )
    }
}