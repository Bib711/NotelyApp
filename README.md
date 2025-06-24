# 📝 NotelyApp

<div align="center">
  <img src="https://img.icons8.com/?size=100&id=OENhm99NTnV6&format=png&color=6366f1" alt="NotelyApp Logo" width="100" height="120"/>
  
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

<div align="center">

[Features](#features) • [Tech Stack](#tech-stack) • [Installation](#installation) • [Deployment](#deployment) • [API Documentation](#api-documentation) • [Roadmap](#roadmap) • [License](#license)

</div>

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