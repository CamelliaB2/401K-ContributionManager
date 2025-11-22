# DEMO VIDEO:
https://drive.google.com/file/d/1qi-uJQb0dSbVWO_FxgtKS9H4BgVbweCY/view?usp=sharing


# 401(k) Contribution Manager

A modern, interactive single-page application for adjusting 401(k) contribution rates and projecting long-term retirement growth.
Built with React + TypeScript + Vite, styled with Tailwind CSS, and powered by a lightweight Node + Express backend

# Features

Adjustable contribution type (percentage or fixed amount)

Real-time slider updates

YTD contributions + salary summary

Long-term projection based on compound growth

Persistent saving via backend API

Fully local, no external services required

# Projection Formula

This project uses the standard future value of an ordinary annuity formula to model long-term retirement growth:
```sh
FV = C × [((1 + r)ᵗ – 1) / r]
```

Where:

C — Annual contribution

r — Annual growth rate (default 7%)

t — Years until retirement

This provides a realistic model of recurring annual contributions growing over time.

# Getting Started

1. Clone the repository
```sh
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```
2. Install & run the backend
```sh
cd backend
npm install
npm start
```
3. Install & run the frontend
Open a new terminal:
```sh
cd ..
npm install
npm run dev
```
Frontend will run at: http://localhost:5173

<img width="941" height="334" alt="image" src="https://github.com/user-attachments/assets/eec65a79-7354-4917-9d61-0c3345730f74" />
  
