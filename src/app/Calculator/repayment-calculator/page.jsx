"use client";
import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner"
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function RepaymentCalculator() {
  const [interestRate, setInterestRate] = useState(6);

  const [payment, setPayment] = useState(null);
  const [allRates, setAllRates] = useState([]);
  const [selectedRate, setSelectedRate] = useState(6);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayable, setTotalPayable] = useState(null);
  const [months, setMonths] = useState(12);

  const { register, watch, reset, setValue, control } = useForm({
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
        const res = await axios.get(
          "https://ratesapi.nz/api/v1/mortgage-rates"
        );
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
      console.error("Invalid input");
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
    const repayment =
      (amount * periodicRate) /
      (1 - Math.pow(1 + periodicRate, -totalPayments));
    setPayment(repayment);

    // Calculate totals
    const totalPaymentAmount = repayment * totalPayments;
    const interestPaid = totalPaymentAmount - amount;

    setTotalPayable(totalPaymentAmount);
    setTotalInterest(interestPaid);
  };

  return (
    <>
     <Banner title="Repayment Calculator"/>
      <section className=" p-6   lg:p-[3rem]  ">
       
       

        <div className="FormContainer lg:flex justify-between shadow-2xl ">
        <form className="cal lg:w-[55%] flex flex-wrap max-lg:space-y-5 justify-between shadow-2x p-6">

  {/* Loan Amount */}
  <div className="amount w-[45%] lg:h-20 flex flex-col relative">
    <label className="text-[12px] bg-white absolute left-3 px-1 -top-2 sm:-top-3 sm:text-[17px]">
      Loan Amount
    </label>
    <input
      {...register("amount")}
      className="border rounded-[5px] text-[var(--secgr)] w-full h-[60px] p-4 pt-5 text-[14px] lg:text-[16px]"
      placeholder="$200,000"
      type="number"
      min={1}
    />
  </div>

  {/* Payment Frequency */}
  <div className="frequency w-[45%] lg:h-20 relative flex flex-col">
    <label className="text-[10px] absolute bg-white px-1 left-4 -top-2 sm:-top-3 z-10 sm:text-[17px]">
      Payment Frequency
    </label>
    <Controller
      control={control}
      name="frequency"
      render={({ field }) => (
        <select
          {...field}
          id="frequency"
          className="border rounded-[5px] text-[var(--secgr)] h-[60px] w-full p-4 pt-5 text-[14px] lg:text-[16px] appearance-none"
        >
          <option value="weekly">Weekly</option>
          <option value="fortnightly">Fortnightly</option>
          <option value="monthly">Monthly</option>
        </select>
      )}
    />
  </div>

  {/* Interest Rate */}
  <div className="rate w-[45%] lg:h-20 flex flex-col relative">
    <label className="text-[12px] absolute bg-white p-1 left-3 -top-3 sm:-top-4 sm:text-[17px]">
      Interest Rate %
    </label>
    <input
      className="border rounded-[5px] text-[var(--secgr)] w-full h-[60px] p-4 pt-5 text-[14px] lg:text-[16px]"
      placeholder="e.g. 6.5"
      type="number"
      min={1}
      value={interestRate}
      onChange={(e) => {
        const val = parseFloat(e.target.value);
        setInterestRate(val);
        setValue("rate", val);
      }}
    />
  </div>

  {/* Select Bank Rate */}
  {allRates.length > 0 && (
    <div className="bank-rate-select w-[45%] lg:h-20 flex flex-col relative">
      <label className="text-[12px] absolute bg-white p-1 left-4 -top-3 sm:-top-4 sm:text-[17px]">
        Select Bank Rate
      </label>
      <select
        className="border rounded-[5px] text-[var(--secgr)] w-full h-[60px] p-4 pt-5 text-[14px] lg:text-[16px] appearance-none"
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
                {institution.name} - {product.name} - {rate.term}: {rate.rate}%
              </option>
            ))
          )
        )}
      </select>
    </div>
  )}

  {/* Loan Period */}
  <div className="tenure flex flex-col w-full lg:h-20 relative">
    <label className="text-[12px] absolute bg-white p-1 left-3 -top-3 sm:-top-4 sm:text-[17px]">
      Loan Period (Yrs)
    </label>
    <input
      {...register("term")}
      className="border rounded-[5px] text-[var(--secgr)] w-[45%] h-[60px] p-4 pt-5 text-[14px] lg:text-[16px]"
      placeholder="e.g. 30"
      type="number"
      min={1}
    />
  </div>
</form>

          <div className="Result  lg:w-[40%]">
            {totalInterest !== null && totalPayable !== null && (
              <div className="  lg:mt-6  p-6 bg-white rounded-lg shadow-2x ">
                <h3 className="text-xl font-medium mb-4 text-center ">Repayment Summary</h3>

                {/* ✅ Graph Section */}
                <div className="max-w-xs h-56 xl:h-52 flex  justify-center mx-auto mb-6">
                  <Doughnut
                    data={{
                      labels: ["Loan", "Interest"],
                      datasets: [
                        {
                          data: [parseFloat(watch("amount")), totalInterest],
                          backgroundColor: ["#676666", "#76B6C3"],
                          borderWidth: 1,
                        },
                      ],
                    }}
                    options={{
                      cutout: "70%",
                      plugins: {
                        legend: {
                          position: "bottom",
                          labels: {
                            color: "#333",
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
                <div className="flex flex-col space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Repayment</span>
                    <span className="font-semibold max-sm:text-right ">
                      ${payment?.toFixed(2)} NZD
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Total Interest</span>
                    <span className=" max-sm:text-right font-semibold text-[var(--primg)]">
                      ${totalInterest?.toFixed(2)} NZD
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Payable Amount</span>
                    <span className="font-semibold max-sm:text-right">
                      ${totalPayable?.toFixed(2)} NZD
                    </span>
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
