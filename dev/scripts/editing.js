import React from 'react'

export default class Editing extends React.Component {
    constructor() {
        super();
        this.state = {
            editing: false,
            score: ""
        }
        // this.setState = this.setState.bind(this);
    }

    componentDidMount(){
        this.setState({
            score: this.props
        })
        console.log(this.props);
    }

    render(){
        // let editInput = (

        // )

        return(
        <div className="background">
            <div className="wrapper">
                <div className="container">
                    <h1>Tournament Tracker</h1>
                    <table className="scorecard">
                        <tbody>
                            <tr className="yards">
                                <th>Yards</th>
                                <td>432</td>
                                <td>432</td>
                                <td>234</td>
                                <td>234</td>
                                <td>543</td>
                                <td>234</td>
                                <td>543</td>
                                <td>234</td>
                                <td>433</td>
                                <td>2343</td>
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
                            <tr className="player player1">
                                <th><input name="person" /></th>
                                <td><p onClick={() => this.setState({editing: true})}>d</p>
                                    {/* <form onSubmit={this.addScore}>
                                        <input className="scoreInput" id="score1" name="score" onChange={this.handleChange} value={this.state.score1} defaultValue="" type="text" />
                                    </form> */}
                                </td>
                            </tr>
                                {/* <td>
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
                                        <input className="scoreInput" id="scoreFront" name="score" onChange={this.handleChange} value={this.state.score} type="text" />
                                    </form>
                                </td>
                            </tr> */}
                            {/* <tr className="player player1">
                    <th><input name="person" /></th>
                    <td>
                      <form onSubmit={this.addScore}>
                        <input className="scoreInput" id="score1" name="score" onChange={this.handleChange} value={this.state.score1} defaultValue="" type="text" />
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
                        <input className="scoreInput" id ="scoreFront" name="score" onChange={this.handleChange} value={this.state.score} type="text" />
                      </form>
                    </td>
                  </tr> */}
                            <tr className="player player2">
                                <th><input name="person" /></th>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput total" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
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
                            <tr className="player player3">
                                <th><input name="person" /></th>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                            </tr>
                            <tr className="player player4">
                                <th><input name="person" /></th>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                                <td><input className="scoreInput" type="text" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <h3>Previous Winner</h3>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}