import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = "./data.json";

// GET current contribution settings
app.get("/api/contribution", (req, res) => {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const data = JSON.parse(raw);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to read data" });
  }
});

// POST to save contribution
app.post("/api/contribution", (req, res) => {
  const { contributionType, contributionValue } = req.body;

  const newData = {
    contributionType,
    contributionValue,
  };

  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(newData, null, 2));
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to write data" });
  }
});

// Mock YTD endpoint
app.get("/api/ytd", (req, res) => {
  res.json({
    salary: 100000,
    ytd: 12500,
  });
});

// Projection endpoint
app.get("/api/projection", (req, res) => {
  const { annualContribution, age, retirementAge, growthRate } = req.query;

  // Convert query strings to numbers
  const annual = Number(annualContribution);
  const currentAge = Number(age);
  const retireAge = Number(retirementAge);
  const rate = Number(growthRate);

  if (isNaN(annual) || isNaN(currentAge) || isNaN(retireAge) || isNaN(rate)) {
    return res.status(400).json({ error: "Invalid input values" });
  }

  const years = retireAge - currentAge;

  // Future value of an annuity formula
  const futureValue = annual * ((Math.pow(1 + rate, years) - 1) / rate);

  res.json({
    years,
    futureValue,
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
