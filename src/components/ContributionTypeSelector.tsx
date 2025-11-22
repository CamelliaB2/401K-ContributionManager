interface Props {
  value: "percentage" | "fixed";
  onChange: (v: "percentage" | "fixed") => void;
}

export function ContributionTypeSelector({ value, onChange }: Props) {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => onChange("percentage")}
        className={`
          px-6 py-3 rounded-xl text-lg font-medium border transition-all
          ${
            value === "percentage"
              ? "bg-hi-teal text-white border-hi-teal shadow-md"
              : "bg-slate-100 text-hi-navy border-slate-300 hover:bg-slate-200"
          }
        `}
      >
        Percentage
      </button>

      <button
        onClick={() => onChange("fixed")}
        className={`
          px-6 py-3 rounded-xl text-lg font-medium border transition-all
          ${
            value === "fixed"
              ? "bg-hi-teal text-white border-hi-teal shadow-md"
              : "bg-slate-100 text-hi-navy border-slate-300 hover:bg-slate-200"
          }
        `}
      >
        Fixed Amount
      </button>
    </div>
  );
}
