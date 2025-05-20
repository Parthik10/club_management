# Club Management System

A comprehensive web application for managing university clubs, events, announcements, and registrations.

## Features

- **Club Management**: Create, edit, and manage university clubs
- **Event Management**: Schedule and track club events
- **Announcements**: Post and manage club announcements
- **Payment Tracking**: Monitor club-related payments
- **Event Registration**: Handle event registrations
- **Admin Dashboard**: Comprehensive admin interface for managing all aspects
- **User Authentication**: Secure login system for admins and users

## Tech Stack

- **Frontend**: React.js with Material-UI
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/club-management.git
cd club-management
```

2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Create a `.env` file in the server directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Create a `.env` file in the client directory:
```env
VITE_API_URL=http://localhost:5000/api
```

## Running the Application

1. Start the backend server:
```bash
cd server
npm start
```

2. Start the frontend development server:
```bash
cd client
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
club-management/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/      # Context providers
│   │   ├── utils/        # Utility functions
│   │   └── App.jsx       # Main application component
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── controllers/      # Route controllers
    ├── models/          # Database models
    ├── routes/          # API routes
    └── server.js        # Server entry point
```

## API Endpoints

- `/api/auth` - Authentication routes
- `/api/clubs` - Club management
- `/api/events` - Event management
- `/api/announcements` - Announcement management
- `/api/payments` - Payment tracking
- `/api/event-registrations` - Event registration management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Developers

- **Parthik Mangal** - Full Stack Developer
- **Sweta Chand** - Full Stack Developer

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Material-UI for the component library
- React.js community for the amazing framework
- MongoDB for the database solution 