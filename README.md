# MindSlate – Post Listing Dashboard

A modern React-based dashboard that fetches posts from a public API and provides search, filter, pagination, theme toggle, and refresh functionality using clean and scalable architecture.

---

## 🔗 Live Demo
https://posts-assignment-swart.vercel.app/

---

## 🎯 Assignment Goal

Build a frontend application that:
- Fetches data from a public API
- Displays data in a structured UI
- Supports search, filtering, and pagination
- Handles loading and error states
- Follows good performance and code organization practices

---

## 🛠 Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)
- JSONPlaceholder API
- Git & GitHub

---

## 📁 Folder Structure
src/
├── components/
│ ├── PostCard.jsx
│ ├── SearchBar.jsx
│ ├── UserFilter.jsx
│ ├── Pagination.jsx
│ └── ThemeToggle.jsx
│
├── hooks/
│ └── useDebounce.js
│
├── App.jsx
├── main.jsx
└── index.css

---

## ✨ Features

### 1. Data Fetching
- Fetches posts from `https://jsonplaceholder.typicode.com/posts`
- Handles loading and error states properly

---

### 2. Search (Debounced)
- Search posts by title
- Uses a custom debounce hook to improve performance

---

### 3. Author Filter
- Filter posts by author (Author 1–10)
- Works together with search functionality

---

### 4. Pagination
- Displays 6 posts per page
- Pagination is applied after filtering
- Logic extracted into reusable utility function

---

### 5. Manual Refresh
- Allows re-fetching posts manually
- Refresh action is throttled to prevent excessive API calls
- UI remains stable during refresh

---

### 6. Light / Dark Theme
- Global light and dark mode toggle
- Implemented using Tailwind CSS dark mode
- Theme preference persisted in localStorage
- Entire UI adapts (background, text, cards, borders)

---

### 7. Clean Architecture
- `App.jsx` focuses only on state and rendering

---


## 🚀 Run Locally

```bash
git clone https://github.com/narendranaragani/posts-assignment
cd mindslate-assignment
npm install
npm run dev
