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
      scores: [],
      score1: '',
      score2: '',
      score3: '', 
      score4: '', 
      score5: '', 
      score6: '', 
      score7: '', 
      score8: '', 
      score9: ''
    }
    
    this.addScore = this.addScore.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(e) {
      console.log(e);
      this.setState({
        [e.target.id]: e.target.value
      });
      console.log(e.target.id);
    }

    //  gets data from firebase
    componentDidMount() {
      const dbRef = firebase.database().ref("/Player1");

      //  gets value of items from firebase
      dbRef.on('value', (fireBaseData) => {
        // console.log(fireBaseData.val());
        //  returns the scores into an array
        const scoresData = fireBaseData.val();
        let scoresArray = [];
          console.log(scoresData);
        for(let scoreKey in scoresData){
          // console.log(scoreKey);
          //  returns an array of objects
          scoresData[scoreKey].key = scoreKey;
          // scoresArray.push(scoresData[scoreKey])
          // console.log(scoresKey[scoresData]);
          /////////////////////////////////////////////////////////////////problem from controlled to uncontrolled????
          const gameScore = scoresData[scoreKey];
          const gameScoreArray =[];
          for(let scoreHole in gameScore){
            // gameScore[scoreHole].key = scoreHole;
            gameScoreArray.push(gameScore[scoreHole])
            console.log(gameScore[scoreHole]);
          }
          // console.log(gameScoreArray);
          scoresArray.push(gameScoreArray);
        }
        this.setState({
          scores: scoresArray
        })
        console.log(scoresArray);
      })
    }

    //
    
    //adding score to firebase
    addScore(e) {
      e.preventDefault();
      //grabs the users score input
      // console.log('change');
      const userScore1 = {
        score1: this.state.score1,
        score2: this.state.score2,
        score3: this.state.score3,
        score4: this.state.score4,
        score5: this.state.score5,
        score6: this.state.score6,
        score7: this.state.score7,
        score8: this.state.score8,
        score9: this.state.score9
      }
      //pushes item to main firebase database
      // console.log(userScore);
      // pushes values for player 1
      const dbRef = firebase.database().ref('/Player1');
      dbRef.push(userScore1);

      // const dbRef = firebase.database().ref('/Player2');
      // dbRef.push(userScore2);

        // this.state.score1 = '',
        // this.state.score2 = '',
        // this.state.score3 = '',
        // this.state.score4 = '',
        // this.state.score5 = '',
        // this.state.score6 = '',
        // this.state.score7 = '',
        // this.state.score8 = '',
        // this.state.score9 = ''


      // this.setState ({
      //   score: ''
      //   // score1: '',
      //   // score2: '',
      //   // score3: '',
      //   // score4: '',
      //   // score5: '',
      //   // score6: '',
      //   // score7: '',
      //   // score8: '',
      //   // score9: ''
        
      // })
    }

    // retrieveScore(e) {
    //   e.preventDefault();

    //   const dbRef = firebase.database().ref('/Player1');
    //   dbRef.on('value', (data) => {
    //     console.log(data.val());
    //   });


    // }
    // console.log(this.state.score);

    getTotal(t){
      // function add(a, b) {
      //   return a + b;
      // }
      // const total = add(this.state.score1, this.state.score1);
      
      // console.log(total);
    }

    render() {
      return (
        <div className="background">
          <div className="wrapper">
            <div className="container">
            <h1>Tournament Tracker</h1>
              <table className="scorecard">
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
                    <th>Input Score</th>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score1" name="score" onChange={this.handleChange} value={this.state.score1} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score2" name="score" onChange={this.handleChange} value={this.state.score2} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score3" name="score" onChange={this.handleChange} value={this.state.score3} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score4" name="score" onChange={this.handleChange} value={this.state.score4} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score5" name="score" onChange={this.handleChange} value={this.state.score5} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score6" name="score" onChange={this.handleChange} value={this.state.score6} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score7" name="score" onChange={this.handleChange} value={this.state.score7} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score8" name="score" onChange={this.handleChange} value={this.state.score8} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score9" name="score" onChange={this.handleChange} value={this.state.score9} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id ="scoreFront" name="score" onChange={this.handleChange} value={this.state.score} type="text" />
                      </form>
                    </td>
                  </tr>
                  <tr className="user1Scores player">
                    <th>Player1</th>
                      <td className="results">
                        {this.scores[0].map((result, i) => {
                          return(
                            <td key={result.key}></td>
                          )
                        })}
                      {/* this.state.data.map((item,i) => <td key={i}>Test</td>)} */}
                        
                      </td>
                  </tr>

                  {/* <tr className="player player2">
                    <th>Input Score</th>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score1" name="score" onChange={this.handleChange} value={this.state.score1} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score2" name="score" onChange={this.handleChange} value={this.state.score2} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score3" name="score" onChange={this.handleChange} value={this.state.score3} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score4" name="score" onChange={this.handleChange} value={this.state.score4} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score5" name="score" onChange={this.handleChange} value={this.state.score5} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score6" name="score" onChange={this.handleChange} value={this.state.score6} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score7" name="score" onChange={this.handleChange} value={this.state.score7} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score8" name="score" onChange={this.handleChange} value={this.state.score8} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score9" name="score" onChange={this.handleChange} value={this.state.score9} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="scoreFront" name="score" onChange={this.handleChange} value={this.state.score} type="text" />
                      </form>
                    </td>
                  </tr> */}
                  {/* <tr className="player player1">
                    <th><input name="person" /></th>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score1" name="score" onChange={this.handleChange} value={this.state.score1} defaultValue="" type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score2" name="score" onChange={this.handleChange} value={this.state.score2} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score3" name="score" onChange={this.handleChange} value={this.state.score3} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score4" name="score" onChange={this.handleChange} value={this.state.score4} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score5" name="score" onChange={this.handleChange} value={this.state.score5} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score6" name="score" onChange={this.handleChange} value={this.state.score6} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score7" name="score" onChange={this.handleChange} value={this.state.score7} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score8" name="score" onChange={this.handleChange} value={this.state.score8} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score9" name="score" onChange={this.handleChange} value={this.state.score9} type="text" />
                      </form>
                    </td>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id ="scoreFront" name="score" onChange={this.handleChange} value={this.state.score} type="text" />
                      </form>
                    </td>
                  </tr> */}
                  <tr className="player player2">
                    <th><input name="person" /></th>
                    <td><input className= "scoreInput" type="text" /></td>
                    <td><input className= "scoreInput" type="text" /></td>
                    <td><input className= "scoreInput" type="text" /></td>
                    <td><input className= "scoreInput" type="text" /></td>
                    <td><input className= "scoreInput" type="text" /></td>
                    <td><input className= "scoreInput" type="text" /></td>
                    <td><input className= "scoreInput" type="text" /></td>
                    <td><input className= "scoreInput" type="text" /></td>
                    <td><input className= "scoreInput total" type="text" /></td>
                    <td><input className= "scoreInput" type="text" /></td>
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
              <div>
                <h3>Previous Winner</h3>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
