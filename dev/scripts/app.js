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
    this.createAccount = this.createAccount.bind(this);
    this.createUser = this.createUser.bind(this);
  }

    handleChange(e) {
      // console.log(e);
      this.setState({
        [e.target.id]: e.target.value
      });
      // console.log(e.target.id);
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
          // console.log(scoresData);
        for(let scoreKey in scoresData){
          // console.log(scoreKey);
          //  returns an array of objects
          scoresData[scoreKey].key = scoreKey;
          // scoresArray.push(scoresData[scoreKey])
          // console.log(scoresKey[scoresData]);
          const gameScore = scoresData[scoreKey];
          const gameScoreArray =[];
          for(let scoreHole in gameScore){
            // gameScore[scoreHole].key = scoreHole;
            gameScoreArray.push(gameScore[scoreHole])
            // console.log(gameScore[scoreHole]);
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
      const dbRef = firebase.database().ref('/Player1').set({userScore1});
      dbRef.push(userScore1);
    }


    // getTotal(t){  
    //   const sum = scores.reduce((total, amount) => {
    //     return total + amount
    //   });
    //   console.log(sum);
    // }
    
    createAccount(e){
      e.preventDefault();
    }
    
    createUser(e){
      e.preventDefault();
      const password = this.newPassword.value;
      const confirm = this.confirmPassword.value;
      if(password === confirm){

      }else {
        alert("Check Password")
      }
    }

    render() {
      return (
        <div className="background">
          <header>
            <nav>
              <a href="" onClick={this.createAccount}>Create Account</a>
              <a href="" onClick={this.showLogIn}>Log In</a>
              <a href="" onClick={this.logout}>Logout</a>
            </nav>
            <div className="signUp" ref={ref => this.signUp = ref}>
              <form action="" onSubmit={this.createAccount}>
                <div>
                  <label htmlFor="newEmail">Email</label>
                  <input type="text" name="newEmail" ref={ref => this.newEmail = ref}/>
                </div>
                <div>
                  <label htmlFor="newPassword">Password</label>
                  <input type="text" name="newPassword" ref={ref => this.newPassword =ref}/>
                </div>
                <div>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="text" name="confirmPassword" ref={ref => this.confirmPassword =ref}/>
                </div>
              </form>
            </div>
          </header>
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
                  {/* <tr className="player">
                    <th>Team 1</th>
                    <td>{this.state.score1}</td>
                    <td>{this.state.score2}</td>
                    <td>{this.state.score3}</td>
                    <td>{this.state.score4}</td>
                    <td>{this.state.score5}</td>
                    <td>{this.state.score6}</td>
                    <td>{this.state.score7}</td>
                    <td>{this.state.score8}</td>
                    <td>{this.state.score9}</td>
                    <td></td>
                  </tr> */}
          
                  {/* //////////////////////////////////////////Looping array into the table????????? */}

                  <tr>
                    <th>Player 1</th>
                    <td>
                      {this.state.scores.map((item, i) => {
                        return <p>{item[0]}</p>
                      // console.log(console.log[0]);
                      })}
                    </td>
                    <td>
                      {this.state.scores.map((item, i) => {
                        return <p>{item[1]}</p>
                      // console.log(console.log[0]);
                      })}
                    </td>
                    <td>
                      {this.state.scores.map((item, i) => {
                        return <p>{item[2]}</p>
                      // console.log(console.log[0]);
                      })}
                    </td>
                    <td>
                      {this.state.scores.map((item, i) => {
                        return <p>{item[3]}</p>
                      // console.log(console.log[0]);
                      })}
                    </td>
                  </tr>


                      {/* this.state.data.map((item,i) => <td key={i}>Test</td>)} */}
                      
                      {/* </td>
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
