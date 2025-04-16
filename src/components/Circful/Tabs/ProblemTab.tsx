
import React from "react";
import { Clock, UserCog, Target } from "lucide-react";

const ProblemTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">Solving <span className="text-amber-500">3 big hidden</span> problems</h2>
        <p className="text-xl mb-6">
          Increasing engagement levels and retention by 18%
        </p>
      </div>
      
      <div className="grid gap-6">
        <div className="p-6 rounded-lg bg-amber-50/70 border border-amber-100">
          <div className="flex items-start gap-4">
            <div className="bg-white p-3 rounded-full">
              <div className="w-8 h-8 flex items-center justify-center text-[#FDB75A]">
                <Clock className="size-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Churn</h3>
              <p className="text-muted-foreground">
                Churn and lack of engagement are expensive and most companies have no data on both
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-amber-100/50 border border-amber-200">
          <div className="flex items-start gap-4">
            <div className="bg-white p-3 rounded-full">
              <div className="w-8 h-8 flex items-center justify-center text-[#FDB75A]">
                <UserCog className="size-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Leadership</h3>
              <p className="text-muted-foreground">
                Managers are the biggest influence on employee engagement, and most lack leadership skills
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-purple-50/70 border border-purple-100">
          <div className="flex items-start gap-4">
            <div className="bg-white p-3 rounded-full">
              <div className="w-8 h-8 flex items-center justify-center text-[#FDB75A]">
                <Target className="size-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Personalization</h3>
              <p className="text-muted-foreground">
                Engagement is very individual, while HR initiatives are one-size-fits-all and ineffective
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemTab;
