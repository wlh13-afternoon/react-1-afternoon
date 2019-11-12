import React, {Component} from 'react'

export default class FilterObject extends Component {
    state = {
        unFilteredArray: [
            {
                name: 'Jimmy Joe',
                title: 'Hack0r',
                age: 12,
              },
              {
                name: 'Jeremy Schrader',
                age: 24,
                hairColor: 'brown'
              },
              {
                name: 'Carly Armstrong',
                title: 'CEO',
              }
        ],
        userInput: '',
        filteredArray: []
    }
    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }
    filter = () => {
        const {userInput} = this.state
        // this.state.unFilteredArray.filter(el => el[userInput])
    }
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
        <span  className="puzzleText">{JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input onClick={e => this.handleChange(e)}className="inputLine" type="text"/>
                <button className="confirmationButton"></button>
                <span className="resultsBox filterObjectRB"></span>

            </div>
        )
    }
}