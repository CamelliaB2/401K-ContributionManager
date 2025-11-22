interface Props {
  type: "percentage" | "fixed";
  value: number;
  onChange: (v: number) => void;
}

export function ContributionInput({ type, value, onChange }: Props) {
  const max = type === "percentage" ? 50 : 1000;

  return (
    <div className="space-y-4">
      <input
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-3 accent-hi-teal"
      />

      <p className="text-2xl font-semibold text-hi-navy">
        {type === "percentage" ? `${value}%` : `$${value}`}
      </p>
    </div>
  );
}
