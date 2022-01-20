import React, { Component } from "react";

export default class Forms extends Component {
    constructor() {
        super();
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputCheckbox: true,
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) => this.setState({ inputCheckbox: e.target.checked });

    render() {
        return (
            <div>
                <h4>Formularios</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="name">Nombre: </label>
                        <input
                            id="name"
                            name="userName"
                            placeholder="Introduce el nombre"
                            ref={inputElement => this.inputElement = inputElement}
                            onChange={(e) => this.setState({ inputName: e.target.value })}
                            value={this.state.inputName} />
                    </p>
                    <p>
                        <label htmlFor="twitter">@Twitter: </label>
                        <input
                            id='twitter'
                            name="twitterAccount"
                            placeholder="Introduce Tu twitter"
                            onChange={(e) => this.setState({ inputTwitter: e.target.value })}
                            value={this.state.inputTwitter} />
                    </p>
                    <p>
                        <label>
                            <input
                                type='checkbox'
                                checked={this.state.inputCheckbox}
                                onChange={this.handleChange} />
                            Acepta los terminos
                        </label>
                    </p>
                    <button>Enviar</button>
                </form>
            </div>
        );
    }
}