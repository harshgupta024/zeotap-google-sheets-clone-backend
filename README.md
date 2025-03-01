#**Spreadsheet Web App - Backend**

This is the **backend** for a spreadsheet web application that mimics Google Sheets. It handles user data, spreadsheet operations, and mathematical functions.

## 🚀 Features

- REST API to handle spreadsheet data.
- CRUD operations for spreadsheet rows and columns.
- Mathematical functions: `SUM`, `AVERAGE`, `MAX`, `MIN`, `COUNT`.
- Data quality functions: `TRIM`, `UPPER`, `LOWER`, `REMOVE_DUPLICATES`, `FIND_AND_REPLACE`.
- Data validation for numeric fields.
- Supports local JSON storage (or MongoDB in the future).

## 🛠️ Tech Stack

- **Node.js & Express.js**: For the backend API.
- **MongoDB (optional)**: For future database integration.
- **JSON Storage**: To persist data locally.
- **CORS & dotenv**: To configure API security.

## 📂 Project Structure

```
backend/
│—— config/                  # Configuration files
│—— controllers/             # Business logic for handling requests
│—— models/                  # Data models (future MongoDB support)
│—— routes/                  # API routes
│—— sheets.json              # JSON file storing spreadsheet data
│—— server.js                # Main backend server
│—— package.json             # Dependencies
│—— .env                     # Environment variables
│—— README.md                # Documentation
```

## 📦 Installation & Setup

1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm start
   ```
4. The server runs at \`\`.

## 💽 API Endpoints

| Method | Endpoint          | Description                  |
| ------ | ----------------- | ---------------------------- |
| GET    | `/api/sheets`     | Fetch all spreadsheet data   |
| POST   | `/api/sheets`     | Save a new spreadsheet entry |
| PUT    | `/api/sheets/:id` | Update a spreadsheet cell    |
| DELETE | `/api/sheets/:id` | Delete a spreadsheet entry   |

## ✨ Future Enhancements

- Integrate **MongoDB for database storage**.
- Implement **authentication & user sessions**.
- Add **real-time collaboration** using WebSockets.

---
