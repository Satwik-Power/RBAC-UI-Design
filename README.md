# RBAC-UI-Design
I used React as a front-end framework for this project. It is a user interface of Role Based Access Control system.
This project is a Role-Based Access Control (RBAC) system implemented as a React-based user interface. It allows administrators to manage users, roles, and statuses efficiently. The design includes input validation, responsive UI, and CRUD operations to ensure smooth user management.

#Features
#User Management:
- Add, edit, and delete users.
- Assign roles (e.g., Admin, User, Moderator).
- Toggle user status (active/inactive).

# Input Validation:
- Email Validation
- Name Validation
  
# Responsive Design
- Fully responsive UI
- Integrated with Material-UI for a sleek and modern interface.

# CRUD Operations:
- Manage user data dynamically with React's state management.

# Dark Mode Support:
Uses Material-UI’s theme for seamless light/dark mode transitions.


# Technologies Used
Frontend Framework: React.js
Version Control: Git and GitHub

# Project Overview
This project implements an RBAC system designed for:
- Managing users in a secure and organized manner.
- Ensuring proper role assignments with validation.
- Enhancing admin productivity through an intuitive interface.

  
# Core Functionalities
Add User ---- Enter user details, validate input, and add a new user to the list.
Edit User---- Modify existing user details while maintaining validations.
Delete User----Remove a user from the list permanently.
Role Management----Assign roles like Admin, User, or Moderator to each user.


# Setup Instructions
# Prerequisites
Node.js installed on your machine.
A terminal or code editor like VS Code.
Steps
1) Clone the repository:
- git clone https://github.com/Satwik-Power/RBAC-UI-Design.git
- cd RBAC-UI-Design

2) Install dependencies
- npm install
  
3) Start the development server
- npm start
  
4) Access the application: Open a web browser and go to http://localhost:3000




# Folder Structure
VRV Security Assignent
|
rbac-ui
│
├── src/
│   ├── pages/
        └── Profile.js
        └── RoleManagement.js  
        └── UserManagement.js
│   ├── App.css                 
    ├── App.js                 
│   ├── index.css                
│   └── index.js              

├──package-lock.json
├── package.json               
└── README.md              



# Usage

# Adding a User
1) Click the "Add New User" button.
2) Fill in the form fields: Name, Email, and Role.
3) Ensure the email is valid or not.
4) Submit the form to add the user.

# Editing a User
1) Click the "Edit" button on any user card.
2) Modify the user details and save changes.

# Deleting a User
1) Click the "Delete" button on the desired user card.
2) Confirm the deletion to remove the user permanently.
