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

```text
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
```

# WorkFlow:

```text
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

- It Requests form has been built
  -- Reusuable Select dropdown element, TextArea, File input accepting only .pdf or .doc/.docx files
  -- Implemented accessibility features: Proper labeling, keyboard navigation, and live region updates
  -- Provided user feedback on submission status
  -- confirmation pop-up of succesful sumbission Provided user feedback on submission status

- To-Do List Page has been built
  -- Reusuable Add To-do form has been built [title(required), status (optional)]
  -- Responsive To-Do table is built (Title, Status, Edit, Delete)
  -- can Edit a To-Do
  -- can Delete a To-do
  -- pop-ups with information gives best User experience

- Implemented a feature to Conditionally show extra staff details (Last Login, Storage, Device) for Admins only.
  -- Refactored StaffTableRow for clean, efficient conditional rendering

- Redux store has been set-up
  -- Configured a centralized Redux store and integrated it with the application
  -- Created a userSlice to manage user-related state
  -- created mocks folder for the mock data
  -- Added a staff.json file containing sample staff records
  -- useStaffDeatils hook is built to fetch data from staff.json (simulated async with setTimeout)
  -- staffDetails data has been fetched and integrated with the table UI
  -- Implemented a Shimmer UI component to elegantly indicate loading states
  -- Gracefully handled both loading and error states, providing clear feedback to users during the fetch process

- To-do slice created to manage to-do tasks
  -- Added a toDo.json file containing sample to-do records
  -- useStaffDeatils hook is built to fetch data from toDo.json (simulated async with setTimeout)
  -- Integrated the to-do list with a table-based UI and implemented error handling to provide user-friendly feedback.
  -- add to-Do form simulated with async, await and setTimeout during submission.
  -- add a to-do form has handled with loading state, form validation and successful addition of new to-do
  -- implemented features (mark completed or not, edit To Do, Delete to do)

- tickets slice created to manage tickets
  -- Added a tickets.json file conatining tickets records
  -- useTicketDetails hook is built to fetch data from tickets.json (simulated async with setTimeout)
  -- Integrated the tickets list with a table-based UI and implemented error handling to provide user-friendly feedback.
  -- IT requests form simulated with async, await and setTimeout during submission.
  -- IT request form is validated and handled loading state and errors



```
