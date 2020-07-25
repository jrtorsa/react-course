import React, { Component } from "react";
import Styles from "./styles";

class LaboralApp extends Component {
  state = {
    salary: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { salary } = this.state;
    return (
      <Styles>
        <h1 className="title">Laboral App</h1>
        <div className="header">Calcula Tu Liquidacion</div>
        <div className="body">
          <div className="salary">
            <label htmlFor="salary">Sueldo Mensual</label>
            <input
              name="salary"
              min="125"
              type="number"
              placeholder="Sueldo"
              value={salary}
              onChange={this.handleChange}
            />
          </div>
          <div className="vacations">
            <label htmlFor="vacations">Vacaciones</label>
            <input min="1" type="number" placeholder="Dias de Vacaciones" />
          </div>
          <div className="years">
            <label htmlFor="years">Años Laborando</label>
            <input
              min="1"
              max="29"
              type="number"
              placeholder="Años Laborados"
            />
          </div>
          <div className="months">
            <label htmlFor="months">Meses Laborando</label>
            <input
              min="1"
              max="11"
              type="number"
              placeholder="Meses Laborando"
            />
          </div>
        </div>
        <div className="button">
          <button>Calcular</button>
        </div>
        <div className="right-panel">
          <div className="header">Resultados</div>
          <div className="body">
            <div className="salary">
              <label>Salario Diario = </label>
              <input value={Math.floor(salary / 30)} disabled />
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}

export default LaboralApp;
