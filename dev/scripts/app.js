import React from 'react';
import ReactDOM from 'react-dom';
import NewPlayer from './newPlayer.js';
import PlayerTest from './PlayerTest.js';
import NewPlayer3 from './newPlayer3.js';
import Test from './Test.js';
import Login from './Login.js';

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
    render() {
      return (
        <div className="background">
          <div className="wrapper">
            <div className="container">
            <Login />
                  
              <h1 className>Round Tracker</h1>
              <div className="scorecard-border">
                  <NewPlayer />
              </div>
            </div>
          </div>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
