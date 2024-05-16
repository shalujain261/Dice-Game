import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="image">
        <img src="images/dices.png" alt="Dice image" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={ toggle }>play now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  gap: 5rem;

.image img{
    height: 500px;
    width: 600px;
}

  .content h1{
    font-size: 5.5rem;
    margin-bottom: 2rem;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 4px;
  padding: 0.4rem 2rem;
  min-width: 150px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
