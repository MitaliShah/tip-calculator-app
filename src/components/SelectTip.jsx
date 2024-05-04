import { useState } from "react";
import styled from "styled-components";

export default function SelectTip({
  selectedTip,
  setSelectedTip,
  customTip,
  setCustomTip,
}) {
  const [showCustom, setShowCustom] = useState(false);
  const [labelActive, setLabelActive] = useState(false);

  function handleCustom() {
    setShowCustom(!showCustom);
    console.log(showCustom);
  }
  return (
    <Fieldset>
      <Lagend>Select Tip</Lagend>

      <InputWrapper>
        {TIP_PERCENTAGES.map((option) => {
          return (
            <div key={option}>
              <input
                className="visually-hidden"
                type="radio"
                name="selected-tip"
                id={`agreed-${option}`}
                value={option}
                checked={option === selectedTip}
                onChange={(event) => {
                  setSelectedTip(event.target.value);
                  setLabelActive(true);
                }}
              />

              <Label
                htmlFor={`agreed-${option}`}
                value={option}
                $active={(option === selectedTip && labelActive).toString()}
              >
                {option}
              </Label>
            </div>
          );
        })}
        {showCustom ? (
          <InputCustom
            type="number"
            id="custom"
            value={customTip}
            onChange={(e) => setCustomTip(e.target.value)}
          />
        ) : (
          <CustomSpan onClick={handleCustom}>Custom</CustomSpan>
        )}
      </InputWrapper>
    </Fieldset>
  );
}

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 32px 0;
  width: 100%;
`;

const Lagend = styled.legend`
  color: var(--dark-grayish-cyan);
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 16px;

  grid-template-areas:
    "one two"
    "three four"
    "five six";

  margin-top: 16px;

  @media (min-width: 920px) {
    max-width: 920px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 14px;
  }
`;

const Label = styled.label`
  background-color: var(--very-dark-cyan);
  color: var(--white);

  ${({ $active }) =>
    $active === "true" &&
    `
    background-color: var(--strong-cyan);
    color: var(--very-dark-cyan);
  `}

  &:hover {
    background-color: var(--blue-bg);
    color: var(--very-dark-cyan);
  }

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
  font-size: 1.5rem;
  padding: 6px 16px;
  border-radius: 4px;

  @media (min-width: 920px) {
    padding: 6px 25px;
  }
`;

const CustomSpan = styled.span`
  background-color: var(--custom-bg);
  color: var(--custom-col);
  text-align: center;
  font-size: 1.5rem;
  padding: 6px 16px;
  border-radius: 4px;

  @media (min-width: 920px) {
    padding: 6px 14px;
  }
`;

const InputCustom = styled.input`
  width: 146px;
  max-width: 146px;
  font-size: 24px;
  background-color: var(--custom-bg);
  color: var(--very-dark-cyan);
  border: none;
  text-align: right;
  border-radius: 4px;
  border: 3px solid var(--strong-cyan);
  outline: none;

  @media (min-width: 920px) {
    width: 118px;
  }
`;

const TIP_PERCENTAGES = ["5%", "10%", "15%", "25%", "50%"];
