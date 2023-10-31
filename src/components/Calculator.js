import React, { Component } from "react";

export default class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            valDisplay: "",
            resDisplay: "",
            result: ""
        }
    }
    getValue(val){
        this.setState((prevValue) => ({
          valDisplay: prevValue.valDisplay === "" ? String(val) : prevValue.valDisplay + val,
          result: prevValue.result === "" ? String(val) : prevValue.result + val
        }));
    };
    calculate(){
        this.setState({
          resDisplay: String(eval(this.state.result)),
          result: this.state.resDisplay
        })
    };
    clear(){
      this.setState({
        valDisplay: this.state.valDisplay.slice(0,-1),
        result: this.state.result.slice(0,-1)
      })
    }
  render() {
    return (
      <>
        <div className="container">
          <div className="content">
            <div className="resultSection">
              <textarea name="display" id="display" rows="3" value={this.state.valDisplay}></textarea>
              <textarea name="result" id="result" rows="2" value={this.state.resDisplay}></textarea>
            </div>
            <div className="digitSection">
              <div className="leftPart">
                <button onClick = {() => {this.getValue("7")}}>7</button>
                <button onClick = {() => {this.getValue("8")}}>8</button>
                <button onClick = {() => {this.getValue("9")}}>9</button>
                <button onClick = {() => {this.getValue("4")}}>4</button>
                <button onClick = {() => {this.getValue("5")}}>5</button>
                <button onClick = {() => {this.getValue("6")}}>6</button>
                <button onClick = {() => {this.getValue("1")}}>1</button>
                <button onClick = {() => {this.getValue("2")}}>2</button>
                <button onClick = {() => {this.getValue("3")}}>3</button>
                <button onClick = {() => {this.getValue("0")}}>0</button>
                <button onClick = {() => {this.getValue(".")}}>.</button>
                <button onClick = {() => {this.calculate()}}>
                  <i
                    className="fa-solid fa-equals"
                    style={{ color: "rgba(134, 126, 251, 0.842)" }}
                  />
                </button>
              </div>
              <div className="rightPart">
              <button onClick = {() => {this.clear()}}>
                  <i
                    className="fa-solid fa-delete-left"
                    style={{ color: "rgba(134, 126, 251, 0.842)" }}
                  />
                </button>
                <button onClick = {() => {this.getValue("/")}}>
                  <i
                    className="fa-solid fa-divide"
                    style={{ color: "rgba(134, 126, 251, 0.842)" }}
                  />
                </button>
                <button onClick = {() => {this.getValue("*")}}>
                  <i
                    className="fa-solid fa-multiply"
                    style={{ color: "rgba(134, 126, 251, 0.842)" }}
                  />
                </button>
                <button onClick = {() => {this.getValue("-")}}>
                  <i
                    className="fa-solid fa-subtract"
                    style={{ color: "rgba(134, 126, 251, 0.842)" }}
                  />
                </button>
                <button onClick = {() => {this.getValue("+")}}>
                  <i
                    className="fa-solid fa-add"
                    style={{ color: "rgba(134, 126, 251, 0.842)" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}