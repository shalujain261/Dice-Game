import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import DiceRole from "./DiceRole";
import { useState } from "react";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState("");
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules,setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    let randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () =>{
    setScore(0);
  }
  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore>
          <div className="total-score">
            <h1>{score}</h1>
            <p>Total score</p>
          </div>
        </TotalScore>
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <DiceRole currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <Button onClick={resetScore}>Reset Score</Button>
        <Button onClick={()=>setShowRules((prev) => !prev)}>{showRules? "hide" : "Show"} Rules</Button>
      </div>
      { showRules && <Rules /> }
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top-section {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
  }
  .btns{
    margin-left: 33.5rem;
  }
`;

const TotalScore = styled.div`
  max-width: 200px;
  text-align: center;

  .total-score h1 {
    font-size: 3.5rem;
    line-height: 0;
  }
  .total-score p {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 0.5;
  }
 
`;
const Button = styled.button`
  padding: 0.5rem 2.5rem;
  border-radius: 5px;
  border: 1px solid black;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  background-color: white;
  cursor: pointer;
`;
