import { useState } from "react";
import iconDollar from "./../../public/images/icon-dollar.svg";
import styled from "styled-components";
import SelectTip from "./SelectTip";

export default function Form() {
  const [billAmount, setBillAmount] = useState(0);
  const [selectedTip, setSelectedTip] = useState("");

  return (
    <FormWrapper
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputLabel htmlFor="bill">Bill</InputLabel>

      <InputContainer>
        <IMG src={iconDollar} alt="" />
        <BillInput
          id="bill"
          value={billAmount}
          type="number"
          onChange={(event) => {
            setBillAmount(event.target.value);
          }}
        />
      </InputContainer>
      <SelectTip selectedTip={selectedTip} setSelectedTip={setSelectedTip} />
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
  flex: 1;
  max-width: 19.43rem;
  font-size: 1.5rem;
  padding: 15px 20px;
  background-color: var(--light-grayish-cyan);
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
  width: 9.84;
  height: 15.46;
`;
