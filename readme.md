# Job Portal Project

## Overview

This project is a full-stack Job Portal application developed using React for the frontend and Node.js/Express for the backend. The portal allows users to interact with job listings and company profiles, with a focus on frontend-backend communication, session management, and a responsive user interface.

## Project Structure

### Backend (`server.js`)

- **Port**: 3001
- The backend is built using Node.js and Express, with routes for user and company functionalities.
- API routes are configured to support CRUD operations, user authentication, and company data fetching.

### Frontend (`client/`)

- **Port**: 4000
- The frontend is built using React and uses `axios` for API communication with the backend.
- React Router is used for navigation between different pages.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Navigate to the `client` directory and install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

### Running the Project

#### Backend (Server)

From the root directory, run:

```bash
npx nodemon server.js
```

- **Server URL**: [http://localhost:3001](http://localhost:3001)

#### Frontend (Client)

Navigate to the `client` directory and run:

```bash
npm start
```

- **Client URL**: [http://localhost:4000](http://localhost:4000)

### Project Structure Overview (slightly differs from exact structure)

```
project-root/
  ├── api/
  │   ├── controllers/
  │   │   ├── userController.js
  │   │   └── companyController.js (if applicable)
  │   ├── models/
  │   │   └── userModel.js
  │   ├── routes/
  │   │   ├── userRoutes.js
  │   │   └── companyRoutes.js (if applicable)
  │   ├── middlewares/
  │   │   └── multerMiddleware.js
  ├── client/
  │   ├── public/
  │   └── src/
  │       ├── App.js
  │       ├── index.js
  │       ├── components/
  │       │   ├── Home/
  │       │   │   └── Home.js
  │       │   ├── About/
  │       │   │   └── About.js
  │       │   ├── JobListings/
  │       │   │   └── JobListings.js
  │       │   ├── Contact/
  │       │   │   └── Contact.js
  │       │   ├── CompanyShowcase/
  │       │   │   └── CompanyShowcase.js
  │       │   └── Login/
  │       │       └── Login.js
  │       ├── services/
  │       │   └── api.js
  │       ├── utils/
  │       └── styles/
  │           └── global.css
  ├── app.js
  ├── server.js
  ├── package.json
  ├── .gitignore
  └── README.md
```

### Backend API Endpoints

#### User Routes

- `POST /user/create`: Create a new user
- `POST /user/login`: User login
- `PUT /user/edit`: Edit user details
- `DELETE /user/delete`: Delete a user
- `GET /user/getAll`: Retrieve all users
- `POST /user/uploadImage`: Upload user images (with multer middleware)

#### Company Routes

- `GET /companies`: Fetch all company data (example endpoint)

### Frontend Configuration

#### Axios Configuration

The `axios` instance is configured in `src/services/api.js`:

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Backend URL
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
```

### CORS Configuration

The backend is configured to allow requests from the frontend running at `http://localhost:4000`:

```javascript
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:4000' }));
```

### Troubleshooting

- **CORS Issues**: Ensure the backend is configured to allow requests from the frontend origin.
- **Port Conflicts**: Ensure the backend and frontend run on different ports as specified.

### Notes

- The project uses `npx nodemon` to automatically restart the backend server on changes.
- React Router is used in the frontend for navigation.

## License

This project is licensed under the [MIT License](LICENSE).
