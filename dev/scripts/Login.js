import React from 'react';

class Login extends React.Component {
   constructor() {
      super();
      this.state = {
         loggedIn: false,
         user: {},
      };

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
      })

      //in this pop up, we are passing the provider
      //the pop up will accept a promise
      //go into authentication on firebase, and enable the provider you plan on using firebase

         .auth()
         .signInWithPopup(provider)
         .then(user => {
            // console.log(user);
         });
   }

   signOut() {
      firebase.auth().signOut();
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

         <React.Fragment>
            {this.state.loggedIn ? (
               <React.Fragment>
                     <button onClick={this.signOut}>Logout</button>
               </React.Fragment>
            ) : (
                  <React.Fragment>
                     <button onClick={this.signIn}><i className="fab fa-google"></i>Sign In With Google</button>                              
                  </React.Fragment>
               )}
            <button onClick={this.signOut}>Logout</button>

         </React.Fragment>
      )
   }
}

export default Login;
