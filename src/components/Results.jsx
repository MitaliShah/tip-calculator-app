import styled from "styled-components";

export default function Results({
  tipPerPerson,
  totalPerPerson,
  handleReset,
  billAmount,
}) {
  return (
    <Wrapper>
      <ContainerTipAmount>
        <Label htmlFor="tip-amount">
          <Span>Tip Amount</Span>
          <Span>
            <Small>/ person</Small>
          </Span>
        </Label>
        <Output id="tip-amount">{tipPerPerson ? tipPerPerson : `$0.00`}</Output>
      </ContainerTipAmount>
      <ContainerTotalAmount>
        <Label htmlFor="total-amount">
          <Span>Total</Span>
          <Span>
            <Small>/ person</Small>
          </Span>
        </Label>
        <Output id="total-amount">
          {tipPerPerson > 0 ? totalPerPerson : `$0.00`}
        </Output>
      </ContainerTotalAmount>

      <Reset onClick={handleReset} disabled={billAmount === 0}>
        RESET
      </Reset>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--very-dark-cyan);
  padding: 37px 24px 24px;
  margin-top: 32px;
  border-radius: 20px;

  @media (min-width: 920px) {
    padding: 40px;
    flex: 1;
    margin-top: 0;
  }
`;

const Span = styled.span`
  display: block;
`;

const Label = styled.label`
  color: var(--white);
`;

const ContainerTipAmount = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 920px) {
    margin-top: 40px;
  }
`;

const ContainerTotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (min-width: 920px) {
    margin-top: 40px;
  }
`;

const Reset = styled.button`
  width: 100%;
  background-color: var(--strong-cyan);
  font-size: 20px;
  color: var(--very-dark-cyan);
  margin-top: 32px;
  border: none;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
    background-color: var(--blue-bg);
  }

  @media (min-width: 920px) {
    margin-top: 155px;
  }
`;

const Output = styled.output`
  font-size: 32px;
`;

const Small = styled.small`
  font-size: 13px;
  color: var(--grayish-cyan);
`;
