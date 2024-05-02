export default function Results() {
  return (
    <div>
      <div>
        <label htmlFor="tip-amount">
          <span>Tip Amount</span>
          <span>/ person</span>
        </label>
        <output id="tip-amount">$0.00</output>
      </div>
      <div>
        <label htmlFor="total-amount">
          <span>Total</span>
          <span>/ person</span>
        </label>
        <output id="total-amount">$0.00</output>
      </div>
      <button>RESET</button>
    </div>
  );
}
