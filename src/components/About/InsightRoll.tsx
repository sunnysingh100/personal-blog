import React from "react";

type Insight = string;
function InsightRoll({insights}: {insights: Insight[]}) {
  return (
    <div className="w-full overflow-hidden bg-accent dark:bg-accentDark dark:text-dark text-light whitespace-nowrap">
      <div className="flex items-center justify-center w-full py-2 text-sm font-semibold tracking-wider capitalize sm:py-3 sm:text-base animate-roll">
        {insights.map((insight, index) => (
          <div key={index}>
            {insight} <span className="px-5">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InsightRoll;
