import InsightRoll from "src/components/About/InsightRoll";

const insights = [
  "5+ Projects Completed",
  "99% Client Satisfaction",
  "Contributed as a Technical Course Reviewer 📝",
  "Recipient of the Hackernoon Lorem Award 🏆",
  "1+ Years of Experience",
  "5+ Technologies Mastered",
];
export default function layout({children}: {children: React.ReactNode}) {
  return (
    <main className="flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
