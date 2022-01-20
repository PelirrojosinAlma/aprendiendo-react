import React, { Component } from "react";

export default class Contador extends Component {
    constructor() {
        super();
        this.state = { contador: 1 };
        setInterval(() => {
            this.setState({ contador: this.state.contador + 1 });
        }, 1000);
    }

    render() {
        return <ContadorNumero numero={this.state.contador} />;
    }
}

class ContadorNumero extends Component {
    render() {
        console.log('ContadorNumero render()');
        return <span>Contador: {this.props.numero}</span>;
    }
}