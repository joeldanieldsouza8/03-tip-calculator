import { useState } from "react";
import "./index.css";
import BillInput from "./BillInput";
import RatingSelect from "./RatingSelect";
import TotalBill from "./TotalBill";
import ResetButton from "./ResetButton";

export default function BillCalculator() {
  // 1. Intialize the 3 state variables
  const [billAmount, setBillAmount] = useState(0);
  const [yourServiceRating, setYourServiceRating] = useState(0);
  const [friendServiceRating, setFriendServiceRating] = useState(0);

  /* 
      - Dissatisfied (0%)
      - It was okay (5%)
      - It was good (10%)
      - Absolutely amazing! (20%)
      */
  // 3. Calculate the tip amount
  function calculateTip() {
    const avgTip =
      (parseInt(yourServiceRating) + parseInt(friendServiceRating)) / 2;
    return (billAmount * avgTip) / 100;
  }

  // 4. Create the 3 helper functions + use + update the state variables
  function resetValues() {
    setBillAmount(0);
    setYourServiceRating(0);
    setFriendServiceRating(0);
  }

  function handleYourServiceRatingChange(e) {
    setYourServiceRating(e.target.value);
  }

  function handleFriendServiceRatingChange(e) {
    setFriendServiceRating(e.target.value);
  }

  function handleBillAmountChange(e) {
    setBillAmount(e.target.value);
  }

  return (
    <div>
        <BillInput billAmount={billAmount} onChange={handleBillAmountChange} label={"How much was the bill?"}/>
        <RatingSelect
          value={yourServiceRating}
          onChange={handleYourServiceRatingChange}
          label="Your service rating"
        />
        <RatingSelect
          value={friendServiceRating}
          onChange={handleFriendServiceRatingChange}
          label="Your friend's service rating"
        />
        <TotalBill billAmount={billAmount} tipAmount={calculateTip()} />
        <ResetButton resetValues={resetValues} />
    </div>
  )
}
