import React, { Component } from "react";

export default class Car extends Component {
    render() {
        const { car } = this.props;
        return (
            <div>
                <p>Carga información desde un JSON:</p>
                <ul>
                    {
                        car.map(car => {
                            return <li key={car.id}>{car.company} {car.name}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}