# Staff Connect

A modern internal tool built with **React + Vite** for managing staff information, IT requests, tickets, and tasks. The project uses **Tailwind CSS** for styling, **React Router** for navigation, and **Vitest + Testing Library** for unit testing.

---

## 🔧 Tech Stack

- **Frontend:** React + TypeScript (via Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Testing:** Vitest, React Testing Library, jsdom

---

## 🚀 Getting Started

### 1. Clone the repository

bash:
git clone https://github.com/maheshmolkapuram9/Staff-connect.git
cd staff-connect

### 2. Install dependencies

npm install

### 3. Run the development server

npm run dev

### 4. Run tests

npm run test

---

# Folder Structure:

staff-connect/
├── public/
├── src/
│ ├── assets/ # Static assets like images, icons, logos, etc.
│ ├── components/ # Reusable UI components
│ ├── hooks/ # Custom React hooks
│ ├── mocks/ # Mock data and API handlers for testing or development
│ ├── pages/ # Top-level pages (Dashboard, Staff Directory, etc.)
│ ├── store/ # Global state management logic (e.g., Zustand/Redux)
│ ├── tests/ # Unit and integration tests
│ ├── utils/ # Utility/helper functions
│ ├── App.tsx # Main component handling routes
│ ├── main.tsx # Entry point for the React application
│ └── index.css # Global styles and Tailwind base config
├── vite.config.ts # Vite configuration
└── README.md

# WorkFlow:

- Set up React app using Vite
- Configured Vitest with React Testing Library and jsdom
- Integrated Tailwind CSS for utility-first styling
- set up react router and defined routes set up for different pages
  -- (Dashboard, staff directory, It Requests, Tickets, To Do List, Not Found)

- header has been built
  -- Logo and App name
  -- navigation Menu (Dashboard, staff directory, It Requests, Tickets, To Do List)
  -- User Profile Menu, On hover, a dropdown appears with a user name Sign Out button.

- Dashboard has been built
  -- Dashboard banner (background image & welcome text with overview description)
  -- Quick summary cards (Tickets, Pending Tasks, Updates.)
  -- shortcult buttons to navigate to (Submit IT Request, Add new task, View Staff Directory)
  -- Entire Dashboard including header is responsive for all screens (Mobile, Tablet, PC)

- Responsive and Reusuable Table is built with hard coded data (Staff Directory)
  -- Reusuable table
  -- Reusuable table Row
  -- Reusable table Cell
