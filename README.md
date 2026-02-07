
# 🧩 Frontend Task – Next.js (TinyTales)

A production-ready frontend application built with **Next.js (App Router)**, focusing on clean architecture, solid API integration, performance optimization, and a fully responsive UI.

This project demonstrates a complete authentication flow and a pixel-perfect UI implementation based on the provided design.

---

## 🚀 Live Demo

👉 **Live Demo:**
[https://tinytales-p5tl.vercel.app/](https://tinytales-p5tl.vercel.app/)

👉 **GitHub Repository:**
[https://github.com/ibrahi4/Tinytales.git](https://github.com/ibrahi4/Tinytales.git)

---

## 🛠 Tech Stack

* **Next.js 14 (App Router)**
* **React**
* **Tailwind CSS**
* **Axios**
* **Lucide Icons**
* **Vercel** (Deployment)

---

## 📐 Project Architecture

The project follows a **scalable and maintainable architecture**, with a clear separation of concerns:

```
src/
├── app/                # Next.js App Router pages
│   ├── auth/            # Login, Register, Verify pages
│   ├── dashboard/       # Protected dashboard
│   └── product/         # Product details pages
│
├── components/          # Reusable UI & shared components
│   ├── ui/              # Buttons, Inputs, Cards, etc.
│   ├── shared/          # Header, Footer, Error messages
│   └── product/         # Product-specific components
│
├── lib/
│   ├── api/             # API clients & endpoints
│   ├── hooks/           # Custom hooks (useAuth)
│   └── utils/           # Validators & storage helpers
│
├── styles/              # Global styles
└── providers/           # App-level providers
```

This structure ensures readability, easy scaling, and long-term maintainability.

---

## 🔐 Authentication Flow

### Register

* Full Name
* Email
* Password
* Phone Number
* Country Code
* Integrated with the provided Register API
* Redirects to account verification

### Login

* Email & Password
* Integrated with Login API
* Token stored after successful authentication
* Redirects to Dashboard

### Verify Account

* 6-digit verification code
* **Test Code:** `123456`
* Integrated with Verify API
* Successful verification logs the user in automatically

### Dashboard

* Protected route
* Displays:

  ```
  Welcome, [User Name]
  ```

---

## 💾 Token & Session Management

* Token is stored using a centralized storage utility
* Automatically attached to API requests via Axios interceptors
* Clean logout clears all authentication data
* Storage strategy is modular and can be switched easily if needed

---

## 🎨 UI & Responsiveness

* Pixel-perfect implementation based on the provided UI mockup
* Fully responsive across mobile and desktop devices
* Consistent spacing, typography, and layout system
* Optimized image handling using `next/image`
* Core Web Vitals considerations (LCP, layout stability)

---

## ⚡ Performance & Best Practices

* Optimized Largest Contentful Paint (LCP) for above-the-fold images
* Lazy loading for non-critical images
* Clean component re-rendering logic
* Structured error handling and user-friendly messages

---

## 📦 Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ibrahi4/Tinytales.git
cd tinytales
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

Open:
`http://localhost:3000`

---

## 🔌 API Integration

* Integrated using the provided Postman Collection
* Centralized Axios client with request/response interceptors
* Clean separation between API logic and UI
* Graceful handling of API and network errors

---

## 🧠 Notes for Reviewers

* Authentication pages focus on **API correctness and flow**, as required.
* UI mockup page is implemented with strict attention to design accuracy.
* Code prioritizes clarity, maintainability, and production-ready patterns.

---

## 👤 Author

**Ibrahim Abdulnaser**
Frontend Engineer
Specialized in React & Next.js
Focused on building scalable, maintainable, and high-performance frontend applications.



