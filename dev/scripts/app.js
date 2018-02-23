import React from 'react';
import ReactDOM from 'react-dom';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC4Y9FxfdzBxZ1mnzn6D_J9XcyYyF05feI",
  authDomain: "tournament-tracker-545a4.firebaseapp.com",
  databaseURL: "https://tournament-tracker-545a4.firebaseio.com",
  projectId: "tournament-tracker-545a4",
  storageBucket: "tournament-tracker-545a4.appspot.com",
  messagingSenderId: "904866225035"
};
firebase.initializeApp(config);


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      scores: []
      
    }
    this.addScore = this.addScore.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(e) {
      this.setState({
        [e.target.id]: e.target.value
      });
      console.log(e);
    }

    //gets data from firebase
    componentDidMount() {
      const dbRef = firebase.database().ref();

      //gets value of items from firebase
      dbRef.on('value', (fireBaseData) => {
        // console.log(fireBaseData.val());
        const data = fireBaseData.val();
        const state = [];
        console.log(value);
        // for (let key in data) {
        //   // console.log(key);
        //   // // console.log(data[key]);
        //   // // Ki ki's key exchange
        //   // // Here we use the value stored in the key
        //   // // variable to access the object stored at that location.
        //   // //Then we add a new property to that object, called key(confusing right?)
        //   // //And assign it the value of, key.
        //   data[key].key = key;
        //   state.push(data[key]);
        //   console.log(key);
        // }

      })
    }

    //
    

    addScore(x) {
      e.preventDefault();
      const score = {
        score: this.state.score
      }
      const dbRef = firebase.database().val();
      dbRef.push(userScore)
      this.setState ({
        score: ''
      })
      console.log(this.state.score);
    }

    render() {
      return (
        <div>
          <h1>Tournament Tracker</h1>
          <table>
            <tbody>
              <tr className="yards">
                <th>Yards</th>
                <td>432</td>
                <td>432</td>
                <td>234</td>
                <td>234</td>
                <td>543</td>
                <td>234</td>
                <td>543</td>
                <td>234</td>
                <td>433</td>
                <td>2343</td>
              </tr>
              <tr className="par">
                <th>Par</th>
                <td>4</td>
                <td>5</td>
                <td>4</td>
                <td>3</td>
                <td>5</td>
                <td>3</td>
                <td>5</td>
                <td>3</td>
                <td>4</td>
                <td>36</td>
              </tr>
              <tr className="player player1">
                <th><input name="person" /></th>
                <td><input className = "scoreInput" name="score" onChange={this.handleChange} value={this.state.score} type="text" /></td>
                <td><input className = "scoreInput" name="score" onChange={this.handleChange} value={this.state.score} type="text" /></td>
                <td><input className = "scoreInput" name="score" onChange={this.handleChange} value={this.state.score} type="text" /></td>
                <td><input className = "scoreInput" name="score" onChange={this.handleChange} value={this.state.score} type="text" /></td>
                <td><input className = "scoreInput" name="score" onChange={this.handleChange} value={this.state.score} type="text" /></td>
                <td><input className = "scoreInput" name="score" onChange={this.handleChange} value={this.state.score} type="text" /></td>
                <td><input className = "scoreInput" name="score" onChange={this.handleChange} value={this.state.score} type="text" /></td>
                <td><input className = "scoreInput" name="score" onChange={this.handleChange} value={this.state.score} type="text" /></td>
                <td><input className = "scoreInput" name="score" onChange={this.handleChange} value={this.state.score} type="text" /></td>
                <td><input className = "scoreInput" name="score" onChange={this.handleChange} value={this.state.score} type="text" /></td>
              </tr>
              <tr className="player player2">
                <th><input name="person" /></th>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput total" type="text" /></td>
              </tr>
              <tr className="holes">
                <th>Hole</th>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>Out</td>
              </tr>
              <tr className="player player3">
                <th><input name="person" /></th>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
              </tr>
              <tr className="player player4">
                <th><input name="person" /></th>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
                <td><input className = "scoreInput" type="text" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
