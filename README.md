# Project Tracker

A full-stack project management application built using Spring Boot, React, and PostgreSQL. The application helps teams manage projects, milestones, and tasks from a centralized platform with role-based access control.

## Tech Stack

**Backend**
- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- PostgreSQL

**Frontend**
- React
- JavaScript
- HTML and CSS

**Tools**
- Maven
- Git

## Features

- User authentication and role-based access control.
- Project creation and management.
- Milestone management for organizing project deliverables.
- Task creation, assignment, and status tracking.
- User and organizational unit management.
- REST APIs for communication between the frontend and backend.
- PostgreSQL for persistent data storage.

## User Roles

The application supports the following roles:

| Role | Description |
|---|---|
| ADMIN | Manages application resources and administrative operations. |
| MANAGER | Oversees projects and related activities within the permitted scope. |
| PROJECT_MANAGER | Manages assigned projects, milestones, and tasks. |
| EMPLOYEE | Accesses assigned tasks and updates their progress. |

Access to resources depends on the authorization rules configured in the application.

## Project Structure

### Backend

The backend follows a layered architecture to separate API handling, business logic, database operations, and security.

```text
project-tracker-backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/project_tracker/
│   │   │       ├── config/
│   │   │       ├── controller/
│   │   │       ├── dto/
│   │   │       ├── entity/
│   │   │       ├── exception/
│   │   │       ├── repository/
│   │   │       ├── security/
│   │   │       ├── service/
│   │   │       └── ProjectTrackerApplication.java
│   │   └── resources/
│   └── test/
├── pom.xml
└── README.md
```

### Frontend

```text
project-tracker-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   ├── context/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

*The directory structures are illustrative and should be adjusted to match the actual repositories.*

## Architecture

The application uses a client-server architecture.

1. The React frontend provides the user interface.
2. The frontend communicates with the Spring Boot backend through REST APIs.
3. Spring Security handles authentication and authorization.
4. The service layer contains the application business logic.
5. Spring Data JPA manages database operations.
6. PostgreSQL stores application data.

## Prerequisites

Make sure the following are installed:

- Java version compatible with the project.
- Maven.
- Node.js and npm.
- PostgreSQL.
- Git.

## Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

If the frontend and backend are maintained in separate repositories, clone them individually.

### 2. Create the Database

Create a PostgreSQL database:

```sql
CREATE DATABASE project_tracker;
```

### 3. Configure the Backend

Navigate to the backend directory:

```bash
cd project-tracker-backend
```

Configure the database connection in `src/main/resources/application.properties`.

Example:

```properties
spring.datasource.url=${DB_URL:jdbc:postgresql://localhost:5432/project_tracker}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
```

Provide the database credentials through environment variables before starting the application.

### 4. Start the Backend

Using the Maven wrapper:

```bash
./mvnw spring-boot:run
```

On Windows:

```bash
mvnw.cmd spring-boot:run
```

The backend starts on the configured port, typically `8080`.

### 5. Start the Frontend

Open another terminal and navigate to the frontend directory:

```bash
cd project-tracker-frontend
```

Install dependencies:

```bash
npm install
```

If the application uses Vite, configure the backend URL in a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:8080
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal to access the application.

## Security

The application uses Spring Security to protect backend resources.

- Access to endpoints is controlled by user roles and authorization rules.
- Passwords should be stored using secure password hashing.
- Database credentials and other sensitive configuration should not be committed to the repository.
- Authorization checks should be enforced on the backend.

## Testing

Run the backend tests using Maven:

```bash
./mvnw test
```

On Windows:

```bash
mvnw.cmd test
```

Frontend tests can be run using the test commands configured in `package.json`, if available.

## Future Improvements

- Project progress dashboards.
- Task priority and deadline tracking.
- Notifications for task assignments and deadlines.
- Activity logs for tracking changes.
- Improved filtering and search.
- Automated testing and CI/CD integration.

## Author

Austin J

Associate Software Engineer

GitHub: https://github.com/AustinJNilavoor
