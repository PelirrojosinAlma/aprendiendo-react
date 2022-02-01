import { Component } from "react";

export default class Eventos extends Component {
    constructor() {
        super();
        this.state = { mouseX: 0, mouseY: 0 };
    }

    handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        this.setState({ mouseX: clientX, mouseY: clientY });
    }

    render() {
        return (
            <div 
                onMouseMove={this.handleMouseMove}
            >
                <div style={{ border: '1x solid #000', margin: 5, padding: 10 }}>
                    <h4>Eventos</h4>
                    <p>{this.state.mouseX}, {this.state.mouseY}</p>
                </div>

            </div>
        );
    }
}