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

### Parameter	  Description
storeId	    Filter by store
sku	        Filter by SKU
date	      Filter by date
