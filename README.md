# 📝 NotelyApp

A full-stack MERN note-taking application that allows users to add, edit, delete, and list notes. Built with simplicity and productivity in mind, Notely provides a clean and minimal interface for quick and effective note management.

![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue)
![React](https://img.shields.io/badge/React-18.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey)

## ✨ Features

- ✍️ **Add new notes** with title and content
- 🗃️ **View all saved notes** in an organized layout
- 🖊️ **Edit existing notes** with real-time updates
- 🗑️ **Delete notes** with confirmation
- 📱 **Responsive design** for all devices
- ⚡ **Fast and lightweight** performance
- 🔄 **Real-time synchronization** with database

## 🛠️ Tech Stack

### Frontend
- **React** - User interface library
- **Vite** - Build tool and development server
- **CSS3** - Modern styling with responsive design

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Mongoose** - MongoDB object modeling

### Database
- **MongoDB Atlas** - Cloud database service

## 🚀 Getting Started

### Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or local MongoDB installation)

### Installation

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
   # or for development with nodemon
   npm run dev
   ```
   
   **Frontend (Terminal 2):**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

## 🔧 API Endpoints

### Notes Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| POST | `/api/notes` | Create a new note |
| GET | `/api/notes/:id` | Get a specific note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Bib711**
- GitHub: [@Bib711](https://github.com/Bib711)

⭐ If you found this project helpful, please give it a star on GitHub!