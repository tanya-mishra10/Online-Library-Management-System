# 📚 Library Management System

A full-stack web application to manage library operations like books, students, and book issuing system.

##  Tech Stack
- Backend: Spring Boot
- Frontend: Angular
- Database: MySQL
- Security: JWT Authentication
- API Testing: Postman

## ✨ Features
-  Admin Login with JWT Token
-  Secure API access with Authorization header
-  Book Management (Add, Delete, View)
-  Check available books
-  Student Management (Add, Delete, View)
-  Issue & Return Books 
-  Dashboard with statistics
-  Pagination for Books,Students & Issue books
-  Real-time updates without page refresh
-  Admin can change password
-  Profile Management
## Dashboard
- Total number of books
- Total number of students
- Total number of issue books
- Available books count

## 🛠️ How to Run

### Backend
1. Open Spring Boot project
2. Configure MySQL in `application.properties`
3. Run the application

### Frontend
1. Navigate to Angular project
2. Run:
   npm install
   ng serve

3. Open: http://localhost:4200

### API Example

GET /api/books?page=0&size=5  
Authorization: Bearer TOKEN

## 📌 Future Improvements
- Search & Sorting
- Deployment
