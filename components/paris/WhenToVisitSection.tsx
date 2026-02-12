import React from "react";

const MONTHS = [
  { name: "Jan", color: "#FF3B30", label: "Red" },
  { name: "Feb", color: "#FF3B30", label: "Red" },
  { name: "Mar", color: "#FF3B30", label: "Red" },
  { name: "Apr", color: "#FF3B30", label: "Red" },
  { name: "May", color: "#FFCC00", label: "Yellow" },
  { name: "June", color: "#34C759", label: "Green" },
  { name: "July", color: "#34C759", label: "Green" },
  { name: "Aug", color: "#34C759", label: "Green" },
  { name: "Sep", color: "#34C759", label: "Green" },
  { name: "Oct", color: "#34C759", label: "Green" },
  { name: "Nov", color: "#FFCC00", label: "Yellow" },
  { name: "Dec", color: "#FF3B30", label: "Red" },
];

export const WhenToVisitSection = () => {
  return (
    <section className="w-full bg-[#FFFCF5] py-12 lg:py-20 relative overflow-hidden flex justify-center">
      <div className="w-full max-w-[1440px] px-4 flex flex-col items-center">
        {/* Title */}
        <h2 className="font-display italic font-semibold text-[28px] leading-[37px] text-[#4B3621] mb-4 text-center">
          When to visit Paris
        </h2>

        {/* Description */}
        <p className="font-sans font-medium text-[18px] leading-[30px] text-center text-[#4B3621] max-w-[792px] mb-12">
          The best time to visit is during the{" "}
          <span className="text-[#34C759]">Green-marked months</span>{" "}
          (June–October), while the{" "}
          <span className="text-[#FFCC00]">Yellow-marked months</span> (May and
          November) are moderate. The{" "}
          <span className="text-[#FF3B30]">Red-marked months</span> (March and
          April) are the least ideal due to heavy rainfall.
        </p>

        {/* Months Grid */}
        <div className="flex flex-wrap justify-center gap-[18px]">
          {MONTHS.map((month) => (
            <div
              key={month.name}
              className="w-[80px] h-[80px] rounded-full flex items-center justify-center border border-dashed"
              style={{
                borderColor: month.color,
                color: month.color,
              }}
            >
              <span className="font-display italic font-semibold text-[20px] md:text-[24px] leading-[30px] text-center">
                {month.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
