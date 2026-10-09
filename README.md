# Helpdesk-app
# Helpdesk Ticket Management Platform

A full-stack web application designed to streamline IT support, issue tracking, and ticket management. This platform was developed as a graduation project (Projet de Fin d'Études) to efficiently handle user requests through role-based access control, comprehensive administrative dashboards, and automated notifications.

## Features

* **Role-Based Access Control (RBAC):** Distinct interfaces and permissions tailored for standard Users, Support Agents, and Administrators.
* **Complete Ticket Lifecycle:** Users can create, update, and track support tickets while agents manage assignments, statuses, and resolutions.
* **Administrative Dashboard:** A centralized, analytics-driven view for monitoring ticket volume, operational metrics, and overall system health.
* **Notifications System:** Automated alerts ensuring users and agents stay informed about ticket updates and status changes.
* **Containerized Infrastructure:** Fully configured for modern deployment environments using Docker and Kubernetes.

## 🛠️ Tech Stack

**Frontend**
* React.js
* TypeScript
* Vite

**Backend**
* Node.js
* Express.js
* MongoDB (Mongoose ORM)

**DevOps & Deployment**
* Docker & Docker Compose
* Kubernetes (K8s)

## 📁 Project Structure

```text
├── backend/                # Node.js/Express API server & MongoDB models
├── frontend/               # React/Vite client application
├── k8s/                    # Kubernetes deployment and service configurations
├── compose.yaml            # Docker Compose configuration for local orchestration
└── README.md
🚦 Getting Started
Prerequisites
Ensure you have the following installed on your local machine:

Node.js (v18 or higher recommended)

MongoDB (Local instance or MongoDB Atlas URI)

Docker (Optional, for containerized local execution)

Local Development Setup
1. Clone the repository:

Bash
git clone [https://github.com/mohammedbenbrahim/Helpdesk-app.git](https://github.com/mohammedbenbrahim/Helpdesk-app.git)
cd Helpdesk-app
2. Setup the Backend:

Bash
cd backend
npm install
Create a .env file in the backend directory and add your environment variables (e.g., PORT=5000, MONGO_URI=your_connection_string).

Bash
npm run dev # or node server.js
3. Setup the Frontend:
Open a new terminal window/tab:

Bash
cd frontend
npm install
npm run dev
4. Access the application:
Open your browser and navigate to the local host address provided by Vite (typically http://localhost:5173).

Docker Deployment
To run the entire stack using Docker Compose:

Bash
docker-compose up --build
