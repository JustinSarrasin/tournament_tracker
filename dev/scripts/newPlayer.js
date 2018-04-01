import React from 'react';
import Results from './Results';

export class NewPlayer extends React.Component{
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

        this.addScore = this.addScore.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeScore = this.removeScore.bind(this);
        // this.createAccount = this.createAccount.bind(this);
        // this.createUser = this.createUser.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    //  gets data from firebase
   //  componentDidMount() {
   //       // this.setState({
   //       //    note: this.props.note
   //       // })

   //    //   const dbRef = firebase.database().ref.on("/Player2");
   //    //   firebase.database().ref().on()
   //      //  gets value of items from firebase
   //      firebase.database().ref().on('value', (res) => {
   
   //          //  returns the scores into an array
   //          const userData = res.val();
   //          const dataArray = [];
   //          console.log(res.val());
   //          for (let objKey in userData) {
   //             userData[objKey].key = objKey;
   //             dataArray.push(userData[objKey])
   //              //  returns an array of objects
   //              console.log(dataArray);
   //              }
   //          this.setState({
   //             scores: dataArray
   //          })
            
            
   //          // console.log(scoresArray);
   //      });
   //  }
    componentDidMount() {
         // this.setState({
         //    note: this.props.note
         // })
        firebase.database().ref().on('value', (fireBaseData) =>{
   
            //  returns the scores into an array
            const scoresData = fireBaseData.val();
            let scoresArray = [];
            console.log(fireBaseData.val());
            for (let scoreKey in scoresData) {

                //  returns an array of objects
               //  console.log(scoresData);
                scoresData[scoreKey].key = scoreKey;
 
                const gameScore = scoresData[scoreKey];
                const gameScoreArray = [];
                for (let scoreHole in gameScore) {

                    gameScoreArray.push(gameScore[scoreHole])
 
                }
                scoresArray.push(gameScoreArray);
            }
            this.setState({
                scores: scoresArray,
            })
            // console.log(scoresArray);
        })
    }

    //adding score to firebase
    addScore(e) {
        e.preventDefault();
        //grabs the users score input
      //  const userScore1 = {
      //     score1: this.state.score1,
      //     score2: this.state.score2,
      //     score3: this.state.score3,
      //     score4: this.state.score4,
      //     score5: this.state.score5,
      //     score6: this.state.score6,
      //     score7: this.state.score7,
      //     score8: this.state.score8,
      //     score9: this.state.score9,
      //     score99: this.state.score99
      //    }
      
        //pushes item to main firebase database
        // pushes values for player 2
        const dbRef = firebase.database().ref();
        dbRef.push(userScore1);
         // console.log(userScore1);
       this.setState({
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
         //  name: ''
         
       });
    }
    
   removeScore(scoreID) {
      // const dbRef = firebase.database().ref(scoreID);
      // dbRef.remove();
      console.log(scoreID);
   }
   // removeScore(e, option) {
   //    e.preventDefault();
   //    // this.setState(() => {
   //    //    return {
   //    //       options: []
   //    //    };
   //    // });
   //    const dbRef = firebase.database().ref(option);
   //    dbRef.remove(option);
   //    // console.log(optionId);
   //    // const dbRef = firebase.database().ref(optionID);
   //    // dbRef.remove(optionID);
   //    // console.log(option);
   //    // console.log(this)

   // }

   //  addScore2(e) {
   //     e.preventDefault();
   //     const userScore2 = {
   //        score2: this.state.score2
   //     }
   //     const dbRef = firebase.database().ref('/Player4').set({ userScore2 });

   //  }

   //  addScore2(e){
   //     e.preventDefault();
   //     const userScore2 = {
   //        score2: this.state.score2
   //     }
   //     const dbRef = firebase.database().ref('/Player2').set({userScore1});
       
      
      
   //  }

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
        return (
            <table className="scorecard">
                <tbody>         
                 <tr className="yards">
                    <th>Yards</th>
                    <td>315</td>
                    <td>471</td>
                    <td>449</td>
                    <td>171</td>
                    <td>562</td>
                    <td>205</td>
                    <td>551</td>
                    <td>180</td>
                    <td>384</td>
                    <td>3288</td>
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
                    <tr className="player player1">
                    
                        <th className="inputScore">Input Score</th>
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
                                <input className="scoreInput" id="score99" name="score" onChange={this.handleChange} value={this.state.score99} type="text" />
                            </form>
                        </td>
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

                    
                           {this.state.scores.map((item, i, score) => {
                              console.log(this.state.score);
                              return (
                                 <tr className="player">
                                    <th className="inputScore"><button onClick={() => this.removeScore(score.key)}>x</button></th>
                                    <td>{}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    <td>{item[3]}</td>
                                    <td>{item[4]}</td>
                                    <td>{item[5]}</td>
                                    <td>{item[6]}</td>
                                    <td>{item[7]}</td>
                                    <td>{item[8]}</td>
                                    <td>{item[9]}</td>
                                    
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
                                 // <Results data={item} key={item.key}/>
                              )
                           })}
                        
        
                </tbody>
            </table>         
        )
    }
}

export default NewPlayer;