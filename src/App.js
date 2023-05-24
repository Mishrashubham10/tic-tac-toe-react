import { React, useState, useEffect } from "react";
import Cell from "./components/Cell";

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle")
  const [winigMessage, setWinigMessage] = useState(null)

  const message = "It is now " + go + " 's go." 

  const checkScore = () => {
    const winigCombos = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ]

    winigCombos.forEach(array => {
      let circleWins = array.every(cell => cells[cell] === "circle")

      if (circleWins) {
        setWinigMessage("Circle Wins!")
        return
      }
    })

    winigCombos.forEach(array => {
      let crossWins = array.every(cell => cells[cell] === "cross")

      if (crossWins) {
        setWinigMessage("Cross Wins!")
        return
      }
    })
  }

  useEffect(() => {
    checkScore()
  }, [cells])

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell key={index} id={index} cell={cell} go={go} setGo={setGo} setCells={setCells} cells={cells} winigMessage={winigMessage} />
        ))}
      </div>
      <p>{winigMessage || message}</p>
    </div>
  );
};

export default App;
