import React from 'react';

const Results = (props) => {
   return (
      
     
            <tr className="player">
         <th className="inputScore"><button onClick={() => props.removeScore(props.item.key)}>x</button>
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
               <td className="writing">{props.item.score99}</td>
               {/* <td>{item[0]}</td>
               <td>{item[1]}</td>
               <td>{item[2]}</td>
               <td>{item[3]}</td>
               <td>{item[4]}</td>
               <td>{item[5]}</td>
               <td>{item[6]}</td>
               <td>{item[7]}</td>
               <td>{item[8]}</td>
               <td>{item[9]}</td> */}
            </tr>
    
   )
}

export default Results;