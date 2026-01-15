import "../styles/game.css"

function ScoreBoard(props){
  return (
    <div id="scoreboard" className="scoreboard">
      <p className="title">Score: {props.score}</p>
      <p className="title">Best Score: {props.bestScore}</p>
    </div>
  );
}

export default ScoreBoard