"use client";
import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);



export default function RepaymentCalculator() {
  const [interestRate, setInterestRate] = useState(6);

  const [payment, setPayment] = useState(null);
  const [allRates, setAllRates] = useState([]);
  const [selectedRate, setSelectedRate] = useState(6);
  const [totalInterest, setTotalInterest] = useState(null);
const [totalPayable, setTotalPayable] = useState(null);
const [months, setMonths] = useState(12); 





const { register, handleSubmit, watch, reset, setValue, control } = useForm({
    mode: "onChange",
    defaultValues: {
      amount: 500000,
      frequency: "monthly",
      rate: 6,
      term: 30,
    },
  });
  
  
  const allValues = watch();
  
  useEffect(() => {
    async function getRate() {
      try {
        const res = await axios.get("https://ratesapi.nz/api/v1/mortgage-rates");
      const data = res.data;
      setAllRates(data.data);

      const defaultRate = data.data[0]?.products[0]?.rates[0]?.rate ?? 6;
      setInterestRate(defaultRate);
      setSelectedRate(defaultRate);
      setValue("rate", defaultRate);
    } catch (error) {
      console.error("Error while fetching interest rate", error);
      setInterestRate(6.5);
    }
  }

  getRate();
}, []);

useEffect(() => {
  reset({
    amount: 500000,
    frequency: "monthly",
    rate: interestRate,
    term: 30,
  });
}, [interestRate]);

// Auto-calculate anytime values change
useEffect(() => {
  if (
    allValues.amount &&
    allValues.frequency &&
    allValues.rate &&
    allValues.term &&
    interestRate
  ) {
    performCalculation(allValues);
  }
}, [allValues, interestRate]);
useEffect(() => {
  const years = months / 12;
  setValue("term", years);
}, [months, setValue]);



const performCalculation = (data) => {
  const amount = parseFloat(data.amount);
  const termYears = parseFloat(data.term);
  const frequency = data.frequency;
  const rate = interestRate;

  if (!amount || !termYears || !rate) {
    console.error('Invalid input');
    return;
  }

  // Determine how many payments per year
  const paymentsPerYearMap = {
    weekly: 52,
    fortnightly: 26,
    monthly: 12,
  };

  const paymentsPerYear = paymentsPerYearMap[frequency] ?? 12;

  // Periodic interest rate
  const periodicRate = rate / 100 / paymentsPerYear;
  const totalPayments = termYears * paymentsPerYear;

  // Calculate repayment amount per period
  const repayment = (amount * periodicRate) / (1 - Math.pow(1 + periodicRate, -totalPayments));
  setPayment(repayment);

  // Calculate totals
  const totalPaymentAmount = repayment * totalPayments;
  const interestPaid = totalPaymentAmount - amount;

  setTotalPayable(totalPaymentAmount);
  setTotalInterest(interestPaid);
};


  return (
    <>
      <Header title="Calculator" />
      <section className=" p-6   lg:px[3rem] xl:px-[9rem] xl:py-[3rem] lg:py-0 ">
        {/* text */}
        <div className=" text h-[20%] w-full lg:flex gap-10  ">
          {/* left */}
          <div className="w-full text-[var(--primg)]  text-[14px]   lg:text-[16px]  lg:w-[55%] font-medium">
            <i className="ri-record-circle-line"></i> Calculator
            <p className="text-[26px] leading-9 text-black lg:text-[36px] font-semibold mt-3 lg:leading-11">
              How long will it take to pay off my loan?
            </p>
          </div>

          {/* right */}
          <div className="w-full lg:w-[40%] mt-2 lg:mt-10 text-justify">
            Use this loan payoff calculator to find out how many payments it
            will take to pay off a loan.
          </div>
        </div>

        <div className="FormContainer lg:flex justify-between shadow-2xl ">
          <form
            // onSubmit={handleSubmit(calculateRepayment)}
            className="cal mt-6  lg:w-[55%] flex flex-wrap space-y-0  justify-between shadow-2x p-6  "
          >
            {/* Loan Amount */}


            <div className="amount w-[45%] lg:h-20 flex flex-col relative ">
              <label className=" text-[14px] bg-white absolute  left-3 p-1 lg:text-[17px] " htmlFor="">
                Loan Amount
              </label>
              <input
                {...register("amount")}
                className="border rounded-[5px] text-[var(--secgr)] mt-4 w-full p-4"
                placeholder="$200,000"
                type="number"
              />
            </div>

            {/* Payment Frequency */}
            <div className="frequency w-[45%] lg:h-20 relative flex flex-col">
              <label className=" text-[12px] md:text-[14px]  absolute  bg-white p-1 left-4 lg:text-[17px]" htmlFor="">
                Payment Frequency
              </label>
              <Controller
                control={control}
                name="frequency"
                render={({ field }) => (
                  <select
                    {...field}
                    className="border rounded-[5px] text-[var(--secgr)]  w-full p-4 mt-4"
                  >
                    <option value="weekly">Weekly</option>
                    <option value="fortnightly">Fortnightly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                )}
              />
            </div>

            {/* Interest Rate */}
            <div className="rate  w-[45%] flex lg:h-20  flex-col relative ">
              <label className=" text-[14px]   absolute  bg-white p-1 left-3 lg:text-[17px] " htmlFor="">
                Interest Rate %
              </label>
              <input
                className="border rounded-[5px] text-[var(--secgr)] w-full p-4 mt-4"
                placeholder="e.g. 6.5"
                type="number"
                value={interestRate}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setInterestRate(val);
                  setValue("rate", val);
                }}
              />
            </div>

            {allRates.length > 0 && (
              <div className="bank-rate-select lg:h-20 w-[45%] flex flex-col relative">
                <label className=" text-[14px]   absolute  bg-white p-1 left-4 lg:text-[17px] ">Select Bank Rate</label>
                <select
                  className="border rounded-[5px] text-[var(--secgr)] w-full p-4 mt-4"
                  onChange={(e) => {
                    const newRate = parseFloat(e.target.value);
                    setInterestRate(newRate);
                    setSelectedRate(newRate);
                    setValue("rate", newRate);
                  }}
                  value={selectedRate}
                >
                  {allRates.map((institution) =>
                    institution.products.flatMap((product) =>
                      product.rates.map((rate) => (
                        <option key={rate.id} value={rate.rate}>
                          {institution.name} - {product.name} - {rate.term}:{" "}
                          {rate.rate}%
                        </option>
                      ))
                    )
                  )}
                </select>
              </div>
            )}

            {/* Loan Period */}
            {/* <div className="tenure flex flex-col w-full lg:h-20  relative ">
              <label className=" text-[14px]   absolute  bg-white p-1 left-3 lg:text-[17px] " htmlFor="">
                Loan Period (Yrs)
              </label>
              <input
                {...register("term")}
                className="border rounded-[5px] text-[var(--secgr)] w-[45%] p-4 mt-4"
                placeholder="e.g. 30"
                type="number"
              />
            </div> */}

            <div className="w-full flex flex-col mt-4">
  <label className="mb-2 font-medium text-gray-700">Number of months</label>
  <div className="flex items-center justify-between">
    <input
      type="range"
      min="6"
      max="360"
      step="1"
      value={months}
      onChange={(e) => setMonths(Number(e.target.value))}
      className="custom-slider w-full mr-4"
    />
    <div className="w-[100px] text-left text-[16px] font-semibold border rounded px-3 py-1">
      {months} <span className="text-gray-500 text-sm">MONTHS</span>
    </div>
  </div>
</div>

          </form>
          <div className="Result  lg:w-[40%]">


  {totalInterest !== null && totalPayable !== null && (
    <div className="mt-6 p-6 bg-white rounded-lg shadow-2x ">
      <h3 className="text-xl font-medium mb-4">Repayment Summary</h3>

      {/* ✅ Graph Section */}
      <div className="max-w-xs h-56 xl:h-52 flex  justify-center mx-auto mb-6">
        <Doughnut
          data={{
            labels: ['Loan', 'Interest'],
            datasets: [
              {
                data: [parseFloat(watch('amount')), totalInterest],
                backgroundColor: ['#4ade80', '#93c5fd'],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            cutout: '70%',
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  color: '#333',
                  boxWidth: 20,
                  padding: 20,
                  font: {
                    size: 15,
                  },
                },
              },
            },
          }}
        />
      </div>

      {/* ✅ EMI, Interest, Payable */}
      <div className="flex flex-col space-y-3  max-lg:mt-32">
        <div className="flex justify-between">
          <span className="font-medium">EMI payable</span>
          <span className="font-semibold max-sm:text-right ">${payment?.toFixed(2)} NZD</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Total Interest</span>
          <span className=" max-sm:text-right font-semibold text-[var(--primg)]">${totalInterest?.toFixed(2)} NZD</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Payable Amount</span>
          <span className="font-semibold max-sm:text-right">${totalPayable?.toFixed(2)} NZD</span>
        </div>
      </div>
    </div>
  )}
</div>

        </div>
      </section>
    </>
  );
}
