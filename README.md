# 🧬 URL Shortener with Analytics

A full-stack web application that converts long URLs into short, shareable links — with built-in click tracking and analytics.

---

## 🛰️ Live Demo

- **Frontend**: [https://url-shortener-frontend-r6k.onrender.com](https://url-shortener-frontend-r6k.onrender.com)
- **Backend**: [https://url-shortener-backend-17yz.onrender.com](https://url-shortener-backend-17yz.onrender.com)

---

## 🧰 Tech Stack

| Layer      | Technology              |
|------------|--------------------------|
| 🎨 Frontend   | React (Vite or CRA)      |
| 🧠 Backend    | Node.js + Express        |
| 🗄️ Database   | MongoDB (via Mongoose)   |
| 🛸 Hosting    | Render (Frontend + Backend) |

---

## 🧩 Features

- 🧷 **URL Shortening** — Converts long URLs into compact links
- 🪞 **Redirection** — Automatically redirects when short URL is accessed
- 🧮 **Click Analytics** — Tracks how many times each short URL is used
- 🗃️ **MongoDB Storage** — Stores original URL, short code, and click count
- 🧵 **REST API** — Clean endpoints for shortening and redirecting

---

## 🖼️ Screenshots

| Step | Screenshot |
|------|------------|
| 🧾 Homepage with input | ![Frontend UI](https://res.cloudinary.com/demymjjto/image/upload/v1761044224/Screenshot_2025-10-21_162651_de6gl6.png) |
| 🧿 Shortened Result | ![Shortened URL](https://res.cloudinary.com/demymjjto/image/upload/v1761043924/Screenshot_2025-10-21_162140_ydddhn.png) |
| 🧭 Redirect in action | ![Redirect](https://res.cloudinary.com/demymjjto/image/upload/v1761044081/Screenshot_2025-10-21_162412_eqnexv.png) |

---

## 🎙️ Demo Script

> “Welcome to my URL Shortener with Analytics. This is a full-stack app built using React for the frontend and Node.js with Express for the backend.  
>  
> Users can enter any long URL and click ‘Shorten’ to generate a compact link. The backend stores the original URL and tracks how many times the short link is clicked.  
>  
> When someone visits the short link, they’re redirected to the original URL, and the click count is incremented in MongoDB.  
>  
> Both frontend and backend are deployed on Render, and the app is fully functional with real-world URLs.  
>  
> Thank you for checking it out!”

---

## 🧱 Folder Structure

📁 URL-Shortener-with-Analytics  
├─ 🗂️ backend  
│  ├─ 📄 models  
│  │  └─ Url.js → Mongoose schema for URL documents  
│  ├─ 📄 routes  
│  │  └─ url.js → API routes for shortening and analytics  
│  ├─ ⚙️ server.js → Express server with redirect logic  
│  ├─ 📦 package.json → Backend dependencies  
│  └─ 🔐 .env → MongoDB URI and PORT  

├─ 🗂️ frontend  
│  ├─ 📄 public  
│  │  └─ index.html → Entry point for React build  
│  ├─ 📄 src  
│  │  ├─ App.js → Main React component  
│  │  └─ index.js → ReactDOM render logic  
│  ├─ 📦 package.json → Frontend dependencies  

├─ 📘 README.md → Project overview and instructions  
└─ 🚫 .gitignore → Ignore node_modules, .env, etc.

## 🤝 Contributing

Got ideas or improvements? Jump in!

- Open issues  
- Suggest features  
- Fork and build your own version  

**Contributions welcome 🙌**  
⭐ Star the repo if you find it helpful!


![Built by Pillikandla Gnana Deepak Vardhan](https://img.shields.io/badge/Built%20by-PGnanaDeepakVardhan-blueviolet)
![VIT-AP University](https://img.shields.io/badge/VIT--AP%20University-Student-orange)
![Render Deploy](https://img.shields.io/badge/Hosted%20on-Render-blue)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Node.js](https://img.shields.io/badge/Backend-Node.js-yellow)
![React](https://img.shields.io/badge/Frontend-React-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)
