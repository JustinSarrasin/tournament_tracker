import React from 'react';

class Login extends React.Component {
   constructor() {
      super();
      this.state = {
         loggedIn: false,
         user: {},
      };
      this.signIn = this.signIn.bind(this);
      this.signOut = this.signOut.bind(this);

   }
   componentDidMount() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then(function (result) {
         // This gives you a Google Access Token. You can use it to access the Google API.
         const token = result.credential.accessToken;

         // Get the signed-in user info.
         const user = result.user;
         // ...
      }).catch(function (error) {
         // Error handling goes in here.
         console.log(error)
      });
   }
   signIn() {
      const provider = new firebase.auth.GoogleAuthProvider();

      //prompts user to select their acconut
      provider.setCustomParameters({

         prompt: "select_account"
      });

      //in this pop up, we are passing the provider
      //the pop up will accept a promise
      //go into authentication on firebase, and enable the provider you plan on using 
      firebase

         .auth()
         .signInWithPopup(provider)
         .then(user => {
            // console.log(user);
         });

      this.setState({
         loggedIn: true
      })
   }

   signOut() {
      firebase.auth().signOut();
      this.setState({
         loggedIn: false
      })
   }

   // componentDidMount(props) {
   //    //this will check for a user object which we will call res
   //    firebase.auth().onAuthStateChanged(res => {
   //       // console.log(res);
   //       this.props.loggedInCheck(res)
   //    });
   // }
   // componentWillReceiveProps(props) {
   //    this.setState({
   //       loggedIn: props.loggedIn,
   //       user: props.user
   //    })
   // }

   render() {
      return (
         <div>
            {
                       (() => {
                  if (this.state.loggedIn) {
                     return (
                        <button onClick={this.signOut}>Logout</button>
                     )
                  }
                  else {
                     return (
                        <button onClick={this.signIn}><span><i className="fab fa-google"></i></span>Sign In With Google</button>
                     )
                  }
               })()
                    }
         </div>

         // <span>
         //    {
         //               (() => {
         //          if (this.state.loggedIn) {
         //             return (
         //                <button onClick={this.signOut}>Logout</button>
         //             )
         //          }
         //          else {
         //             <button onClick={this.signIn}><i className="fab fa-google"></i>Sign In With Google</button>
         //          }
         //       })()
         //            }
         // </span>

      //    <React.Fragment>
      //       {this.state.loggedIn ? (
      //          <React.Fragment>
      //                <button onClick={this.signOut}>Logout</button>
      //          </React.Fragment>
      //       ) : (
      //             <React.Fragment>
      //                <button onClick={this.signIn}><i className="fab fa-google"></i>Sign In With Google</button>                              
      //             </React.Fragment>
      //          )}
      //       <button onClick={this.signOut}>Logout</button>

      //    </React.Fragment>
      // )
                  )}        
}

export default Login;
