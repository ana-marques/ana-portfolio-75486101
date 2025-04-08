
import React from "react";
import { Leaf } from "lucide-react";

const NextStepsSection = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-10">Next Steps 🏃‍♀️🏃‍♀️🏃‍♀️</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-medium text-green-400 mb-6">Design</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Leaf className="h-6 w-6 flex-shrink-0 text-green-500 mt-1" />
                <span className="text-xl">Design more flows like</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="h-6 w-6 flex-shrink-0 text-green-500 mt-1" />
                <span className="text-xl">Subscription box</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="h-6 w-6 flex-shrink-0 text-green-500 mt-1" />
                <span className="text-xl">Track order</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="h-6 w-6 flex-shrink-0 text-green-500 mt-1" />
                <span className="text-xl">Cancel order</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="h-6 w-6 flex-shrink-0 text-green-500 mt-1" />
                <span className="text-xl">Test & validate with users</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="h-6 w-6 flex-shrink-0 text-green-500 mt-1" />
                <span className="text-xl">And iterate!!</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-3xl font-medium text-green-400 mb-6">Business</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Leaf className="h-6 w-6 flex-shrink-0 text-green-500 mt-1" />
                <span className="text-xl">Content of boxes</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="h-6 w-6 flex-shrink-0 text-green-500 mt-1" />
                <span className="text-xl">Partnerships with vegan brands</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="h-6 w-6 flex-shrink-0 text-green-500 mt-1" />
                <span className="text-xl">Premium Model</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="h-6 w-6 flex-shrink-0 text-green-500 mt-1" />
                <span className="text-xl">Referral program</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStepsSection;
