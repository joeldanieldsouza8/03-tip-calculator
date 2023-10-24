export default function BillInput({ value, onChange, label }) {
  return (
    <label>
      {label}
      <input
        placeholder="Enter Amount"
        type="number"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
