import React, { Component } from "react";

export default class Box extends Component {
    render() {
        return (
            <div style={{ border: '3px solid red', margin: 5, padding: 5 }}>
                {this.props.children}
            </div>
        );
    }
}