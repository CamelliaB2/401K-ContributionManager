interface Props {
  salary: number;
  ytd: number;
}

export function YTDCard({ salary, ytd }: Props) {
  return (
    <div className="border border-slate-200 p-8 rounded-2xl shadow-soft bg-white">
      <h3 className="text-xl font-semibold text-hi-navy mb-4">
        Your Contribution Summary
      </h3>

      <p className="text-lg">
        <strong>YTD Contributions:</strong> ${ytd.toLocaleString()}
      </p>

      <p className="text-lg text-hi-slate">
        Annual Salary: ${salary.toLocaleString()}
      </p>
    </div>
  );
}
