# Staff Connect

A modern internal tool built with **React + Vite** for managing staff information, IT requests, tickets, and tasks. The project uses **Tailwind CSS** for styling, **React Router** for navigation, and **Vitest + Testing Library** for unit testing.

---

## 🔧 Tech Stack

- **Frontend:** React + TypeScript (via Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **State management:** Redux toolkit
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
│ └── mocks/ # Mock data
├── src/
│ ├── assets/ # Static assets like images, icons, logos, etc.
│ ├── components/ # Reusable UI components
│ ├── hooks/ # Custom React hooks
│ ├── pages/ # Top-level pages (Dashboard, Staff Directory, etc.)
│ ├── store/ # Global state management logic (Redux toolkit)
│ ├── tests/ # Unit tests
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

- userSlice created to  handle the userSate (either admin or user)
  -- implemented a feature in staffDirectory, admin can see extra information (last login, Drive
storage, device status) for each user.
  -- implemented a feature in header to toggle between user1, user 2 and Admin (user 3)
  -- implemented a feature to see the number of Open tickets and Pending tasks, updates dynamically (unique data for every user).
  -- showing tickets table & to-do list table in the dashboard
  -- dynamically showing the user name in the dashboard banner

- Tickets and To-Dos are personalised acoording to the user.
  -- every user can only see their tickets and toDos.
  -- every user get the data of open tickets, pending tasks, recent updates from their own data.
  -- added brr media fevicon
  -- more mock data is updated to see the data
```

# Features:

```text
--Added a feature to switch between different users (User1, User2, Admin) to test roles
--Simulated async data fetching from JSON using setTimeout
--Simulated adding/editing todos and tickets asynchronously
--developed a feature to mark it as completed or not, edit and delete ToDos
--Handled loading states during data fetch and form submissions
--Added form validation for better input handling
--Displayed error messages and feedback in the UI for better user experience
--Used React Router for navigation between pages
--Created a custom error page for unmatched routes
--Used Redux Toolkit for centralized state management and clean project structure
--Used latest versions of React, Redux Toolkit, Tailwind, etc., for better performance and future scaling
--Dynamically displayed open tickets, pending tasks, and updates
--Stored data in local storage to keep updates even after refresh (no backend yet)
--Designed a clean and brand-aligned UI
--Made the UI responsive for mobile, tablet, and desktop screens
--Added accessibility features for better usability by everyone
--Used TypeScript for better type safety and scalability
--Structured the project for easy understanding and collaboration
--Used reusable components and higher-order components
--Implemented unit testing to ensure code quality

```

# Assumptions:

```text
- updates are considered as the no.of tickets from today.
```
