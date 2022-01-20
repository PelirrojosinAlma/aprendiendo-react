import React, { Component } from "react";

// function Hello(props){
// return <h2>{props.titulo}</h2>;
// }

// const Hello = (props) => <h2>{props.titulo}</h2>;

export default class Hello extends Component {

    render() {
        return (
            <div>
                <h2>{this.props.titulo}</h2>
            </div>
        );
    }
}