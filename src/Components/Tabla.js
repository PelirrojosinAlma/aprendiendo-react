import { Component } from "react";

export default class Tabla extends Component {
    render() {
        const { Data } = this.props;
        return (
            <table style={{ width: "100%" }}>
                {Data.map((item, i) => {
                    return <Fila row={item}></Fila>
                })}
            </table>
        );
    }
}

export class Fila extends Component {
    render() {
        const { row } = this.props;
        return (
            <tr>
                <Celda esTitulo={row.esTitulo}>{row.NroClase}</Celda>
                <Celda esTitulo={row.esTitulo}>{row.Descripcion}</Celda>
                <Celda esTitulo={row.esTitulo}>{row.Resultado}</Celda>
            </tr>
        );
    }
}

export class Celda extends Component {
    render() {
        const { esTitulo } = this.props;
        if (esTitulo) {
            return <th>{this.props.children}</th>;
        }
        else {
            return <td>{this.props.children}</td>;
        }
    }
}