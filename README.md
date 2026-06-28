# OutPro India - Sports & Adventure Company Portfolio Website

## Project Title

**OutPro India - Sports & Adventure Company Portfolio Website**

---

## Project Description

OutPro India is a modern full-stack portfolio website developed for a sports and adventure event management company. The platform showcases the company's services, completed projects, achievements, client testimonials, and contact information through a responsive and visually appealing interface.

The project provides a seamless user experience while enabling visitors to explore the company's offerings and submit inquiries through a secure contact form. The backend manages API requests, stores contact messages in MongoDB Atlas, and handles email notifications.

---

## Features

* Modern and responsive user interface
* Hero section with company introduction
* About Us page
* Services showcase
* Portfolio with project categories
* Client testimonials
* Contact form with backend integration
* MongoDB Atlas database integration
* Email notification support
* Social media integration
* Mobile-friendly design
* Fast loading using Vite
* REST API architecture
* Secure environment variable configuration

---

## Tech Stack

### Frontend

* React.js
* Vite
* JavaScript (ES6+)
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Nodemailer
* dotenv
* CORS

### Deployment

* Frontend: Render
* Backend: Render
* Database: MongoDB Atlas

---

## Folder Structure

```
OutPro-India/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/
│   │   ├── context/
│   │   ├── lib/
│   │   └── assets/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Ranrajen/company-portfolio
```

### 2. Navigate to the Project Folder

```bash
cd outpro-india
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 4. Install Backend Dependencies

```bash
cd ../backend
npm install
```

### 5. Configure Environment Variables

Create a `.env` file inside the backend directory.

### 6. Start Backend Server

```bash
npm run dev
```

### 7. Start Frontend

```bash
cd ../frontend
npm run dev
```

The application will run locally on:

* Frontend: `http://localhost:5173`
* Backend: `http://localhost:5000`

---

## Environment Variables

Create a `.env` file in the backend folder with the following variables:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_email_app_password

CLIENT_URL=http://localhost:5173
```

For production deployment, update:

```env
CLIENT_URL=https://your-frontend-url.onrender.com
```

---

## Deployment Links

### Frontend

```
https://outproindiaofficial.vercel.app
```

### Backend API

```
https://company-portfolio-w1v4.onrender.com
```

### GitHub Repository
https://github.com/Ranrajen/company-portfolio
```

---

## Future Enhancements

* Admin Dashboard
* Authentication System
* Content Management Panel
* Blog Section
* Event Booking System
* Online Payment Integration
* Analytics Dashboard
* Multi-language Support

---

**Project Developed By**

**Rajen Rangari**

B.Tech Computer Science & Engineering

---

## License

This project is developed for educational and portfolio purposes as part of the Unlox Major Project (April 2026 Batch).

---

## Acknowledgements

* React.js
* Node.js
* Express.js
* MongoDB Atlas
* Tailwind CSS
* Render
* Vite
* Unlox Major Project Program
