import React from 'react';
import Calculator from './calculator/Calculator';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <main>
                <Calculator/>
            </main>
        )
    }
}