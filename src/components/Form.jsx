import { useState } from "react";
import iconDollar from "./../../public/images/icon-dollar.svg";
import iconPerson from "./../../public/images/icon-person.svg";
import styled from "styled-components";
import SelectTip from "./SelectTip";
import Results from "./Results";

export default function Form() {
  const [billAmount, setBillAmount] = useState(0);
  const [selectedTip, setSelectedTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [numOfPeople, setNumofPeople] = useState(0);

  return (
    <FormWrapper
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputLabel htmlFor="bill">Bill</InputLabel>

      <InputBillContainer>
        <IMG src={iconDollar} alt="" />
        <BillInput
          id="bill"
          value={billAmount}
          type="number"
          onChange={(event) => {
            setBillAmount(event.target.value);
          }}
        />
      </InputBillContainer>
      <SelectTip
        selectedTip={selectedTip}
        setSelectedTip={setSelectedTip}
        customTip={customTip}
        setCustomTip={setCustomTip}
      />
      <InputLabel htmlFor="num-of-people">Number of People</InputLabel>
      <InputBillContainer>
        <IMG src={iconPerson} alt="" />
        <BillInput
          id="num-of=people"
          value={numOfPeople}
          type="number"
          onChange={(event) => {
            setNumofPeople(event.target.value);
          }}
        />
      </InputBillContainer>
      <Results />
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  padding: 32px;
  margin-top: 40px;
  background-color: var(--white);
`;

const InputBillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  max-width: 19.43rem;
  font-size: 1.5rem;
  padding: 10px 20px;
  background-color: var(--light-grayish-cyan);
  margin-top: 6px;
`;

const BillInput = styled.input`
  text-align: right;
  width: 100%;
  background-color: var(--light-grayish-cyan);
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
