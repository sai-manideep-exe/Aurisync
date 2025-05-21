# Aurisync


Aurisync is a modern full-stack MERN chat and video application that connects language learners and friends worldwide. It features real-time chat, video calls, friend requests, notifications, and a beautiful, themeable UI.

---

## 🚀 Features

- **User Authentication:** Secure signup, login, and session management
- **Real-Time Chat & Video:** Powered by [Stream](https://getstream.io/) APIs for instant messaging and video calls
- **Friend Requests & Notifications:** Send, accept, and manage friend requests with instant notifications
- **Profile Management:** Edit your profile and language preferences
- **Responsive UI:** Built with React, DaisyUI, and Tailwind CSS for 32+ beautiful themes
- **Modern Tech Stack:** MERN (MongoDB, Express, React, Node.js), Vite, TanStack Query, Zustand
- **Production Ready:** Deployed on [Render](https://aurisync.onrender.com) with CORS and secure API handling

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, DaisyUI, Tailwind CSS, TanStack Query, Zustand, Stream Chat & Video SDKs
- **Backend:** Node.js, Express, MongoDB, JWT Auth, CORS
- **APIs:** Stream Chat, Stream Video
- **Deployment:** Render

---

## 🌐 Live Demo

👉 [aurisync.onrender.com](https://aurisync.onrender.com)

---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js & npm
- MongoDB instance (local or cloud)
- Stream API keys (for chat/video)

### Installation

1. **Clone the repo:**
   ```sh
   git clone https://github.com/yourusername/aurisync.git
   cd aurisync
   ```

2. **Backend Setup:**
```sh
  cd backend
  npm install
  # Create a .env file with your MongoDB URI, JWT secret, etc.
  npm start
```
3. **Frontend Setup:**
 ```sh
 cd ../frontend
npm install
# Create a .env file with your VITE_STREAM_API_KEY
npm run dev
```
4. **Visit:**
```
Frontend: http://localhost:5173
Backend API: http://localhost:5001
```
