import React, { Component } from "react";

export default class Texto extends Component {
    render() {
        const {
            arrayOfNumber,
            multiplicar,
            objectoConInfo,
            texto,
            numero,
            booleano,
            titulo
        } = this.props;

        const textoSegunBool = booleano ? 'Cierto' : 'Falso';
        const mappedNumber = arrayOfNumber.map(multiplicar);

        return (
            <div>
            {titulo}
            <p>texto: {texto}</p>
            <p>Numero: {numero}</p>
            <p>texto según booleano: {textoSegunBool}</p>
            <div>
                <p>Array Mapeado con Key:</p>
                <ul>
                    {arrayOfNumber.map((number, index) => {
                        return <li key={index}>{number}</li>
                    })}
                </ul>
            </div>
            <p>Array mapeado con función pasada por prop: {mappedNumber.join(', ')}</p>
            <p>(1) Acceso a atributo de objecto: {objectoConInfo.key}</p>
            <p>(2) Acceso a atributo de objecto: {objectoConInfo.key2}</p>
        </div>
        );
    };
}