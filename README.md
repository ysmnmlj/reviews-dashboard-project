# 🏡 FlexLiving Reviews Dashboard

A full-stack project for managing and displaying guest reviews from multiple sources (Hostaway, Google Reviews), with a manager dashboard to approve, filter, and analyze reviews.

---

## 🚀 Tech Stack

**Backend**
- Node.js + Express
- TypeScript
- Axios
- CORS

**Frontend**
- React (Vite)
- TailwindCSS

**Dev Tools**
- ts-node-dev
- Nodemon
- TypeScript strict mode

---

## 📂 Project Structure

reviews-dashboard-project/
│── backend/
│ ├── src/
│ │ ├── controllers/ # Route handlers
│ │ ├── routes/ # Express routes
│ │ ├── services/ # API integration logic
│ │ ├── utils/ # Normalization helpers
│ │ ├── data/ # Mocked JSON reviews
│ │ └── server.ts # Entry point
│ ├── package.json
│ └── tsconfig.json
│
│── frontend/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Dashboard & Property view
│ │ └── App.tsx
│ ├── index.html
│ └── package.json
│
└── README.md

## ⚙️ Backend

### Start server
```bash
cd backend
npm install
npm run dev

API Endpoints

Base URL: http://localhost:5000/api

GET /reviews → all normalized reviews (Hostaway API or mocked JSON fallback)

GET /reviews/:id → single review by ID

GET /google-reviews/:placeId → reviews for a Google Place (via RapidAPI)

Normalized Review Format
{
  "id": "12345",
  "listingName": "Google Workplace 6",
  "channel": "Google",
  "reviewType": "guest-to-place",
  "author": "Luke Archibald",
  "rating": 4,
  "text": "Great place!",
  "date": "2022-05-11T10:00:00Z"
}

🎨 Frontend
Start frontend
cd frontend
npm install
npm run dev

Features

Manager dashboard to:

View per-property performance

Filter/sort by rating, category, channel, or date

Select reviews to publish

Public property page with approved reviews

Clean, TailwindCSS-based UI