import React, { Component } from "react";
import DatePicker from "react-datepicker";
import Styles from "./styles";
import "react-datepicker/dist/react-datepicker.css";

class LaboralApp extends Component {
  state = {
    salary: "",
    startDate: new Date(),
    endDate: new Date()
  };

  handleStartDate = startDate => {
    this.setState({ startDate: startDate });
  };

  handleEndDate = endDate => {
    this.setState({ endDate: endDate });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { salary, startDate, endDate } = this.state;
    const dailySalary = Math.floor(salary / 30);
    console.log({ startDate });

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
          <div className="startDate">
            <label htmlFor="startDate">Fecha de Comienzo</label>
            <DatePicker selected={startDate} onChange={this.handleStartDate} />
          </div>
          <div className="endDate">
            <label htmlFor="endDate">Fecha de Terminacion</label>
            <DatePicker selected={endDate} onChange={this.handleEndDate} />
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
              <input value={dailySalary} disabled />
            </div>
            <div className="startDate">
              <label>Tiempo Laborado = </label>
              <input value={dailySalary} disabled />
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}

export default LaboralApp;
