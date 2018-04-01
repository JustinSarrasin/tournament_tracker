import React from 'react';

export class Test extends React.Component {
   constructor() {
      super();
      this.state = {
         editing: false,
         note: {}
      };
      this.save = this.save.bind(this);
   }

   //  gets data from firebase
   // componentDidMount() {
   //    this.setState({
   //       note: this.props.note
   //    })
   // }

   save(e){
      e.preventDefault();
      // console.log(this);
      // const dbRef
      const dbRef = firebase.database().ref(this.props.note.key);
      dbRef.update({
         note: this.note.value
      });
      this.setState({
         editing: false
      })
   }

   render() {
      let editingScore = (
         <span>
            <h2>{this.props.note}</h2>
         </span>
      )
      if(this.state.editing){
         editingScore = (
            <form onSubmit={this.save}>
               <div>
                  <input type="text" defaultValue={this.props.note} name="score"/>
               </div>
               <input type="submit" value="done" />
            </form>
         )
      }
      return (
         <div className="test">
            
         <h2 onClick={() => this.setState({editing: true})}>click to edit</h2>
            {editingScore}
         </div>
      )
   }
}

export default Test;