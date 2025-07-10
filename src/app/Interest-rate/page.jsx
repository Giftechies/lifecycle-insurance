'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from '../Components/Header/Header';

const terms = [
  "Variable floating",
  "6 months",
  "1 year",
  "2 years",
  "3 years",
  "4 years",
  "5 years"
];

export default function InterestRatesTable() {
  const [institutions, setInstitutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://ratesapi.nz/api/v1/mortgage-rates')
      .then(response => {
        const data = response.data?.data;
        setInstitutions(Array.isArray(data) ? data : []);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError("Failed to load rates. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getRateForTerm = (rates, term) => {
    if (!rates) return "-";
    const match = rates.find(rate => rate.term === term);
    return match ? match.rate.toFixed(2) + "%" : "-";
  };

  return (
    // <>
    // </>
    <section className=" ">
      <Header title="Interest Rate" />
      <div className="p-4 max-w-[1600px] mx-auto lg:px-[3.3rem] xl:px-[7rem] font-sans ">
        <h2 className="text-[16px]  text-[var(--primg)]">  <i className="ri-record-circle-line mr-2 text-lg font-extralight"></i>Interest Rate</h2>

        {loading && (
          <div className="text-center text-gray-500 p-4">Loading rates...</div>
        )}

        {error && (
          <div className="text-center text-red-600 p-4">{error}</div>
        )}

        {/* DESKTOP / LG AND ABOVE VIEW */}
        {!loading && !error && (
          <div className="hidden lg:block overflow-x-auto">
            <h1 className=" text-center text-[36px] font-semibold ">The Latest Interest rates</h1>
            <table className="min-w-full border-collapse border border-gray-300  ">
              <thead className="bg-[var(--primg)]  text-white">
                <tr>
                  <th className="border p-2">Institution</th>
                  <th className="border p-2">Product</th>
                  {terms.map((term) => (
                    <th key={term} className="border p-2">{term}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {institutions.length > 0 ? (
                  institutions.map((institution) =>
                    institution.products?.map((product) => (
                      <tr key={product.id} className="even:bg-[var(--secgr)]/20 odd:bg-white">
                        <td className="border p-2">{institution.name}</td>
                        <td className="border p-2">{product.name}</td>
                        {terms.map((term) => (
                          <td key={term} className="border p-2 text-center">
                            {getRateForTerm(product.rates, term)}
                          </td>
                        ))}
                      </tr>
                    ))
                  )
                ) : (
                  <tr>
                    <td colSpan={terms.length + 2} className="text-center p-4">
                      No rates available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* MOBILE / MD AND BELOW VIEW */}
{!loading && !error && (
  <MobileAccordion terms={terms} institutions={institutions} getRateForTerm={getRateForTerm} />
)}

      </div>
    </section>
  );
}
function MobileAccordion({ terms, institutions, getRateForTerm }) {
  const [openTerm, setOpenTerm] = useState(null);

  const toggleTerm = (term) => {
    setOpenTerm(openTerm === term ? null : term);
  };

  return (
    <div className="block lg:hidden ">
            <h1 className=" text-center text-[30px] font-semibold ">The Latest interest rates</h1>

      {terms.map((term) => (
        <div key={term} className="mb-4 rounded-lg border border-gray-300 shadow mt-5">
          <button
            onClick={() => toggleTerm(term)}
            className={`w-full flex justify-between items-center px-4 py-3 rounded-lg   transition-colors ${
              openTerm === term ? 'bg-[var(--primg)] text-white' : 'bg-[var(--primg)] text-white'
            }`}
          >
            <span className="font-semibold">{term}</span>
            <span className="text-xl">
              {openTerm === term ? '▾' : '+'}
            </span>
          </button>

          {openTerm === term && (
            <div className="bg-white border-t">
              {institutions.length > 0 ? (
                institutions
                  .map((institution) =>
                    institution.products?.map((product) => {
                      const rate = getRateForTerm(product.rates, term);
                      if (rate === "-") return null;

                      return (
                        <div
                          key={`${institution.id}-${product.id}-${term}`}
                          className="border-t px-4 py-3 flex flex-col"
                        >
                          <span className="text-blue-800 font-semibold">{institution.name}</span>
                          <span className="text-gray-700 text-sm">{product.name}</span>
                          <div className="mt-2 bg-blue-50 text-blue-800 px-3 py-1 rounded w-fit">
                            {rate}
                          </div>
                        </div>
                      );
                    })
                  )
              ) : (
                <div className="p-4 text-center text-gray-500">No rates available for {term}</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

