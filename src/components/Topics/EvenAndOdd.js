import React, { Component } from "react";

export default class EvenAndOdd extends Component {
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }
    splitArray = () => {
        let odd = []
        let even = []
        let newArr = this.state.userInput.split(',')
        newArr.filter(el => {
            if(+el % 2 === 0){even.push(+el)}
            else{odd.push(+el)}
        })
        this.setState({
            evenArray: even,
            oddArray: odd
        })
    }
  render() {
      console.log(typeof this.state.userInput, this.state.userInput)
      console.log(this.state.evenArray)
      console.log(this.state.oddArray)
      let evens = this.state.evenArray.map((el, i) => el)
      let odds = this.state.oddArray.map((el, i) => el)
    
    return (
      <div>
        <div className="puzzleBox evenAndOddPB">
          <h4>Evens and Odds</h4>
          <input onChange={e => this.handleChange(e)} className="inputLine" type="text" />
          <button onClick={() => this.splitArray()} className="confirmationButton">Split</button>
          <span className="resultsBox">{evens}</span>
          <span className="resultsBox">{odds}</span>
        </div>
      </div>
    );
  }
}
