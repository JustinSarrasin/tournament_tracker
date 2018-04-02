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

   render() {
      return (
         <div className="logins">
            {
               (() => {
               if (this.state.loggedIn) {
                  return (
                     <div className="googleLogin">
                        <p>Fill out the scores, then hit enter or submit to track your season</p>
                        <button onClick={this.signOut}>Log Out</button>
                     </div>
                  )
               }
               else {
                  return (
                     <div className="googleLogin">
                        <p>Log in to track your scores this season</p>
                        <button onClick={this.signIn}><span><i className="fab fa-google"></i></span> Sign In With Google</button>
                     </div>
                  )
               }
            })()
         }
         </div>

   )}        
}

export default Login;
