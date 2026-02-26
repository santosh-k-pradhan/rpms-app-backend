# Retail Pricing Management API

Backend REST API for managing pricing data across a global retail chain operating 3000+ stores across multiple countries.

This service supports:

- Bulk CSV pricing upload
- Search pricing records
- Update pricing entries
- Secure & scalable API architecture

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer (File Upload)
- csv-parser (CSV Processing)
- express-validator
- Helmet (Security)
- Morgan (Logging)
- Rate Limiting
- CORS
- dotenv

---

## 📂 Project Structure
<img width="229" height="534" alt="image" src="https://github.com/user-attachments/assets/2d2efcf1-3135-4c67-9d58-02a3561ca36f" />


---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository

```bash
git clone <repo-url>
cd backend
```

2️⃣ Install Dependencies
```bash
npm install
```
Installed Packages:
```bash
npm install express mongoose multer csv-parser express-validator morgan cors helmet express-rate-limit dotenv
```
### Environment Configuration
Create a .env file in the root directory:
```bash
MONGO_URI=mongodb://localhost:27017/retail-pricing
PORT=3000
```

▶️ Run the Server
```bash
node server.js
```
Server runs on:
```bash
http://localhost:3000
```

## API Endpoints

Base URL:
```bash
/api/pricing
```
## Search Pricing Records
GET /

### Supports query parameters:

| Parameter | Description |
|-----------|---------------------|
| storeId   | Filter by store     |
| sku       | Filter by SKU       |
| date      | Filter by date      |

## GET endpoint to fetch all records
```
http://localhost:5000/api/pricing
```
<img width="1369" height="605" alt="image" src="https://github.com/user-attachments/assets/834bc175-5a52-4118-8ffa-9e181e12311c" />

## GET endpoint to fetch based on storeId
```
http://localhost:5000/api/pricing?storeId=S005
```
<img width="1361" height="695" alt="image" src="https://github.com/user-attachments/assets/04dd85b5-7647-4b69-b834-ca21e75797c6" />

## GET endpoint to fetch based on storeId adn SKU
```
http://localhost:5000/api/pricing?storeId=S005&sku=SKU1005
```
<img width="1366" height="709" alt="image" src="https://github.com/user-attachments/assets/905d6f8d-3e05-4b72-b309-173b32f1ed84" />

