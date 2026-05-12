# Maritime Management System - Backend

This is the Express & Prisma backend for the Maritime Management System. It tracks ship maintenance tasks, safety drills, and overall compliance to ensure vessels meet maritime regulations.

## 🌊 Business Flow

The core loop of the application revolves around **Admins**, **Crew**, **Ships**, and **Compliance**:

1. **Ship & Crew Management**: Admins add vessels (Ships) via IMO numbers and register Crew members.
2. **Task Assignment**: Admins create maintenance/inspection Tasks for specific ships and assign them to specific Crew members.
3. **Drill Scheduling**: Admins schedule safety Drills (e.g., Fire, Man Overboard). 
4. **Action & Execution**: Crew members log into their portals, view assigned tasks, update their statuses, and log their attendance/completion for upcoming drills.
5. **Compliance Tracking**: The system calculates a live compliance score per ship based on how many tasks are completed on time and how many drills were attended by the crew.

## 🏗 Architecture Decisions

* **Why PostgreSQL?**
  Maritime operations rely heavily on relational data (A Crew member works on a Ship, attends a Drill, and completes a Task). Postgres gives us strict ACID compliance, data integrity constraints, and handles the analytical queries required for the Compliance engine easily.
* **Why a Minimal Schema?**
  Enterprise maritime software often suffers from extreme database bloat. We intentionally kept the schema minimal (User, Ship, Task, Drill, plus join tables for activities) to prevent technical debt. It solves the core bottleneck—Compliance & Tracking—without overcomplicating the domain.
* **Why Prisma?**
  Prisma provides a heavily typed database client. Since we calculate compliance dynamically in the backend (see `compliance.service.js`), having type-safe relational includes prevents runtime bugs.

## ⚙️ Setup & Installation

**1. Install Dependencies**
```bash
npm install
```

**2. Environment Variables**
Create a `.env` file in the root directory:
```env
PORT=3000
DATABASE_URL="postgresql://user:password@localhost:5432/maritime?schema=public"
JWT_SECRET="your_super_secret_key"
```

**3. Database Setup**
Push the schema to your Postgres database:
```bash
npx prisma db push
```

**4. Seed the Database**
Populate the database with sample ships and drills using the provided scripts:
```bash
node seedShips.js
node seedDrills.js
```

**5. Start the Server**
```bash
npm start
```
*(Note: If you use nodemon for development, run `npm run dev` or `npx nodemon server.js`)*

---

## 📡 API Routes

All routes are prefixed with `/api`.

### Auth & Users (`/auth`, `/users`)
| Method | Route | Access | Description |
|---|---|---|---|
| `POST` | `/auth/register` | Public | Register a new user (`admin` or `crew`). |
| `POST` | `/auth/login` | Public | Authenticate and receive a JWT. |
| `GET` | `/auth/me` | Logged In | Get current logged-in user profile. |
| `GET` | `/users/crew` | Admin | Get a list of all crew members. |

### Ships (`/ships`)
| Method | Route | Access | Description |
|---|---|---|---|
| `POST` | `/ships` | Admin | Add a new ship (requires `name`, `imoNumber`). |
| `GET` | `/ships` | Admin | Get a list of all ships. |

### Tasks (`/tasks`)
| Method | Route | Access | Description |
|---|---|---|---|
| `POST` | `/tasks` | Admin | Create a new maintenance/inspection task. |
| `POST` | `/tasks/:id/assign` | Admin | Assign a task to a specific crew member. |
| `PATCH` | `/tasks/:id/status` | Admin, Crew | Update a task's status (e.g., `completed`). |
| `GET` | `/tasks/my-tasks` | Crew | View tasks assigned to the current crew member. |
| `GET` | `/tasks` | Admin | Get all tasks across all ships. |

### Drills (`/drills`)
| Method | Route | Access | Description |
|---|---|---|---|
| `POST` | `/drills` | Admin | Schedule a new safety drill for a ship. |
| `GET` | `/drills` | Admin | Get a master list of all drills. |
| `GET` | `/drills/upcoming` | Crew | View upcoming drills scheduled for the future. |
| `PATCH` | `/drills/:id/attend` | Crew | Mark the current crew member as attending a drill. |
| `PATCH` | `/drills/:id/complete` | Crew | Submit completion for an attended drill. |

### Compliance (`/compliance`)
| Method | Route | Access | Description |
|---|---|---|---|
| `GET` | `/compliance/:shipId` | Admin | Get live compliance metrics (Task/Drill percentages) for a specific ship. |