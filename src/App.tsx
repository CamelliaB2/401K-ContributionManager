import { useEffect, useState } from "react";

import { ContributionTypeSelector } from "./components/ContributionTypeSelector";
import { ContributionInput } from "./components/ContributionInput";
import { YTDCard } from "./components/YTDCard";
import { ProjectionCard } from "./components/ProjectionCard";
import { SaveButton } from "./components/SaveButton";

function App() {
  const MOCK_AGE = 30;
  const RETIREMENT_AGE = 65;
  const GROWTH_RATE = 0.07;

  const [contributionType, setContributionType] = useState<
    "percentage" | "fixed"
  >("percentage");
  const [contributionValue, setContributionValue] = useState(10);

  const [salary, setSalary] = useState(100000);
  const [ytd, setYtd] = useState(12500);

  const [projectedBalance, setProjectedBalance] = useState<number | null>(null);

  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/api/contribution")
      .then((res) => res.json())
      .then((data) => {
        setContributionType(data.contributionType);
        setContributionValue(data.contributionValue);
      });

    fetch("http://localhost:3001/api/ytd")
      .then((res) => res.json())
      .then((data) => {
        setSalary(data.salary);
        setYtd(data.ytd);
      });
  }, []);

  const annualContribution =
    contributionType === "percentage"
      ? (salary * contributionValue) / 100
      : contributionValue * 24;

  useEffect(() => {
    const params = new URLSearchParams({
      annualContribution: annualContribution.toString(),
      age: MOCK_AGE.toString(),
      retirementAge: RETIREMENT_AGE.toString(),
      growthRate: GROWTH_RATE.toString(),
    });

    fetch(`http://localhost:3001/api/projection?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => setProjectedBalance(data.futureValue));
  }, [annualContribution]);

  const handleSave = async () => {
    setIsSaving(true);
    setSaved(false);

    await fetch("http://localhost:3001/api/contribution", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contributionType, contributionValue }),
    });

    setIsSaving(false);
    setSaved(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-300 shadow-sm py-14 mb-16">
        <h1 className="text-center text-5xl font-extrabold text-gray-800">
          401(k) <span className="text-blue-600">Contribution</span> Manager
        </h1>
        <p className="text-center text-gray-500 mt-4 text-xl">
          Adjust your contribution rate and visualize your future savings.
        </p>
      </header>

      {/* Main container */}
      <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-md border border-gray-200 space-y-12">
        {/* Contribution Type */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Contribution Type
          </h2>
          <ContributionTypeSelector
            value={contributionType}
            onChange={setContributionType}
          />
        </div>

        {/* Contribution Amount */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Contribution Amount
          </h2>
          <ContributionInput
            type={contributionType}
            value={contributionValue}
            onChange={setContributionValue}
          />
        </div>

        {/* YTD Card */}
        <YTDCard salary={salary} ytd={ytd} />

        {/* Projection */}
        {projectedBalance !== null && (
          <ProjectionCard futureValue={projectedBalance} />
        )}

        {/* Save Button */}
        <SaveButton isSaving={isSaving} saved={saved} onSave={handleSave} />
      </div>
    </div>
  );
}

export default App;
