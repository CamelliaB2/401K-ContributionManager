interface Props {
  futureValue: number;
}

export function ProjectionCard({ futureValue }: Props) {
  return (
    <div className="border border-slate-200 p-8 rounded-2xl shadow-soft bg-white">
      <h3 className="text-xl font-semibold text-hi-navy mb-4">
        Projected Balance
      </h3>

      <p className="text-3xl font-bold text-hi-teal">
        ${futureValue.toLocaleString()}
      </p>

      <p className="text-hi-slate mt-2 text-md">
        Estimated balance at retirement based on your contributions.
      </p>
    </div>
  );
}
