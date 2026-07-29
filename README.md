# 🚗 Vehicle Rental System (SQL + SOLID)

A full-stack Vehicle Rental Management System built with **Node.js**, **Express**, **TypeScript**, **PostgreSQL**, **Prisma ORM**, and **EJS**. This project follows **Layered Architecture**, **Repository Pattern**, **Dependency Injection**, **SOLID Principles**, and **Object-Oriented Programming (OOP)** to create a clean, maintainable, and scalable application.

---

## 📌 Features

- 🚙 Vehicle Management (Add, Update, Delete, View)
- 👤 Customer Management
- 📄 Rental Management
- ✅ Vehicle Availability Tracking
- 🔄 Return Vehicle
- 🎨 Responsive EJS Frontend
- 🗄 PostgreSQL Database
- ⚡ Prisma ORM Integration

---

## 🏗 Architecture

The project follows a layered architecture.

```
Client
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Repositories
   │
   ▼
PostgreSQL (Prisma ORM)
```

---

## 📂 Project Structure

```
src
├── config
├── controllers
├── dto
├── interfaces
├── models
├── repositories
├── services
├── routes
├── views
├── public
├── dependencies.ts
├── app.ts
└── server.ts
```

---

## 🛠 Tech Stack

### Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL

### Frontend

- EJS
- HTML
- CSS

---

## 💡 Concepts Used

### Object-Oriented Programming (OOP)

- Classes
- Objects
- Inheritance
- Encapsulation
- Abstraction

### SOLID Principles

- Single Responsibility Principle
- Open/Closed Principle
- Liskov Substitution Principle
- Interface Segregation Principle
- Dependency Inversion Principle

### Design Patterns

- Repository Pattern
- Dependency Injection
- Layered Architecture
- DTO (Data Transfer Object)

---

## 📋 Modules

### Vehicle

- Add Vehicle
- Update Vehicle
- Delete Vehicle
- View All Vehicles

### Customer

- Register Customer
- View Customers

### Rental

- Rent Vehicle
- Return Vehicle
- View Rental History

---

## 🗃 Database

The project uses **PostgreSQL** with **Prisma ORM**.

Main entities:

- Users
- Vehicles
- Rentals

Relationships:

- One Customer → Many Rentals
- One Vehicle → Many Rentals

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/your-username/vehicle-rental-system-sql-SOLID.git
```

Move into the project

```bash
cd vehicle-rental-system-sql-SOLID
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
DATABASE_URL="your_database_url"
```

Generate Prisma Client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate dev
```

Start the development server

```bash
npm run dev
```

---

## 📷 Screens

- Dashboard
- Vehicle Management
- Customer Management
- Rental Management

---

## 🎯 Learning Objectives

This project was built to practice:

- TypeScript
- PostgreSQL
- Prisma ORM
- Repository Pattern
- Dependency Injection
- SOLID Principles
- OOP
- Layered Architecture
- CRUD Operations

---

## 🔮 Future Improvements

- Authentication & Authorization
- Admin Login
- JWT Authentication
- Search & Filtering
- Pagination
- Image Upload
- Dashboard Analytics
- Unit Testing
- Docker Support
- REST API Version

---

## ⭐ Architecture Highlights

- Layered Architecture
- Repository Pattern
- Dependency Injection
- DTOs
- Domain Models
- Interfaces for loose coupling
- Prisma ORM
- TypeScript
- PostgreSQL

---

## 📄 License

This project is developed for educational purposes.
