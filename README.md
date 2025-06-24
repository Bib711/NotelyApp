# 📝 NotelyApp

<div align="center">
<div align="center">
  <svg xmlns="http://www.w3.org/2000/svg" id="book" viewBox="0 0 28 28" width="200" height="200">
    <linearGradient id="rect3500_10_" x1="883.694" x2="876.443" y1="-454.005" y2="-446.297" gradientTransform="matrix(3.0757 0 0 -3.0757 -2693.22 -1370.944)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#6366f1"></stop>
      <stop offset="1" stop-color="#8b5cf6"></stop>
    </linearGradient>
    <path id="rect3500_11_" fill="url(#rect3500_10_)" d="M5.917 0h16.165A5.917 5.917 0 0 1 28 5.917v16.165A5.917 5.917 0 0 1 22.083 28H5.917A5.917 5.917 0 0 1 0 22.083V5.917A5.917 5.917 0 0 1 5.917 0z"></path>
    <path fill="#fff" d="M19.5 19h-11V7h11v12zm-10-1h9V8h-9v10z"></path>
    <path fill="#fff" d="M19.5 21h-11v-3h11v1h-10v1h10zM17.5 12h-7V9h7v3zm-6-1h5v-1h-5v1z"></path>
  </svg>
  
  <h3>A powerful, modern note-taking application built with React, Express, and MongoDB</h3>
  
  <div>
    <img src="https://img.shields.io/badge/MongoDB-8.15.2-green" alt="MongoDB">
    <img src="https://img.shields.io/badge/React-18.2.0-blue" alt="React">
    <img src="https://img.shields.io/badge/Express-5.1.0-lightgrey" alt="Express">
    <img src="https://img.shields.io/badge/Vite-4.4.5-purple" alt="Vite">
    <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen" alt="PRs Welcome">
  </div>
</div>

---

## ✨ Features

• 📝 **Modern Note Editor**: Rich text editing capabilities  
• 🗂️ **Organize by Categories**: Create categories with custom organization  
• 🔍 **Powerful Search**: Find notes by title, content, or tags  
• 📱 **Responsive Design**: Works seamlessly on all devices  
• ⚡ **Fast Performance**: Built with modern technologies for optimal speed  
• 🔄 **Real-time Sync**: Instant synchronization with database  
• 💾 **Auto-save**: Never lose your work with automatic saving  

## 🛠️ Tech Stack

### Frontend
- **React** `18.2.0` - User interface library
- **Vite** `4.4.5` - Build tool and development server
- **CSS3** - Modern styling with responsive design

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** `5.1.0` - Web application framework
- **Mongoose** `8.15.2` - MongoDB object modeling
- **CORS** `2.8.5` - Cross-origin resource sharing
- **Body-Parser** `2.2.0` - Request body parsing middleware

### Database
- **MongoDB** `8.15.2` - NoSQL database for storing notes

## 🚀 Installation

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas account)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bib711/NotelyApp.git
   cd NotelyApp
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   ```

5. **Start the development servers**
   
   **Backend (Terminal 1):**
   ```bash
   cd backend
   npm start
   ```
   
   **Frontend (Terminal 2):**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

## 📚 API Documentation

### Notes Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes` | Retrieve all notes |
| `POST` | `/api/notes` | Create a new note |
| `GET` | `/api/notes/:id` | Get a specific note by ID |
| `PUT` | `/api/notes/:id` | Update an existing note |
| `DELETE` | `/api/notes/:id` | Delete a note |

## 🚢 Deployment

### Frontend Deployment
The frontend can be deployed to platforms like:
- **Vercel** - Recommended for Vite/React apps
- **Netlify** - Great for static sites
- **GitHub Pages** - Free hosting option

### Backend Deployment
The backend can be deployed to:
- **Railway** - Easy Node.js deployment
- **Render** - Free tier available
- **Heroku** - Popular cloud platform

## 🗺️ Roadmap

- [ ] 🔐 User authentication and authorization
- [ ] 🏷️ Advanced tagging system
- [ ] 📊 Note analytics and insights
- [ ] 🌙 Dark mode support
- [ ] 📤 Export notes to PDF/Markdown
- [ ] 🔗 Note sharing capabilities

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Bib711**
- GitHub: [@Bib711](https://github.com/Bib711)

---

<div align="center">
  <p>⭐ If you found this project helpful, please give it a star on GitHub!</p>
  <p>Made with ❤️ by BIBIN BENNY</p>
</div>