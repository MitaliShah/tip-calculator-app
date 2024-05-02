import styled from "styled-components";

export default function SelectTip({ selectedTip, setSelectedTip }) {
  return (
    <Fieldset>
      <Lagend>Select Tip</Lagend>
      <Wrapper>
        {TIP_PERCENTAGES.map((option) => {
          return (
            <InputWrapper key={option} value={option}>
              <input
                className="visually-hidden"
                type="radio"
                name="selected-tip"
                id={`agreed-${option}`}
                value={option}
                checked={option === selectedTip}
                onChange={(event) => {
                  setSelectedTip(event.target.value);
                }}
              />
              <Label htmlFor={`agreed-${option}`} value={option}>
                {option}
              </Label>
            </InputWrapper>
          );
        })}
      </Wrapper>
    </Fieldset>
  );
}

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 16px;

  grid-template-areas:
    "one two"
    "three four"
    "five six";
`;

const Lagend = styled.legend`
  color: var(--dark-grayish-cyan);
`;

const InputWrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: green;
`;

const Label = styled.label`
  background-color: ${(props) =>
    props.value === "15%"
      ? "var(--strong-cyan)"
      : props.value === "custom"
      ? "var(--custom-bg)"
      : "var(--very-dark-cyan)"};

  color: ${(props) =>
    props.value === "15%"
      ? "var(--very-dark-cyan)"
      : props.value === "custom"
      ? "var(--custom-col)"
      : "var(--white)"};

  grid-area: ${(props) =>
    props.value === "5%"
      ? "one"
      : props.value === "10%"
      ? "two"
      : props.value === "15%"
      ? "three"
      : props.value === "25%"
      ? "four"
      : props.value === "50%"
      ? "five"
      : props.value === "custom"
      ? "six"
      : null};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TIP_PERCENTAGES = ["5%", "10%", "15%", "25%", "50%", "custom"];
