
import styled from "styled-components";

const NumberSelector = ({ setError, error,selectedNumber,setSelectedNumber }) => {
  const arrNumbers = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value)=>{
     setSelectedNumber(value);
     setError("");
  }

  
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
    <div className="flex">
      {arrNumbers.map((value, i) => (
        <Box
         isSelected = {value === selectedNumber}
         key={i} 
         onClick={()=>numberSelectorHandler(value)}>
          {value}
        </Box>
      ))}
    </div>
    <p>Selected number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
.flex{
  display: flex;
  gap:24px;
}  
p{
  font-size: 18px;
  font-weight: 600;
  text-align: right;
}
.error{
  color: red;
}
`

const Box = styled.div`
  height: 60px;
  width: 60px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 1.4rem;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color:${(props) => (props.isSelected ? "white" : "black")} ;
`;
