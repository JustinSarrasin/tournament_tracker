import React from 'react';

const Results = (props) => {
   return (
      <tr className="player">
         {/* <th className="inputScore">Team 2</th> */}
         <td>{ props.data.scores }</td>
         
         {/* <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td> */}
         {/* {this.state.scores.map((item, i) => {
            return
         })}
         {this.state.scores.map((item, i) => {
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
   )
}

export default Results;