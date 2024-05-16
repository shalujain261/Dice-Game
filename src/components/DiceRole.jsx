
import styled from "styled-components"


const DiceRole = ({ currentDice,roleDice }) => {
    

  return (
    <Dice>
    <div className="diceRole">
        <div onClick={roleDice} className="image">
            <img src={`images/dice_${currentDice}.png`} alt="" />
        </div>

        <p>Click on dice to role</p>
    </div>

    </Dice>
  )
}

export default DiceRole

const Dice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .image img{
        height: 200px;
        width: 200px;
        cursor: pointer;
    }
    .diceRole p{
        font-size: 1.2rem;
        font-weight: 500;
        margin-top: 0;
    }
`

