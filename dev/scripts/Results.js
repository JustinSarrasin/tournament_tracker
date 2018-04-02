import React from 'react';

const Results = (props) => {
   return (
      <tr className="player">
         <th className="inputScore">
            <button className="delete" onClick={() => props.removeScore(props.item.key)}>x</button>
         </th>
         <td className="writing">{props.item.score1}</td>
         <td className="writing">{props.item.score2}</td>
         <td className="writing">{props.item.score3}</td>
         <td className="writing">{props.item.score4}</td>
         <td className="writing">{props.item.score5}</td>
         <td className="writing">{props.item.score6}</td>
         <td className="writing">{props.item.score7}</td>
         <td className="writing">{props.item.score8}</td>
         <td className="writing">{props.item.score9}</td>
         <td className="total">{props.item.score99}</td>
      </tr>
    
   )
}

export default Results;