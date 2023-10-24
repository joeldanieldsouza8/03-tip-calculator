export default function TotalBill({ billAmount, tipAmount }) {
  return (
    <div>
      You pay ${parseFloat(billAmount) + tipAmount} (${billAmount} + $
      {tipAmount} tip).
    </div>
  );
}
