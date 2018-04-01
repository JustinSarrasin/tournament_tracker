import React from 'react';

export class PlayerTest extends React.Component {
   constructor() {
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
         score9: '',
         score99: '',
         editing: false,
         note: {}
      }
      this.save = this.save.bind(this);
      

      this.addScore = this.addScore.bind(this);
      this.handleChange = this.handleChange.bind(this);
      // this.createAccount = this.createAccount.bind(this);
      // this.createUser = this.createUser.bind(this);
   }

   handleChange(e) {
      this.setState({
         [e.target.id]: e.target.value
      });
   }

   //  gets data from firebase
   componentDidMount() {
      this.setState({
         note: this.props.note
      })

      const dbRef = firebase.database().ref("/Player3");

      //  gets value of items from firebase
      dbRef.on('value', (fireBaseData) => {

         //  returns the scores into an array
         // const scoresData = fireBaseData.val();
         // let scoresArray = [];

         // for (let scoreKey in scoresData) {

            //  returns an array of objects
            // scoresData[scoreKey].key = scoreKey;

            // const gameScore = scoresData[scoreKey];
            // const gameScoreArray = [];
            // for (let scoreHole in gameScore) {

               // gameScoreArray.push(gameScore[scoreHole])

            // }
            // scoresArray.push(gameScoreArray);
         // }
         // // this.setState({
         // //    scores: scoresArray,
         // })
      })
   }

   //adding score to firebase
   addScore(e) {
      e.preventDefault();
      //grabs the users score input
      const userScore1 = {
         score1: this.state.score1,
         score2: this.state.score2,
         score3: this.state.score3,
         score4: this.state.score4,
         score5: this.state.score5,
         score6: this.state.score6,
         score7: this.state.score7,
         score8: this.state.score8,
         score9: this.state.score9,
         score99: this.state.score99
      }
      // console.log('hey', userScore1);

      //pushes item to main firebase database
      // pushes values for player 2
      const dbRef = firebase.database().ref('/Player3').set({ userScore1 });
   }

   save(e) {
      e.preventDefault();
      // console.log(this);
      // const dbRef
      const dbRef = firebase.database().ref('/Player3').set({ userScore1 });
      dbRef.update({
         note: this.note.value
      });
      this.setState({
         editing: false
      })
   }

   ///////////////////////////////// start of user log in
   // createAccount(e) {
   //     e.preventDefault();
   // }

   // createUser(e) {
   //     e.preventDefault();
   //     const password = this.newPassword.value;
   //     const confirm = this.confirmPassword.value;
   //     if (password === confirm) {

   //     } else {
   //         alert("Check Password")
   //     }
   // }

   render() {
      let editingScore = (
    
                  // {this.state.scores.map((item, i) => {
                  //    return <p>{item[0]}</p>
                  // })}
         
                <table>
                   <tbody>
                      <tr className="player">
                        <th className="inputScore" onClick={() => this.setState({ editing: true })}>Team 2</th>

                           {this.state.scores.map((item, i) => {
                              return <td>{item[0]}</td>
                           })}
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>

                           {/* <td>{this.state.score1}0</td> */}
      
                           {/* {this.state.scores.map((item, i) => {
                              return <td>{item[0]}</td>
                           })}
      
                           {this.state.scores.map((item, i) => {
                              return <td>{item[1]}</td>
                           })}
      
                           {this.state.scores.map((item, i) => {
                              return <td>{item[2]}</td>
                           })}
      
                           {this.state.scores.map((item, i) => {
                              return <td>{item[3]}</td>
                           })}
      
                           {this.state.scores.map((item, i) => {
                              return <td>{item[4]}</td>
                           })}
      
                           {this.state.scores.map((item, i) => {
                              return <td>{item[5]}</td>
                           })}
      
                           {this.state.scores.map((item, i) => {
                              return <td>{item[6]}</td>
                           })}
      
                           {this.state.scores.map((item, i) => {
                              return <td>{item[7]}</td>
                           })}
      
                           {this.state.scores.map((item, i) => {
                              return <td>{item[8]}</td>
                           })}
      
                           {this.state.scores.map((item, i) => {
                              return <td>{item[9]}</td>
                           })} */}
                        </tr>
                   </tbody>
                </table>
      )
      
      if(this.state.editing) {
         editingScore = (
       
               <form onSubmit={this.addScore}>
                  <input className="scoreInput" id="score1" name="score" onChange={this.handleChange} value={this.state.score1} type="text" ref={ref => this.note = ref} />
               
                  <input className="scoreInput" id="score2" name="score" onChange={this.handleChange} value={this.state.score2} type="text" />

                  <input className="scoreInput" id="score3" name="score" onChange={this.handleChange} value={this.state.score3} type="text" />
        
                  <input className="scoreInput" id="score4" name="score" onChange={this.handleChange} value={this.state.score4} type="text" />

                  <input className="scoreInput" id="score5" name="score" onChange={this.handleChange} value={this.state.score5} type="text" />

                  <input className="scoreInput" id="score6" name="score" onChange={this.handleChange} value={this.state.score6} type="text" />

                  <input className="scoreInput" id="score7" name="score" onChange={this.handleChange} value={this.state.score7} type="text" />
   
                  <input className="scoreInput" id="score8" name="score" onChange={this.handleChange} value={this.state.score8} type="text" />
               
                  <input className="scoreInput" id="score9" name="score" onChange={this.handleChange} value={this.state.score9} type="text" />
  
                  <input className="scoreInput" id="score99" name="score" onChange={this.handleChange} value={this.state.score99} type="text" />

                  <input type="submit" value="done"/>
               </form>
         )
 
            {/* // <form onSubmit={this.save}>
            //    <div>
            //       <input type="text" defaultValue={this.props.note} name="score" />
            //    </div>
            //    <input type="submit" value="done" />
            // </form> */}
            
         
      }
      return (
         <div>

            {editingScore}           
         </div>
      )
   }
}

export default PlayerTest;