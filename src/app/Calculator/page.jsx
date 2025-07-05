"use client"
import { useEffect, useState } from "react";
import Header from "../Components/Header/Header"
import axios from "axios";
import { useForm } from "react-hook-form";


export default function RepaymentCalculator() {
  const [interestRate, setInterestRate] = useState(6);
 
  const [payment, setPayment] = useState(null);
  const [allRates, setAllRates] = useState([]);
const [selectedRate, setSelectedRate] = useState(6);

  const { register, handleSubmit, watch, reset } = useForm({
  defaultValues: {
    amount: 500000,
    frequency: "monthly",
    rate: 6,
    term: 30,
  },
});


  // Simulated API call for interest rate
useEffect(()=>{
     async function getRate() {
    try {
        const res = await axios.get('https://ratesapi.nz/api/v1/mortgage-rates');
      const data = res.data;

      // For now just take the whole array
      setAllRates(data.data);

      // Default: pick ANZ first rate
      const defaultRate = data.data[0]?.products[0]?.rates[0]?.rate ?? 6;
      setInterestRate(defaultRate);
      setSelectedRate(defaultRate);
    } catch (error) {
        console.error('Error while fetching interest rate', error)
        setInterestRate(6.5)
        
    }
   }

   getRate()
},[]);



 const calculateRepayment = (data) => {
  const amount = parseFloat(data.amount);
  const termYears = parseFloat(data.term);
  const rate = interestRate;


  if (!amount || !termYears || !rate) {
    console.error('Invalid input');
    return;
  }

  const monthlyRate = rate / 100 / 12;
  const totalPayments = termYears * 12;

  const repayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));
  setPayment(repayment);
};


  return (
    <>
    <Header title="Calculator" />
      <section  className=" p-6   lg:px[3rem] xl:px-[9rem] xl:py-[3rem] lg:py-0 ">
         {/* text */}
        <div className=" text h-[20%] w-full lg:flex gap-10  ">
          {/* left */}
          <div className="w-full text-[var(--primg)] text-[16px] lg:w-[55%] font-medium">
            <i className="ri-record-circle-line"></i> Calculator
            <p className="text-[26px] leading-9 text-black lg:text-[36px] font-semibold mt-3 lg:leading-11">
             How long will it take to pay off my loan?
            </p>
          </div>

          {/* right */}
          <div className="w-full lg:w-[40%] mt-2 lg:mt-10 text-justify">
           Use this loan payoff calculator to find out how many payments it will take to pay off a loan.
          </div>
        </div>

   <form onSubmit={handleSubmit(calculateRepayment)} className="cal mt-6 space-y-5 w-[80%] ">

  {/* Loan Amount */}
  <form action=""></form>
  <div className="amount flex justify-between items-center">
    <label className="text-[20px]" htmlFor="">Loan Amount</label>
    <input
    {...register("amount")}
      className="border rounded-[5px] text-[var(--secgr)] w-80 p-3"
      placeholder="$200,000"
      type="number"
    />
  </div>

  {/* Payment Frequency */}
  <div className="frequency flex justify-between items-center">
    <label className="text-[20px]" htmlFor="">Payment Frequency</label>
    <select
    {...register('frequency')}
      className="border rounded-[5px] text-[var(--secgr)] w-80 p-3"
      name=""
      id=""
    >
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
    </select>
  </div>

  {/* Interest Rate */}
  <div className="rate flex justify-between items-center">
    <label className="text-[20px]" htmlFor="">Interest Rate %</label>
    <input
  className="border rounded-[5px] text-[var(--secgr)] w-80 p-3"
  placeholder="e.g. 6.5"
  type="number"
  value={interestRate}
  onChange={(e) => setInterestRate(parseFloat(e.target.value))}
/>

  </div>

  {allRates.length > 0 && (
  <div className="bank-rate-select flex justify-between items-center">
    <label className="text-[20px]">Select Bank Rate</label>
    <select
      className="border rounded-[5px] text-[var(--secgr)] w-80 p-3"
      onChange={(e) => {
        const newRate = parseFloat(e.target.value);
        setInterestRate(newRate);
        setSelectedRate(newRate);
      }}
      value={selectedRate}
    >
      {allRates.map((institution) =>
        institution.products.flatMap((product) =>
          product.rates.map((rate) => (
            <option key={rate.id} value={rate.rate}>
              {institution.name} - {product.name} - {rate.term}: {rate.rate}%
            </option>
          ))
        )
      )}
    </select>
  </div>
)}


  {/* Loan Period */}
  <div className="tenure flex justify-between items-center">
    <label className="text-[20px]" htmlFor="">Loan Period (Years)</label>
    <input
    {...register('term')}
      className="border rounded-[5px] text-[var(--secgr)] w-80 p-3"
      placeholder="e.g. 30"
      type="number"
    />
  </div>

  {/* Calculate Button */}
    <button   type="submit" className="bg-[var(--primg)]/80 text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition hover:bg-[var(--primg)] ">
      Calculate
    </button>

</form>
{payment && (
  <div className="mt-4 p-4 bg-green-100 rounded">
    <h3 className="text-lg font-semibold">Estimated Monthly Repayment:</h3>
    <p className="text-2xl font-bold text-green-700">${payment.toFixed(2)} NZD</p>
  </div>
)}



   

      </section>
    </>
  );
}
