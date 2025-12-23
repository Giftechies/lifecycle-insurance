"use client"
import Banner from '@/app/Components/Banner/Banner';
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const frequencies = {
  Monthly: 12,
  Fortnightly: 26,
  Weekly: 52,
};

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

const calculateLoan = (amount, term, rate, frequency, extra) => {
  const freq = frequencies[frequency];
  const totalPayments = term * freq;
  const monthlyRate = rate / 100 / 12;
  const repayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term * 12));
  const newRepayment = repayment + extra;

  const chartData = [];
  let balance = amount;
  let year = 1;
  let totalInterestSaved = 0;

  for (let i = 1; i <= totalPayments; i++) {
    const interest = balance * (rate / 100 / freq);
    const principal = newRepayment - interest;
    balance -= principal;

    if (i % freq === 0 || i === totalPayments) {
      chartData.push({
        year,
        newBalance: Math.max(balance, 0),
        originalBalance: Math.max(amount - repayment * (i / freq), 0),
        difference: Math.max(amount - repayment * (i / freq), 0) - Math.max(balance, 0),
      });
      year++;
    }

    if (balance <= 0) break;
  }

  const interestSaved = repayment * totalPayments - newRepayment * (chartData.length * freq);
  const timeSaved = term - chartData.length;

  return {
    chartData,
    interestSaved,
    timeSaved,
    newRepayment,
  };
};

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [repaymentFrequency, setRepaymentFrequency] = useState('Monthly');
  const [extraContribution, setExtraContribution] = useState(500);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (loanAmount && loanTerm && interestRate) {
      const res = calculateLoan(
        loanAmount,
        loanTerm,
        interestRate,
        repaymentFrequency,
        extraContribution
      );
      setResult(res);
    }
  }, [loanAmount, loanTerm, interestRate, repaymentFrequency, extraContribution]);

  return (
   <>

   <Banner title='Loan Calculator'/>

    <div className=" bg-slate-50 p-4 lg:p-[3rem] ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl font-semibold">Loan Calculator</h2>

          <div className="space-y-2">
            <label className="block">Loan Amount ($)</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full border p-2 rounded-md"
            />

            <label className="block">Loan Term (Years)</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full border p-2 rounded-md"
            />

            <label className="block">Interest Rate (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full border p-2 rounded-md"
            />

            <label className="block">Repayment Frequency</label>
            <select
              value={repaymentFrequency}
              onChange={(e) => setRepaymentFrequency(e.target.value)}
              className="w-full border p-2 rounded-md"
            >
              {Object.keys(frequencies).map((key) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>

            <label className="block">Extra Contribution ($)</label>
            <input
              type="number"
              value={extraContribution}
              onChange={(e) => setExtraContribution(Number(e.target.value))}
              className="w-full border p-2 rounded-md"
            />
          </div>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          {result ? (
            <>
              <h2 className="text-xl font-semibold mb-4">Results</h2>
              <p>New Repayment: <strong>{formatCurrency(result.newRepayment)}</strong></p>
              <p>Interest Saved: <strong>{formatCurrency(result.interestSaved)}</strong></p>
              <p>Loan Term Reduced By: <strong>{result.timeSaved} years</strong></p>

              <div className="mt-6 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={result.chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                    <Bar dataKey="originalBalance" fill="#8884d8" name="Original Balance" />
                    <Bar dataKey="newBalance" fill="#82ca9d" name="New Balance" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </>
          ) : (
            <p>Fill the form to see results.</p>
          )}
        </div>
      </div>
    </div>
   
   
   </>
  );
};

export default LoanCalculator;