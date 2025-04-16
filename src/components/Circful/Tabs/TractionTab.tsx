
import React from "react";

const TractionTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">Product validated with <span className="text-amber-500">zero</span> funding</h2>
        <p className="text-xl mb-8">
          Circful has been tested and evolved daily for over 2 months, in 2 customers, who brought us 5 more companies, on a waiting list
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <div className="text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8"><path d="M2 12h5"/><path d="M17 12h5"/><path d="M9 12h6"/><path d="M3 18V6a4 4 0 0 1 4-4h3"/><path d="M14 2h3a4 4 0 0 1 4 4v12"/><circle cx="8" cy="18" r="4"/><circle cx="16" cy="18" r="4"/></svg>
            </div>
          </div>
          <h3 className="text-4xl font-bold mb-2">2</h3>
          <p className="text-muted-foreground">Customers using it for 8 weeks</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <div className="text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
            </div>
          </div>
          <h3 className="text-4xl font-bold mb-2">100%</h3>
          <p className="text-muted-foreground">Conversion to paid</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <div className="text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10v2H7z"/><path d="M7 11h10v2H7z"/><path d="M7 15h4v2H7z"/></svg>
            </div>
          </div>
          <h3 className="text-4xl font-bold mb-2">52</h3>
          <p className="text-muted-foreground">Employees covered</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
          <div className="flex justify-center mb-4">
            <div className="text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
          </div>
          <h3 className="text-4xl font-bold mb-2">5</h3>
          <p className="text-muted-foreground">Companies on a waiting list</p>
        </div>
      </div>

      <div className="bg-amber-50/70 p-6 rounded-lg border border-amber-100 mt-12">
        <h3 className="text-xl font-semibold mb-4">What was the process</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-2">
            <span className="text-amber-500 text-xl font-bold">•</span>
            <p>15 days pilot with one of their teams</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 text-xl font-bold">•</span>
            <p>Decision to go paid and 100% coverage of employees</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 text-xl font-bold">•</span>
            <p>Weekly feedback collection, together with metrics analysis</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 text-xl font-bold">•</span>
            <p>Daily iteration of the product, experience and action points</p>
          </li>
        </ul>
      </div>
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6"><span className="text-amber-500">Healthy</span> unit economics</h2>
        <p className="text-xl mb-8">
          Customer acquisition can be standardized globally and remotely, towards a great LTV to CAC ratio.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-sm text-gray-500 mb-1">ARPC</p>
                <p className="text-xl font-semibold">2600 €</p>
                <p className="text-xs text-gray-500">Average revenue per customer per year</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Retention</p>
                <p className="text-xl font-semibold">10 months</p>
                <p className="text-xs text-gray-500">Lifetime value in months</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Operational Costs</p>
                <p className="text-xl font-semibold">500 €</p>
                <p className="text-xs text-gray-500">Lifetime costs per customer</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">LTV</p>
                <p className="text-xl font-semibold">1600 €</p>
                <p className="text-xs text-gray-500">Net Lifetime Value after all costs</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-100 p-6 rounded-lg">
              <p className="text-center text-amber-900 font-semibold mb-2">CAC Forecast</p>
              <p className="text-center text-4xl font-bold">300 €</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg">
              <p className="text-center text-blue-900 font-semibold mb-2">LTV to CAC</p>
              <p className="text-center text-4xl font-bold">3.5</p>
            </div>
            <div className="col-span-2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-center font-semibold mb-2">PRICING</p>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-4xl font-bold">5 €</p>
                    <p className="text-sm text-gray-500">Per employee</p>
                  </div>
                  <div className="text-center">or</div>
                  <div>
                    <p className="text-4xl font-bold">500 €</p>
                    <p className="text-sm text-gray-500">per month for enterprise licenses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Planning to go <span className="text-amber-500">big</span></h2>
        <p className="text-xl mb-8">
          A huge addressable market and a controlled burn rate
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-blue-600 text-5xl font-bold mb-4">20% Growth</div>
            <p className="text-sm text-blue-800 mb-6">Per Month</p>
            
            <div className="space-y-2 text-blue-700">
              <p>Customers</p>
              <p>Revenue (MRR)</p>
              <p>Headcount</p>
              <p>Fundraising</p>
            </div>
            
            <div className="mt-6 text-right text-blue-800">
              <p>(Pre-seed)</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border">
            <div className="space-y-4">
              <p className="text-lg">
                The majority of our costs are salaries and marketing, a very lean model
              </p>
              
              <p className="text-lg">
                We're acquiring two types of customers: SMEs (with an automated sales funnel) and Enterprise (with sales force)
              </p>
              
              <p className="text-lg">
                We plan to raise a new round each year so we're aggressive with the pace of product, acquisition and data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractionTab;
