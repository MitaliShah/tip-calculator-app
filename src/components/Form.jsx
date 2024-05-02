import {  useState } from "react";
import iconDollar from "./../../public/images/icon-dollar.svg";
import iconPerson from "./../../public/images/icon-person.svg";
import styled from "styled-components";
import SelectTip from "./SelectTip";
import Results from "./Results";

export default function Form() {
  const [billAmount, setBillAmount] = useState(0);
  const [selectedTip, setSelectedTip] = useState("");
  const [customTip, setCustomTip] = useState(0);
  const [numOfPeople, setNumofPeople] = useState(0);
  const [touched, setTouched] = useState(false);

  function handleReset() {
    setBillAmount(0);
    setSelectedTip("");
    setCustomTip(0);
    setNumofPeople(0);
  }

  function formatTip(str) {
    if (typeof str === "string") {
      return parseInt(str.substring(0, str.length - 1));
    }
    return 0;
  }
  const formatSelectedTip = formatTip(selectedTip);
  const tipType = !isNaN(customTip) && customTip ? parseFloat(customTip) : formatSelectedTip;

  const tipPerPerson =
    !isNaN(tipType) && !isNaN(numOfPeople) && numOfPeople !== 0
      ? ((billAmount * (tipType / 100)) / numOfPeople).toFixed(2)
      : 0;

  function checkPercentage(tipType) {
    return !isNaN(tipType) ? tipType / 100 : 0;
  }
  
  const totalPerPerson = ((billAmount * (1 + checkPercentage(tipType))) / numOfPeople).toFixed(2);


 const showError = touched && numOfPeople === 0 ? (
  <span id="errorLabel" style={{ color: 'red', display: "block" }}>Can't be zero</span>
): null


  return (
    <FormWrapper
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputLabel htmlFor="bill">Bill</InputLabel>

      <InputContainer>
        <IMG src={iconDollar} alt="" />
        <Input
          id="bill"
          minLength={1}
          value={billAmount}
          type="number"
          aria-label="Bill"               
          onChange={(event) => {
            setBillAmount(event.target.value);            
          }}
        />
      </InputContainer>
      <SelectTip
        selectedTip={selectedTip}
        setSelectedTip={setSelectedTip}
        customTip={customTip}
        setCustomTip={setCustomTip}
      />
      <div style={{color: 'red', display:"block"}}>
        <InputLabel htmlFor="num-of-people">Number of People</InputLabel>
      {showError}
      </div>
      
      <InputContainer>
        <IMG src={iconPerson} alt="" />
        <Input
          id="num-of=people"
          value={numOfPeople}
          type="number"
          onChange={(event) => {
            setNumofPeople(Number(event.target.value));
            setTouched(numOfPeople === 0);               
          }}
          aria-invalid={touched && numOfPeople === 0} 
          aria-describedby={touched && numOfPeople === 0 ? 'errorLabel' : null}
        />
      </InputContainer>
      <Results tipPerPerson={tipPerPerson} totalPerPerson={totalPerPerson} handleReset={handleReset}/>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  padding: 32px;
  margin-top: 40px;
  background-color: var(--white);
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  max-width: 19.43rem;
  font-size: 1.5rem;
  padding: 10px 20px;
  /* background-color: var(--light-grayish-cyan); */
  background-color: var(--input-bg);
  margin-top: 6px;
  border-radius: 6px;
`;

const Input = styled.input`
  text-align: right;
  width: 100%;
  /* background-color: var(--light-grayish-cyan); */
  background-color: var(--input-bg);
  border: none;
  color: var(--very-dark-cyan);
  outline: none;
`;

const InputLabel = styled.label`
  color: var(--dark-grayish-cyan);
`;

const IMG = styled.img`
  width: 13px;
  height: 16px;
`;
